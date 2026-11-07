import type { ApplicationSector } from '@/data/types'

export const applicationSectors: ApplicationSector[] = [
  {
    slug: 'liquid-cooling',
    title: 'Liquid cooling',
    icon: 'Droplets',
    intro:
      'Stainless steel manifolds and connectors for liquid-cooling system assemblies, documented from compact bodies to 2,500 mm lengths.',
    componentTypes: ['Manifolds', 'Manifold connectors', 'Extended manifolds'],
    references: [
      {
        title: 'Stainless steel manifold bodies',
        componentType: 'Liquid-cooling manifold, 60 × 40 × 500 mm',
        detail:
          'Machined stainless steel manifold bodies with tapped bosses, shown as a representative sample batch.',
        productSlug: 'liquid-cooling-manifold',
        image: {
          src: '/images/products/liquid-cooling-family-white-bg-ai.png',
          alt: 'Row of machined stainless steel bars, each with flanged threaded bosses along its length',
        },
      },
      {
        title: 'Long-format manifold',
        componentType: 'Extended manifold, 60 × 100 × 2500 mm',
        detail: 'A long-format stainless steel manifold documented at 2,500 mm overall length.',
        productSlug: 'extended-liquid-cooling-manifold',
      },
    ],
  },
  {
    slug: 'semiconductor',
    title: 'Semiconductor equipment',
    icon: 'Cpu',
    intro:
      'Sealing and wafer-related flanges in stainless steel and hard-anodised aluminium for semiconductor equipment.',
    componentTypes: ['Vacuum sealing flanges', 'Knife-edge flanges', 'Wafer flanges'],
    references: [
      {
        title: 'Vacuum sealing flange',
        componentType: 'Stainless steel flange, 80 × 65 mm',
        detail:
          'A machined stainless steel sealing flange shown as a representative sample with a recessed face and bolt holes.',
        productSlug: 'vacuum-sealing-flange',
        image: {
          src: '/images/products/sealing-flange.jpg',
          alt: 'Round machined stainless steel flange with a recessed centre, four bolt holes and white sphere inserts',
        },
      },
      {
        title: 'Wafer flange',
        componentType: 'Hard-anodised aluminium, 350 × 35 mm',
        detail: 'Documented for 8–12 inch wafer-related processing.',
        productSlug: 'wafer-flange',
      },
    ],
  },
  {
    slug: 'medical',
    title: 'Medical',
    icon: 'HeartPulse',
    intro: 'TC4 titanium alloy components for medical applications, machined to your drawing.',
    componentTypes: ['Valve cores', 'Dental surgical components'],
    references: [
      {
        title: 'Titanium valve core',
        componentType: 'TC4 titanium alloy, 17 × 17 × 35 mm',
        detail:
          'Small turned fittings with hexagonal bases and threaded sections, shown as representative samples.',
        productSlug: 'titanium-alloy-valve-core',
        image: {
          src: '/images/products/valve-core.jpg',
          alt: 'Three small turned metal fittings with hexagonal bases, threaded sections and drilled tips',
        },
      },
      {
        title: 'Dental surgical component',
        componentType: 'TC4 titanium alloy, 80 × 12 × 130 mm',
        detail: 'A perforated component shown beside a dental model as a representative sample.',
        productSlug: 'dental-surgical-tray',
        image: {
          src: '/images/products/dental-component.jpg',
          alt: 'Grey perforated component shaped to hold a dental model, shown on a white background',
        },
      },
    ],
  },
  {
    slug: 'non-standard-automation',
    title: 'Non-standard automation',
    icon: 'Bot',
    intro:
      'Aluminium joint and structural components for non-standard automation and humanoid robot assemblies.',
    componentTypes: ['Joint components', 'Housings and structural parts'],
    references: [
      {
        title: 'Humanoid robot joint component',
        componentType: 'Aluminium, 90 × 90 × 220 mm',
        detail:
          'A machined cylindrical housing with a ring flange, bolt holes and tapped side holes, shown as a representative sample.',
        productSlug: 'humanoid-robot-joint-component',
        image: {
          src: '/images/products/robot-joint.jpg',
          alt: 'Machined aluminium cylindrical housing with a ring flange, six bolt holes and tapped side holes, held in one hand',
        },
      },
    ],
  },
]
