'use server'

import { createSupabaseCaptchaContextFromEnv, verifyCaptchaSubmission } from '@/lib/inquiry-captcha'

export type EnquiryField =
  | 'name'
  | 'company'
  | 'email'
  | 'phone'
  | 'subject'
  | 'quantity'
  | 'material'
  | 'fileNote'
  | 'message'
  | 'captchaAnswer'

export type EnquiryState = {
  status: 'idle' | 'invalid' | 'success' | 'unavailable'
  errors: Partial<Record<EnquiryField, string>>
  values: Partial<Record<EnquiryField, string>>
  refreshKey: number
}

export const initialEnquiryState: EnquiryState = { status: 'idle', errors: {}, values: {}, refreshKey: 0 }

const fields: EnquiryField[] = [
  'name',
  'company',
  'email',
  'phone',
  'subject',
  'quantity',
  'material',
  'fileNote',
  'message',
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const values: EnquiryState['values'] = {}
  for (const field of fields) {
    const raw = formData.get(field)
    values[field] = typeof raw === 'string' ? raw.trim().slice(0, 4000) : ''
  }

  const errors: EnquiryState['errors'] = {}
  const captchaScope = String(formData.get('captchaScope') ?? '')
  const captchaToken = String(formData.get('captchaToken') ?? '')
  const captchaAnswer = String(formData.get('captchaAnswer') ?? '')
  try {
    const context = createSupabaseCaptchaContextFromEnv()
    const captcha = await verifyCaptchaSubmission({
      secret: process.env.CAPTCHA_SECRET ?? '',
      scope: captchaScope,
      token: captchaToken,
      answer: captchaAnswer,
      ...context,
    })
    if (!captcha.ok) errors.captchaAnswer = 'The security code is invalid or expired. Please try the refreshed code.'
  } catch {
    return { status: 'unavailable', errors: {}, values, refreshKey: _previous.refreshKey + 1 }
  }
  if (!values.name) errors.name = 'Enter your name.'
  if (!values.company) errors.company = 'Enter your company name.'
  if (!values.email) errors.email = 'Enter your email address.'
  else if (!emailPattern.test(values.email)) errors.email = 'Enter a valid email address.'
  if (!values.subject) errors.subject = 'Choose a product or application.'
  if (!values.quantity) errors.quantity = 'Enter the quantity you need.'
  if (!values.message) errors.message = 'Describe your requirement.'

  if (Object.keys(errors).length > 0) return { status: 'invalid', errors, values, refreshKey: _previous.refreshKey + 1 }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, '')
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID
  if (!supabaseUrl || !serviceRoleKey || !tenantId) return { status: 'unavailable', errors: {}, values, refreshKey: _previous.refreshKey + 1 }
  const response = await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
    method: 'POST',
    headers: { apikey: serviceRoleKey, authorization: `Bearer ${serviceRoleKey}`, 'content-type': 'application/json', prefer: 'return=minimal' },
    body: JSON.stringify({ tenant_id: tenantId, name: values.name, company: values.company, email: values.email, phone: values.phone, subject: values.subject, message: [`Quantity: ${values.quantity}`, `Material: ${values.material || 'Not specified'}`, `Drawing/file note: ${values.fileNote || 'Not specified'}`, '', values.message].join('\n') }),
    cache: 'no-store',
  })
  if (!response.ok) return { status: 'unavailable', errors: {}, values, refreshKey: _previous.refreshKey + 1 }
  return { status: 'success', errors: {}, values: {}, refreshKey: _previous.refreshKey + 1 }
}
