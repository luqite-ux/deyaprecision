import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/site/page-hero'
import { getContent } from '@/lib/content'
import { getBackendProduct } from '@/lib/backend-content'

export const dynamicParams = true
export const revalidate = 60
export function generateStaticParams() { return getContent().products.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = await getBackendProduct(slug)
  if (!product) return {}
  const url = `https://deyaprecision.com/products/${product.slug}`
  const image = product.gallery[0]?.src
  return {
    title: product.name,
    description: product.summary || product.overview,
    alternates: { canonical: url },
    openGraph: { type: 'website', url, title: product.name, description: product.summary || product.overview, images: image ? [{ url: image }] : undefined },
    twitter: { card: image ? 'summary_large_image' : 'summary', title: product.name, description: product.summary || product.overview, images: image ? [image] : undefined },
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getBackendProduct(slug)
  if (!product) notFound()
  const productUrl = `https://deyaprecision.com/products/${product.slug}`
  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'Product', '@id': `${productUrl}#product`, name: product.name, description: product.summary || product.overview, url: productUrl, image: product.gallery.map((item) => item.src), manufacturer: { '@id': 'https://deyaprecision.com/#organization' }, additionalProperty: Object.entries(product.specifications).map(([name, value]) => ({ '@type': 'PropertyValue', name, value })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://deyaprecision.com/' }, { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://deyaprecision.com/products' }, { '@type': 'ListItem', position: 3, name: product.name, item: productUrl }] },
  ]
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <PageHero eyebrow="Product example" title={product.name} description={product.summary} crumbs={[{ label: 'Products', href: '/products' }, { label: product.name }]} />
    <main className="container-x grid gap-10 py-16 lg:grid-cols-2">
      <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {product.gallery.length ? product.gallery.map((image) => <figure key={image.src} className="bg-white p-5">
          <div className="relative aspect-square"><Image src={image.src} alt={image.alt} fill className="object-contain" sizes="(min-width: 1024px) 50vw, 100vw" /></div>
          {image.note ? <figcaption className="mt-3 text-sm text-muted-foreground">{image.note}</figcaption> : null}
        </figure>) : <div className="grid aspect-square place-items-center bg-white text-muted-foreground">Drawing-led custom part</div>}
      </div>
      <div><p className="text-lg leading-8 text-muted-foreground">{product.overview}</p><h2 className="mt-10 text-2xl font-semibold text-navy">Supplied parameters</h2><dl className="mt-5 divide-y divide-border border-y border-border">{Object.entries(product.specifications).map(([key, value]) => <div key={key} className="grid grid-cols-2 gap-4 py-3"><dt className="text-sm text-muted-foreground">{key}</dt><dd className="text-sm font-medium text-foreground">{value}</dd></div>)}</dl><a href={`/contact?subject=${product.slug}`} className="mt-8 inline-flex bg-primary px-6 py-3 font-medium text-primary-foreground">Discuss this part</a></div>
    </main>
  </>
}
