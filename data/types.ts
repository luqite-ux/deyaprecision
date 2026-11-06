export type IconName =
  | 'Droplets'
  | 'Cpu'
  | 'HeartPulse'
  | 'Bot'
  | 'Cog'
  | 'RotateCw'
  | 'Drill'
  | 'Waves'
  | 'Spline'
  | 'Ruler'
  | 'MoveVertical'
  | 'FileSearch'
  | 'ClipboardCheck'
  | 'PackageCheck'
  | 'Layers'
  | 'ScanSearch'

export type ImageAsset = {
  src: string
  alt: string
  note?: string
}

export type ProductCategory = {
  slug: string
  name: string
  short: string
  description: string
  icon: IconName
}

export type Product = {
  slug: string
  name: string
  categorySlug: string
  summary: string
  overview: string
  material: string
  finish: string
  dimensions: string
  moq: string
  specifications: Record<string, string>
  applications: string[]
  gallery: ImageAsset[]
  /** Row number in the customer product workbook, kept for traceability. */
  sourceRow: number
  relatedSlugs: string[]
}

export type HeroSlide = {
  id: string
  eyebrow: string
  headline: string
  supporting: string
  ctaLabel: string
  ctaHref: string
  tabLabel: string
  image: string
  mobilePosition: string
  align: 'left' | 'right'
  panel: boolean
}

export type Certificate = {
  id: string
  title: string
  kind: string
  language: string
  details: string[]
  image: string
  alt: string
}

export type ApplicationSector = {
  slug: string
  title: string
  icon: IconName
  intro: string
  componentTypes: string[]
  references: ApplicationReference[]
}

export type ApplicationReference = {
  title: string
  componentType: string
  detail: string
  productSlug: string
  image?: ImageAsset
}

export type CapabilityItem = {
  title: string
  description: string
  icon: IconName
}

export type FaqGroup = {
  id: string
  title: string
  items: { question: string; answer: string }[]
}
