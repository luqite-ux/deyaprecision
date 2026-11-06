import { PageHero } from '@/components/site/page-hero'
import { ProductCard } from '@/components/site/product-card'
import { getBackendProducts } from '@/lib/backend-content'

export const revalidate=60
export default async function ProductsPage() {
  const products=await getBackendProducts()
  return <><PageHero eyebrow="Drawing-led manufacturing" title="Precision-machined components" description="Explore supplied product examples by application, then send your drawing for a manufacturability and quotation review." crumbs={[{label:'Products'}]} /><main className="container-x py-16"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map((product)=><ProductCard key={product.slug} product={product} />)}</div></main></>
}
