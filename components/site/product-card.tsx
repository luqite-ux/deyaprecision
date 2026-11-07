import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ProductImage } from '@/components/site/product-image'
import type { Product } from '@/data/types'

export function ProductCard({ product }: { product: Product }) {
  const fillImage = [
    'liquid-cooling-manifold',
    'manifold-connector',
    'extended-liquid-cooling-manifold',
    'humanoid-robot-joint-component',
  ].includes(product.slug)

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col border border-border bg-card transition-colors hover:border-primary"
    >
      <div className="border-b border-border">
        <ProductImage
          image={product.gallery[0]}
          dimensions={product.dimensions}
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 92vw"
          imageClassName={fillImage ? 'object-cover scale-[1.03]' : undefined}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="flex items-start justify-between gap-3 text-lg font-semibold text-navy">
          {product.name}
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary motion-reduce:transition-none"
          />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
        <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-1 border-t border-border pt-4 font-mono text-xs">
          <div>
            <dt className="text-muted-foreground">Material</dt>
            <dd className="mt-0.5 text-foreground">{product.material}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Size</dt>
            <dd className="mt-0.5 text-foreground">{product.dimensions}</dd>
          </div>
        </dl>
      </div>
    </Link>
  )
}
