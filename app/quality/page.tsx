import { PageHero } from '@/components/site/page-hero'
import { CertificateRail } from '@/components/site/certificate-rail'
import { getContent } from '@/lib/content'
export default function QualityPage(){const content=getContent();return <><PageHero eyebrow="Quality evidence" title="Each supplied certificate, shown separately" description="Review the English and Chinese ISO 9001 certificates and the Class 9 trademark registration as individual documents." crumbs={[{label:'Quality'}]} /><main className="container-x py-16"><CertificateRail certificates={content.certificates}/></main></>}
