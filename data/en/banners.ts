import type { HeroSlide } from '@/data/types'

export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-01',
    eyebrow: 'Precision manufacturing',
    headline: 'Precision Components Built Around Your Drawing',
    supporting:
      'CNC turning, milling and process control for demanding liquid-cooling, semiconductor, medical and automation applications.',
    ctaLabel: 'Explore Capabilities',
    ctaHref: '/capabilities',
    tabLabel: 'Capabilities',
    image: '/images/banners/banner-01.jpg',
    mobilePosition: '88% 50%',
    desktopContentLeft: '16%',
    desktopContentWidth: '35%',
    align: 'left',
    panel: false,
  },
  {
    id: 'hero-02',
    eyebrow: 'Product range',
    headline: 'From Manifolds to Sealing and Medical Components',
    supporting:
      'Review documented product families, materials, dimensions and application context before sending your requirement.',
    ctaLabel: 'View Products',
    ctaHref: '/products',
    tabLabel: 'Products',
    image: '/images/banners/banner-02.jpg',
    mobilePosition: '14% 50%',
    desktopContentLeft: '47%',
    desktopContentWidth: '38%',
    align: 'right',
    panel: true,
  },
  {
    id: 'hero-03',
    eyebrow: 'Drawing to enquiry',
    headline: 'A Clear Path from Technical Requirement to Production',
    supporting:
      'Share drawings, materials, quantities and inspection needs for a requirement-specific review.',
    ctaLabel: 'Discuss Your Drawing',
    ctaHref: '/contact',
    tabLabel: 'Your drawing',
    image: '/images/banners/banner-03.jpg',
    mobilePosition: '78% 50%',
    desktopContentLeft: '11%',
    desktopContentWidth: '35%',
    align: 'left',
    panel: false,
  },
]
