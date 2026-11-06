'use client'

import { useActionState } from 'react'
import { AlertCircle, Mail, ShieldCheck } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'
import {
  initialEnquiryState,
  submitEnquiry,
  type EnquiryField,
} from '@/app/actions/enquiry'
import { site } from '@/data/en/site'
import { cn } from '@/lib/utils'
import { InquiryCaptchaField } from '@/components/site/inquiry-captcha-field'

type SubjectGroup = { label: string; options: { value: string; label: string }[] }

type EnquiryFormProps = {
  subjectGroups: SubjectGroup[]
  defaultSubject?: string
}

const selectClass =
  'border-input h-10 w-full min-w-0 rounded-md border bg-transparent px-3 text-base shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive md:text-sm'

export function EnquiryForm({ subjectGroups, defaultSubject }: EnquiryFormProps) {
  const [actionState, action, pending] = useActionState(submitEnquiry, initialEnquiryState)
  const state = actionState ?? initialEnquiryState

  const invalid = (name: EnquiryField) => Boolean(state.errors?.[name])
  const describedBy = (name: EnquiryField) => (invalid(name) ? `${name}-error` : undefined)
  const value = (name: EnquiryField) => state.values?.[name] ?? ''

  return (
    <form action={action} noValidate aria-busy={pending} className="space-y-8">
      {state.status === 'unavailable' ? (
        <Alert role="status">
          <Mail aria-hidden="true" />
          <AlertTitle>Online submission is not connected yet</AlertTitle>
          <AlertDescription>
            <p>
              Your details were checked but have not been sent. Please email your drawing and
              requirement to{' '}
              <a href={`mailto:${site.email}`} className="font-medium text-primary underline">
                {site.email}
              </a>{' '}
              or call{' '}
              <a href={site.phoneHref} className="font-medium text-primary underline">
                {site.phone}
              </a>
              .
            </p>
          </AlertDescription>
        </Alert>
      ) : null}

      {state.status === 'success' ? (
        <Alert role="status" className="border-emerald-600 text-emerald-900">
          <ShieldCheck aria-hidden="true" />
          <AlertTitle>Enquiry sent</AlertTitle>
          <AlertDescription>Thank you. Your requirement has been recorded for the DEYA team.</AlertDescription>
        </Alert>
      ) : null}

      {state.status === 'invalid' ? (
        <Alert variant="destructive" role="alert">
          <AlertCircle aria-hidden="true" />
          <AlertTitle>Please check the highlighted fields</AlertTitle>
        </Alert>
      ) : null}

      <FieldGroup>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field data-invalid={invalid('name')}>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              required
              defaultValue={value('name')}
              aria-invalid={invalid('name')}
              aria-describedby={describedBy('name')}
            />
            <FieldError id="name-error">{state.errors?.name}</FieldError>
          </Field>
          <Field data-invalid={invalid('company')}>
            <FieldLabel htmlFor="company">Company</FieldLabel>
            <Input
              id="company"
              name="company"
              autoComplete="organization"
              required
              defaultValue={value('company')}
              aria-invalid={invalid('company')}
              aria-describedby={describedBy('company')}
            />
            <FieldError id="company-error">{state.errors?.company}</FieldError>
          </Field>
          <Field data-invalid={invalid('email')}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              defaultValue={value('email')}
              aria-invalid={invalid('email')}
              aria-describedby={describedBy('email')}
            />
            <FieldError id="email-error">{state.errors?.email}</FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Phone / WhatsApp (optional)</FieldLabel>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              defaultValue={value('phone')}
            />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field data-invalid={invalid('subject')}>
            <FieldLabel htmlFor="subject">Product / application</FieldLabel>
            <select
              id="subject"
              name="subject"
              required
              defaultValue={value('subject') || defaultSubject || ''}
              aria-invalid={invalid('subject')}
              aria-describedby={describedBy('subject')}
              className={cn(selectClass)}
            >
              <option value="" disabled>
                Select one
              </option>
              {subjectGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <FieldError id="subject-error">{state.errors?.subject}</FieldError>
          </Field>
          <Field data-invalid={invalid('quantity')}>
            <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
            <Input
              id="quantity"
              name="quantity"
              inputMode="text"
              placeholder="e.g. 50 pcs, or per month"
              required
              defaultValue={value('quantity')}
              aria-invalid={invalid('quantity')}
              aria-describedby={describedBy('quantity')}
            />
            <FieldError id="quantity-error">{state.errors?.quantity}</FieldError>
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="material">Material (optional)</FieldLabel>
          <Input
            id="material"
            name="material"
            placeholder="e.g. stainless steel, aluminium, TC4 titanium"
            defaultValue={value('material')}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="fileNote">Drawing / file note (optional)</FieldLabel>
          <Input
            id="fileNote"
            name="fileNote"
            placeholder="e.g. STEP and PDF drawing, revision B"
            defaultValue={value('fileNote')}
            aria-describedby="fileNote-hint"
          />
          <FieldDescription id="fileNote-hint">
            Describe the files you will send. Attach them when you reply to our email.
          </FieldDescription>
        </Field>

        <Field data-invalid={invalid('message')}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tolerance-critical features, surface finish, inspection needs and target delivery"
            defaultValue={value('message')}
            aria-invalid={invalid('message')}
            aria-describedby={describedBy('message')}
          />
          <FieldError id="message-error">{state.errors?.message}</FieldError>
        </Field>
      </FieldGroup>

      <InquiryCaptchaField refreshKey={state.refreshKey} className="border border-border bg-steel p-4" />
      {state.errors?.captchaAnswer ? <p role="alert" className="text-sm text-destructive">{state.errors.captchaAnswer}</p> : null}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? <Spinner aria-hidden="true" /> : null}
          {pending ? 'Sending' : 'Send enquiry'}
        </Button>
        <p className="text-xs text-muted-foreground">
          No prices are shown online. Quotations follow a review of your drawing.
        </p>
      </div>
    </form>
  )
}
