import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { site } from '@/data/en/site'
import { facilityFacts } from '@/data/en/capabilities'

export function CompanySection() {
  const metrics = [
    { value: '2020', label: 'Established' },
    ...facilityFacts,
    { value: 'ISO 9001', label: 'Certified system' },
  ]

  return (
    <section aria-labelledby="company-heading" className="py-16 sm:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <figure>
            <div className="relative aspect-square w-full overflow-hidden bg-steel">
              <Image
                src="/images/company/facade.png"
                alt="Illustrative view of a glass-fronted company building with a navy entrance sign reading the Chinese company name"
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-xs text-muted-foreground">
              Illustrative company image.
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <div id="company-heading">
              <SectionHeading
                eyebrow="Company"
                title="Suzhou Deya Precision Technology"
                description="Founded in Suzhou in 2020, DEYA machines precision components for liquid-cooling systems, semiconductor equipment, medical applications and non-standard automation."
              />
            </div>
          </Reveal>

          <dl className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 80} className="bg-card p-5">
                <dd className="font-mono text-xl font-medium text-navy sm:text-2xl">{metric.value}</dd>
                <dt className="mt-1 text-xs text-muted-foreground">{metric.label}</dt>
              </Reveal>
            ))}
          </dl>

          <Reveal className="mt-8">
            <address className="not-italic text-sm leading-relaxed text-muted-foreground">
              {site.address}
            </address>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              About DEYA
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
