import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

const equipment = [
  {
    name: 'Vision Measuring Instrument',
    image: '/images/equipment/vision-measuring-instrument.png',
  },
  {
    name: 'Surface Roughness Instrument',
    image: '/images/equipment/surface-roughness-instrument.png',
  },
  {
    name: 'Coordinate Measuring Equipment',
    image: '/images/equipment/coordinate-measuring-equipment.png',
  },
  {
    name: 'Digital Height Gauges',
    image: '/images/equipment/digital-height-gauges.png',
  },
]

export function InspectionEquipmentPreview() {
  return (
    <section aria-labelledby="home-inspection-equipment" className="bg-steel/45 py-16 sm:py-20">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div id="home-inspection-equipment">
            <SectionHeading
              eyebrow="Inspection Equipment"
              title="Measurement resources for drawing-based checks"
              description="Representative inspection equipment used for dimensional, surface-finish and height measurement."
            />
          </div>
          <Link
            href="/capabilities#equipment-gallery-heading"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View equipment details
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map((item, index) => (
            <Reveal key={item.name} delay={index * 70} className="bg-card">
              <article className="h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-steel">
                  <Image
                    src={item.image}
                    alt={`${item.name} at Suzhou Deya Precision`}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.025]"
                  />
                </div>
                <h3 className="border-t border-border p-4 text-sm font-semibold text-navy">{item.name}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
