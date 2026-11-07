import { PageHero } from '@/components/site/page-hero'
import { CapabilitySplit } from '@/components/home/capability-split'
import { ProcessOverview } from '@/components/home/process-overview'
import { EquipmentGallery } from '@/components/capabilities/equipment-gallery'
import { getContent } from '@/lib/content'
export default function CapabilitiesPage(){const {capabilities:c}=getContent();return <><PageHero compact eyebrow="Machining and inspection" title="A traceable route from drawing review to finished-part inspection" description={c.capacityNote} crumbs={[{label:'Capabilities'}]} /><ProcessOverview compact steps={c.processSteps}/><EquipmentGallery/><CapabilitySplit production={c.productionEquipment} inspection={c.inspectionEquipment} capacityNote={c.capacityNote}/></>}
