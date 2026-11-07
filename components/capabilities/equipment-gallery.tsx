import Image from 'next/image'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

type EquipmentItem = {
  name: string
  model?: string
  image: string
  description: string
}

const productionEquipment: EquipmentItem[] = [
  {
    name: 'Turn-Mill Machining Center',
    model: 'WL200/580Y',
    image: '/images/equipment/turn-mill-center-wl200-580y.jpg',
    description: 'Turn-mill equipment for combining turned and milled features in one machining route.',
  },
  {
    name: 'CNC Inclined-Bed Lathe',
    image: '/images/equipment/cnc-inclined-lathe.jpg',
    description: 'CNC turning equipment for round, stepped and threaded precision components.',
  },
  {
    name: 'Vertical Machining Center',
    model: 'VM1260S',
    image: '/images/equipment/vertical-machining-center-vm1260s.jpg',
    description: 'Vertical machining center for larger prismatic parts, manifolds and plate components.',
  },
  {
    name: 'Vertical Machining Center',
    model: 'VM1050S',
    image: '/images/equipment/vertical-machining-center-vm1050s.jpg',
    description: 'Vertical machining equipment for drilling, milling and multi-feature component work.',
  },
  {
    name: 'Vertical Machining Center',
    model: '850H',
    image: '/images/equipment/vertical-machining-center-850h.jpg',
    description: 'Machining center used for precision milling, hole patterns and finished-face work.',
  },
  {
    name: 'Vertical Machining Center',
    model: 'TC840',
    image: '/images/equipment/vertical-machining-center-tc840.png',
    description: 'Enclosed vertical machining center for controlled production of precision components.',
  },
]

const inspectionEquipment: EquipmentItem[] = [
  {
    name: 'Vision Measuring Instrument',
    image: '/images/equipment/vision-measuring-instrument.png',
    description: 'Optical measurement of profiles, positions, hole features and planar dimensions.',
  },
  {
    name: 'Surface Roughness Instrument',
    image: '/images/equipment/surface-roughness-instrument.png',
    description: 'Surface-finish checks for sealing faces and other specified machined surfaces.',
  },
  {
    name: 'Coordinate Measuring Equipment',
    image: '/images/equipment/coordinate-measuring-equipment.png',
    description: 'Coordinate-based dimensional checks for geometry and positional relationships.',
  },
  {
    name: 'Digital Height Gauges',
    image: '/images/equipment/digital-height-gauges.png',
    description: 'Height and step measurement for machined features and finished component checks.',
  },
]

function EquipmentGrid({ items }: { items: EquipmentItem[] }) {
  return (
    <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={`${item.name}-${item.model ?? index}`} delay={index * 70} className="bg-card">
          <article className="h-full">
            <div className="relative aspect-[4/3] overflow-hidden bg-steel">
              <Image
                src={item.image}
                alt={`${item.model ? `${item.model} ` : ''}${item.name} at Suzhou Deya Precision`}
                fill
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 92vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.025]"
              />
            </div>
            <div className="border-t border-border p-5 sm:p-6">
              {item.model ? <p className="font-mono text-xs tracking-[0.16em] text-primary">{item.model}</p> : null}
              <h3 className="mt-2 text-lg font-semibold text-navy">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

export function EquipmentGallery() {
  return (
    <section aria-labelledby="equipment-gallery-heading" className="py-16 sm:py-24">
      <div className="container-x">
        <div id="equipment-gallery-heading">
          <SectionHeading
            eyebrow="Production Equipment"
            title="Machining equipment shown individually"
            description="Company-supplied equipment photographs, separated from the original presentation for a clear view of each machine."
          />
        </div>
        <EquipmentGrid items={productionEquipment} />

        <div className="mt-20 sm:mt-28">
          <SectionHeading
            eyebrow="Inspection Equipment"
            title="Measurement resources for process and final checks"
            description="Inspection resources used for dimensional, profile, surface-finish and height measurement against drawing requirements."
          />
          <EquipmentGrid items={inspectionEquipment} />
        </div>
      </div>
    </section>
  )
}
