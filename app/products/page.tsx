import Link from 'next/link'
import { PageHero } from '@/components/site/page-hero'
import { Icon } from '@/components/site/icon-map'
import { ProductCard } from '@/components/site/product-card'
import { getBackendCategories, getBackendProducts } from '@/lib/backend-content'

export const revalidate=60
export default async function ProductsPage({searchParams}:{searchParams:Promise<{category?:string}>}) {
  const [{category:selectedCategory},products,categories]=await Promise.all([searchParams,getBackendProducts(),getBackendCategories()])
  const visibleProducts=selectedCategory?products.filter(product=>product.categorySlug===selectedCategory):products
  return <><PageHero eyebrow="Drawing-led manufacturing" title="Precision-machined components" description="Explore supplied product examples by application, then send your drawing for a manufacturability and quotation review." crumbs={[{label:'Products'}]} /><main className="container-x py-16">
    <nav aria-label="Product categories" className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <Link href="/products" className={`flex items-center justify-center border px-4 py-4 text-sm font-semibold transition-colors ${!selectedCategory?'border-primary bg-primary text-white':'border-border bg-card text-navy hover:border-primary'}`}>All products</Link>
      {categories.map(category=><Link key={category.slug} href={`/products?category=${category.slug}`} className={`flex items-center gap-3 border px-4 py-4 text-sm font-semibold transition-colors ${selectedCategory===category.slug?'border-primary bg-primary text-white':'border-border bg-card text-navy hover:border-primary'}`}><Icon name={category.icon} className="size-5 shrink-0" /><span>{category.name}</span></Link>)}
    </nav>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visibleProducts.map((product)=><ProductCard key={product.slug} product={product} />)}</div>
  </main></>
}
