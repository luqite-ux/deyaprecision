import { Icon } from '@/components/site/icon-map'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import type { CapabilityItem } from '@/data/types'

export function ProcessOverview({ steps }: { steps: CapabilityItem[] }) {
  return (
    <section aria-labelledby="process-heading" className="on-dark blueprint bg-navy-deep py-16 text-white sm:py-24">
      <div className="container-x">
        <Reveal>
          <div id="process-heading">
            <SectionHeading
              tone="dark"
              eyebrow="Precision manufacturing"
              title="From drawing review to inspected part"
              description="Every requirement follows the same route: review, machine, measure during production, then check the finished part against your drawing."
            />
          </div>
        </Reveal>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-white/25 lg:block"
          />
          {steps.map((step, index) => (
            <li key={step.title} className="relative lg:pr-8">
              <Reveal delay={index * 110}>
                <div className="relative flex size-12 items-center justify-center border border-signal bg-navy-deep text-signal">
                  <Icon name={step.icon} className="size-6" />
                </div>
                <p className="mt-5 font-mono text-xs tracking-[0.18em] text-signal">
                  STEP {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
