import { createClient } from '@supabase/supabase-js'

export function getTenantId(){return process.env.NEXT_PUBLIC_TENANT_ID?.trim()||null}
export function createPublicClient(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL?.trim(),key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();if(!url||!key)return null;return createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}})}
