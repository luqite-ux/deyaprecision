import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Icon } from '@/components/site/icon-map'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import type { ApplicationSector } from '@/data/types'

export function Industries({ sectors }: { sectors: ApplicationSector[] }) {
  return (
    <section aria-labelledby="industries-heading" className="bg-steel py-16 sm:py-24">
      <div className="container-x">
        <Reveal>
          <div id="industries-heading">
            <SectionHeading
              eyebrow="Industries served"
              title="Components for four application areas"
              description="Parts are machined to customer drawings for these sectors. Each area lists the component types documented so far."
            />
          </div>
        </Reveal>

        <ul role="list" className="mt-12 grid border-t border-navy sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <li
              key={sector.slug}
              className="border-b border-border sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
            >
              <Reveal delay={index * 90} className="h-full">
                <Link
                  href={`/applications#${sector.slug}`}
                  className="group flex h-full flex-col p-6 transition-colors hover:bg-white"
                >
                  <Icon name={sector.icon} className="size-8 text-primary" />
                  <h3 className="mt-5 text-lg font-semibold text-navy">{sector.title}</h3>
                  <ul role="list" className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {sector.componentTypes.map((type) => (
                      <li key={type} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-primary" />
                        {type}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    See application
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                    />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
