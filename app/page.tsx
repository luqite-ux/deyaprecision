import { ApplicationPreview } from '@/components/home/application-preview'
import { CapabilitySplit } from '@/components/home/capability-split'
import { CertificatesSection } from '@/components/home/certificates-section'
import { CompanySection } from '@/components/home/company-section'
import { FaqSection } from '@/components/home/faq-section'
import { Industries } from '@/components/home/industries'
import { ProcessOverview } from '@/components/home/process-overview'
import { ProductFamilies } from '@/components/home/product-families'
import { CtaBand } from '@/components/site/cta-band'
import { HeroCarousel } from '@/components/site/hero-carousel'
import { getContent } from '@/lib/content'
import { getBackendProducts } from '@/lib/backend-content'

export const revalidate = 60
export default async function HomePage() {
  const content = getContent()
  const products = await getBackendProducts()
  const { productionEquipment, inspectionEquipment, processSteps, capacityNote } =
    content.capabilities

  return (
    <>
      <HeroCarousel slides={content.heroSlides} />
      <ProductFamilies categories={content.categories} products={products} />
      <ProcessOverview steps={processSteps} />
      <CapabilitySplit
        production={productionEquipment}
        inspection={inspectionEquipment}
        capacityNote={capacityNote}
      />
      <Industries sectors={content.applicationSectors} />
      <ApplicationPreview sectors={content.applicationSectors} />
      <CertificatesSection certificates={content.certificates} />
      <CompanySection />
      <FaqSection groups={content.faqGroups} />
      <CtaBand />
    </>
  )
}
