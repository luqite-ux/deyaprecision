import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Icon } from '@/components/site/icon-map'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import type { CapabilityItem } from '@/data/types'

type CapabilitySplitProps = {
  production: CapabilityItem[]
  inspection: CapabilityItem[]
  capacityNote: string
}

function ItemList({ items, startDelay = 0 }: { items: CapabilityItem[]; startDelay?: number }) {
  return (
    <ul role="list" className="mt-6 divide-y divide-border border-y border-border">
      {items.map((item, index) => (
        <li key={item.title}>
          <Reveal delay={startDelay + index * 80} className="flex gap-4 py-5">
            <span className="flex size-11 shrink-0 items-center justify-center bg-navy text-white">
              <Icon name={item.icon} className="size-5" />
            </span>
            <div>
              <h4 className="font-semibold text-navy">{item.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

export function CapabilitySplit({ production, inspection, capacityNote }: CapabilitySplitProps) {
  return (
    <section aria-labelledby="capability-heading" className="py-16 sm:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div id="capability-heading">
            <SectionHeading
              eyebrow="Capability"
              title="Machining and measuring, documented separately"
              description="Production equipment and inspection resources are listed on their own, so you can match each to your drawing."
            />
          </div>
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Full capability detail
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Production equipment
            </h3>
            <ItemList items={production} />
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Inspection equipment
            </h3>
            <ItemList items={inspection} startDelay={120} />
          </div>
        </div>

        <Reveal className="mt-12 border-l-2 border-primary bg-steel p-5 text-sm leading-relaxed text-muted-foreground">
          {capacityNote}
        </Reveal>
      </div>
    </section>
  )
}
