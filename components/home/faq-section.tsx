import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FaqGroups } from '@/components/site/faq-groups'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import type { FaqGroup } from '@/data/types'

export function FaqSection({ groups }: { groups: FaqGroup[] }) {
  return (
    <section aria-labelledby="faq-section-heading" className="border-t border-border bg-steel py-16 sm:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div id="faq-section-heading">
            <SectionHeading
              eyebrow="Before you enquire"
              title="Answers on quotations, materials and drawings"
            />
          </div>
          <Link
            href="/contact#faq"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            All questions
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
        <Reveal className="mt-12">
          <FaqGroups groups={groups.slice(0, 2)} idPrefix="home-faq" />
        </Reveal>
      </div>
    </section>
  )
}
