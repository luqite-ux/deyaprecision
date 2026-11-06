import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CertificateRail } from '@/components/site/certificate-rail'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import type { Certificate } from '@/data/types'

export function CertificatesSection({ certificates }: { certificates: Certificate[] }) {
  return (
    <section aria-labelledby="certificates-heading" className="border-y border-border bg-steel py-16 sm:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div id="certificates-heading">
            <SectionHeading
              eyebrow="Quality evidence"
              title="Certificates, each shown complete"
              description="The ISO 9001 certificate in English and Chinese, and the trademark registration, are presented as separate documents."
            />
          </div>
          <Link
            href="/quality"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Quality and certifications
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
        <Reveal className="mt-12">
          <CertificateRail certificates={certificates} />
        </Reveal>
      </div>
    </section>
  )
}
