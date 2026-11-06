import type { Product } from '@/data/types'

const url=process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/,'')
const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const tenant=process.env.NEXT_PUBLIC_TENANT_ID
const headers:Record<string,string>=key?{apikey:key,authorization:`Bearer ${key}`}:{ }

async function query<T>(resource:string):Promise<T>{
  if(!url||!key||!tenant)throw new Error('Backend environment is unavailable')
  const response=await fetch(`${url}/rest/v1/${resource}`,{headers, next:{revalidate:60}})
  if(!response.ok)throw new Error(`Backend query failed: ${response.status}`)
  return response.json() as Promise<T>
}

type ProductRow={slug:string;name_i18n?:Record<string,string>;name?:string;description_i18n?:Record<string,string>;description?:string;overview_i18n?:Record<string,string>;overview?:string;applications_i18n?:Record<string,string[]>;applications?:string[];specs?:Record<string,string>;image_url?:string;category_slug?:string;extra_data?:{images?:string[];dimensions?:string;material?:string;finish?:string;moq?:string;source_row?:number}}
export async function getBackendProducts():Promise<Product[]>{
  try{
    const rows=await query<ProductRow[]>(`products?tenant_id=eq.${tenant}&is_active=eq.true&select=*&order=sort_order.asc`)
    return rows.map(row=>{
      const images=row.extra_data?.images?.length?row.extra_data.images:(row.image_url?[row.image_url]:[])
      return {slug:row.slug,name:row.name_i18n?.en||row.name||row.slug,categorySlug:row.category_slug||'',summary:row.description_i18n?.en||row.description||'',overview:row.overview_i18n?.en||row.overview||'',material:row.extra_data?.material||'',finish:row.extra_data?.finish||'',dimensions:row.extra_data?.dimensions||'',moq:row.extra_data?.moq||'',specifications:row.specs||{},applications:row.applications_i18n?.en||row.applications||[],gallery:images.map((src,index)=>({src,alt:`${row.name_i18n?.en||row.name||row.slug}${images.length>1?` variant ${index+1}`:''}`,note:images.length>1?`Source variant ${index+1}`:'Customer-supplied product image'})),sourceRow:row.extra_data?.source_row||0,relatedSlugs:[]}
    })
  }catch{return []}
}
export async function getBackendProduct(slug:string){return (await getBackendProducts()).find(p=>p.slug===slug)}

export type Article={slug:string;title:string;excerpt:string;content:string;featuredImage?:string;publishedAt?:string}
type ArticleRow={slug:string;title_i18n?:Record<string,string>;title?:string;excerpt_i18n?:Record<string,string>;excerpt?:string;content_i18n?:Record<string,string>;content?:string;featured_image?:string;published_at?:string}
export async function getPublishedArticles():Promise<Article[]>{
  try{return (await query<ArticleRow[]>(`articles?tenant_id=eq.${tenant}&is_published=eq.true&select=*&order=sort_order.asc,published_at.desc`)).map(row=>({slug:row.slug,title:row.title_i18n?.en||row.title||'',excerpt:row.excerpt_i18n?.en||row.excerpt||'',content:row.content_i18n?.en||row.content||'',featuredImage:row.featured_image,publishedAt:row.published_at}))}catch{return []}
}
export async function getPublishedArticle(slug:string){return (await getPublishedArticles()).find(a=>a.slug===slug)}
