import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/reveal'
import { site } from '@/data/en/site'

export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="on-dark blueprint bg-navy-deep text-white">
      <div className="container-x py-16 sm:py-20">
        <Reveal className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-signal">
              <span aria-hidden="true" className="h-px w-8 bg-signal" />
              Start with a drawing
            </p>
            <h2
              id="cta-heading"
              className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            >
              Send the drawing, material and quantity.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/80">
              Include tolerance-critical features and inspection needs. Each requirement is reviewed
              individually before a quotation is prepared.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90">
              <Link href="/contact">
                Request a Quote
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`mailto:${site.email}`}>
                <Mail aria-hidden="true" />
                {site.email}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
