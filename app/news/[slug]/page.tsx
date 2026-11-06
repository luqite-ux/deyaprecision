import { notFound } from 'next/navigation'
import { PageHero } from '@/components/site/page-hero'
import { getPublishedArticle } from '@/lib/backend-content'
export const dynamicParams=true
export const revalidate=60
export default async function NewsDetailPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=await getPublishedArticle(slug);if(!article)notFound();return <><PageHero eyebrow="News" title={article.title} description={article.excerpt} crumbs={[{label:'News',href:'/news'},{label:article.title}]} /><article className="article-prose container-x max-w-4xl py-16" dangerouslySetInnerHTML={{__html:article.content}} /></>}
