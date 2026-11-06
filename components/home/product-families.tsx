import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Icon } from '@/components/site/icon-map'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import type { Product, ProductCategory } from '@/data/types'

type ProductFamiliesProps = {
  categories: ProductCategory[]
  products: Product[]
}

export function ProductFamilies({ categories, products }: ProductFamiliesProps) {
  return (
    <section aria-labelledby="families-heading" className="py-16 sm:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div id="families-heading">
            <SectionHeading
              eyebrow="Product families"
              title="Choose by application and geometry"
              description="Four documented families, each listing material, size and minimum order quantity."
            />
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            All products
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>

        <ul role="list" className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const inCategory = products.filter((p) => p.categorySlug === category.slug)
            const image = inCategory.find((p) => p.gallery.length > 0)?.gallery[0]
            return (
              <li key={category.slug} className="bg-card">
                <Reveal delay={index * 90} className="h-full">
                  <Link
                    href={`/products/category/${category.slug}`}
                    className="group flex h-full flex-col transition-colors hover:bg-steel"
                  >
                    <div className="relative aspect-[4/3] w-full bg-white">
                      {image ? (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                          className="object-contain p-4"
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col border-t border-border p-6">
                      <div className="flex items-center gap-3 text-primary">
                        <Icon name={category.icon} className="size-6" />
                        <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          {inCategory.length} {inCategory.length === 1 ? 'product' : 'products'}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold leading-snug text-navy">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {category.short}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                        View family
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
