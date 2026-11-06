import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { cn } from '@/lib/utils'
import type { ApplicationSector } from '@/data/types'

export function ApplicationPreview({ sectors }: { sectors: ApplicationSector[] }) {
  const picks = sectors
    .map((sector) => ({
      sector,
      reference: sector.references.find((reference) => reference.image),
    }))
    .filter((entry) => entry.reference?.image)
    .slice(0, 3)

  return (
    <section aria-labelledby="applications-heading" className="py-16 sm:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div id="applications-heading">
            <SectionHeading
              eyebrow="Applications"
              title="Components shown in application context"
              description="Representative sample components, described by component type and application area only."
            />
          </div>
          <Link
            href="/applications"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            All applications
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>

        <ul role="list" className="mt-12 grid gap-8 md:grid-cols-3">
          {picks.map(({ sector, reference }, index) => {
            if (!reference?.image) return null
            return (
              <li key={sector.slug} className={cn(index === 1 && 'md:mt-14')}>
                <Reveal delay={index * 120}>
                  <article>
                    <div className="relative aspect-[4/3] w-full border border-border bg-white">
                      <Image
                        src={reference.image.src}
                        alt={reference.image.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 92vw"
                        className="object-contain p-4"
                      />
                    </div>
                    <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                      {sector.title}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-navy">{reference.title}</h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {reference.componentType}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {reference.detail}
                    </p>
                    <Link
                      href={`/products/${reference.productSlug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      View product
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
