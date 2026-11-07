import type { Product, ProductCategory } from '@/data/types'

export const categories: ProductCategory[] = [
  {
    slug: 'liquid-cooling',
    name: 'Liquid-Cooling Components',
    short: 'Manifolds and connectors',
    description:
      'Stainless steel manifolds and connectors machined for liquid-cooling system assemblies, from compact bodies to extended lengths.',
    icon: 'Droplets',
  },
  {
    slug: 'semiconductor-vacuum',
    name: 'Semiconductor & Vacuum Flanges',
    short: 'Sealing and wafer flanges',
    description:
      'Vacuum sealing flanges, knife-edge sealing flanges and hard-anodised aluminium wafer flanges for semiconductor equipment.',
    icon: 'Cpu',
  },
  {
    slug: 'medical',
    name: 'Medical Titanium Components',
    short: 'TC4 titanium parts',
    description:
      'TC4 titanium alloy components for medical applications, including valve cores and dental surgical parts.',
    icon: 'HeartPulse',
  },
  {
    slug: 'automation-robotics',
    name: 'Non-Standard Automation',
    short: 'Robot and motion parts',
    description:
      'Aluminium structural and joint components for non-standard automation and humanoid robot assemblies.',
    icon: 'Bot',
  },
]

export const products: Product[] = [
  {
    slug: 'liquid-cooling-manifold',
    name: 'Liquid-Cooling Manifold',
    categorySlug: 'liquid-cooling',
    summary: 'Stainless steel manifold body, 60 × 40 × 500 mm.',
    overview:
      'A machined stainless steel manifold in natural finish, documented at 60 × 40 × 500 mm for liquid-cooling assemblies. Port positions, threads and sealing details follow your drawing, so share them with your enquiry.',
    material: 'Stainless steel',
    finish: 'Natural finish',
    dimensions: '60 × 40 × 500 mm',
    moq: '1 piece',
    specifications: { Material: 'Stainless steel', Finish: 'Natural finish', Dimensions: '60 × 40 × 500 mm', MOQ: '1 piece' },
    applications: ['Liquid-cooling systems'],
    gallery: [
      {
        src: '/images/products/liquid-cooling-manifold-500mm.jpg',
        alt: 'Row of machined stainless steel bars, each with flanged threaded bosses along its length',
        note: '500 mm source variant',
      },
    ],
    sourceRow: 4,
    relatedSlugs: ['manifold-connector', 'extended-liquid-cooling-manifold'],
  },
  {
    slug: 'manifold-connector',
    name: 'Manifold Connector',
    categorySlug: 'liquid-cooling',
    summary: 'Stainless steel connector, 60 × 100 × 80 mm.',
    overview:
      'A stainless steel manifold connector in natural finish, documented at 60 × 100 × 80 mm for liquid-cooling assemblies. Port count, thread standard and sealing surfaces follow your drawing.',
    material: 'Stainless steel',
    finish: 'Natural finish',
    dimensions: '60 × 100 × 80 mm',
    moq: '1 piece',
    specifications: { Material: 'Stainless steel', Finish: 'Natural finish', Dimensions: '60 × 100 × 80 mm', MOQ: '1 piece' },
    applications: ['Liquid-cooling systems'],
    gallery: [{ src: '/images/products/manifold-connector.jpg', alt: 'Machined stainless steel manifold connector supplied by the customer', note: 'Customer-supplied product image' }],
    sourceRow: 5,
    relatedSlugs: ['liquid-cooling-manifold', 'extended-liquid-cooling-manifold'],
  },
  {
    slug: 'extended-liquid-cooling-manifold',
    name: 'Extended Liquid-Cooling Manifold',
    categorySlug: 'liquid-cooling',
    summary: 'Long-format stainless steel manifold, 60 × 100 × 2500 mm.',
    overview:
      'A long-format machined stainless steel manifold in natural finish, documented at 60 × 100 × 2500 mm for liquid-cooling assemblies. Port positions, threads, support points and sealing details follow your drawing.',
    material: 'Stainless steel',
    finish: 'Natural finish',
    dimensions: '60 × 100 × 2500 mm',
    moq: '1 piece',
    specifications: { Material: 'Stainless steel', Finish: 'Natural finish', Dimensions: '60 × 100 × 2500 mm', MOQ: '1 piece' },
    applications: ['Liquid-cooling systems'],
    gallery: [
      {
        src: '/images/products/liquid-cooling-manifold-2500mm.jpg',
        alt: 'Long-format machined stainless steel liquid-cooling manifold supplied by the customer',
        note: 'Customer-supplied product image',
      },
    ],
    sourceRow: 6,
    relatedSlugs: ['liquid-cooling-manifold', 'manifold-connector'],
  },
  {
    slug: 'vacuum-sealing-flange',
    name: 'Vacuum Sealing Flange',
    categorySlug: 'semiconductor-vacuum',
    summary: 'Stainless steel sealing flange, 80 × 65 mm.',
    overview:
      'A stainless steel vacuum sealing flange in natural finish, documented at 80 × 65 mm. Sealing face geometry, bolt pattern and surface roughness should be defined on your drawing.',
    material: 'Stainless steel',
    finish: 'Natural finish',
    dimensions: '80 × 65 mm',
    moq: '1 piece',
    specifications: { Material: 'Stainless steel', Finish: 'Natural finish', Dimensions: '80 × 65 mm', MOQ: '1 piece' },
    applications: ['Semiconductor equipment', 'Vacuum sealing'],
    gallery: [
      {
        src: '/images/products/sealing-flange.jpg',
        alt: 'Round machined stainless steel flange with a recessed centre, four bolt holes and white sphere inserts',
        note: 'Customer-supplied product image',
      },
    ],
    sourceRow: 7,
    relatedSlugs: ['knife-edge-sealing-flange', 'wafer-flange'],
  },
  {
    slug: 'knife-edge-sealing-flange',
    name: 'Knife-Edge Sealing Flange',
    categorySlug: 'semiconductor-vacuum',
    summary: 'Stainless steel knife-edge flange, 120 × 25 mm.',
    overview:
      'A stainless steel knife-edge sealing flange in natural finish, documented at 120 × 25 mm. Edge profile, bore and bolt circle follow your drawing.',
    material: 'Stainless steel',
    finish: 'Natural finish',
    dimensions: '120 × 25 mm',
    moq: '1 piece',
    specifications: { Material: 'Stainless steel', Finish: 'Natural finish', Dimensions: '120 × 25 mm', MOQ: '1 piece' },
    applications: ['Semiconductor equipment', 'Vacuum sealing'],
    gallery: [{ src: '/images/products/knife-edge-sealing-flange.jpg', alt: 'Machined stainless steel knife-edge sealing flange supplied by the customer', note: 'Customer-supplied product image' }],
    sourceRow: 8,
    relatedSlugs: ['vacuum-sealing-flange', 'wafer-flange'],
  },
  {
    slug: 'wafer-flange',
    name: 'Wafer Flange',
    categorySlug: 'semiconductor-vacuum',
    summary: 'Hard-anodised aluminium flange, 350 × 35 mm, for 8–12 inch wafer processing.',
    overview:
      'A hard-anodised aluminium flange in natural finish, documented at 350 × 35 mm for 8–12 inch wafer-related processing. Anodising thickness, flatness and feature tolerances should be stated with your enquiry.',
    material: 'Aluminium, hard-anodised',
    finish: 'Natural finish',
    dimensions: '350 × 35 mm',
    moq: '1 piece',
    specifications: { Material: 'Aluminium', Finish: 'Hard anodised, natural colour', Dimensions: '350 × 35 mm', 'Wafer range': '8–12 inch related processing', MOQ: '1 piece' },
    applications: ['Semiconductor equipment', '8–12 inch wafer-related processing'],
    gallery: [{ src: '/images/products/wafer-flange.jpg', alt: 'Hard-anodised aluminium wafer flange supplied by the customer', note: 'Customer-supplied product image' }],
    sourceRow: 9,
    relatedSlugs: ['vacuum-sealing-flange', 'knife-edge-sealing-flange'],
  },
  {
    slug: 'titanium-alloy-valve-core',
    name: 'Titanium Alloy Valve Core',
    categorySlug: 'medical',
    summary: 'TC4 titanium valve core, 17 × 17 × 35 mm.',
    overview:
      'A TC4 titanium alloy valve core in natural finish, documented at 17 × 17 × 35 mm for medical applications. Thread, port and surface requirements follow your drawing.',
    material: 'TC4 titanium alloy',
    finish: 'Natural finish',
    dimensions: '17 × 17 × 35 mm',
    moq: '1 piece',
    specifications: { Material: 'TC4 titanium alloy', Finish: 'Natural finish', Dimensions: '17 × 17 × 35 mm', MOQ: '1 piece' },
    applications: ['Medical applications'],
    gallery: [
      {
        src: '/images/products/titanium-alloy-valve-core.jpg',
        alt: 'Three small turned metal fittings with hexagonal bases, threaded sections and drilled tips',
        note: 'Customer-supplied product image',
      },
    ],
    sourceRow: 10,
    relatedSlugs: ['dental-surgical-tray'],
  },
  {
    slug: 'dental-surgical-tray',
    name: 'Dental Surgical Tray / Component',
    categorySlug: 'medical',
    summary: 'TC4 titanium dental surgical component, 80 × 12 × 130 mm.',
    overview:
      'A TC4 titanium alloy dental surgical tray or component in natural finish, documented at 80 × 12 × 130 mm. Geometry, surface condition and any handling requirements should be defined on your drawing.',
    material: 'TC4 titanium alloy',
    finish: 'Natural finish',
    dimensions: '80 × 12 × 130 mm',
    moq: '1 piece',
    specifications: { Material: 'TC4 titanium alloy', Finish: 'Natural finish', Dimensions: '80 × 12 × 130 mm', MOQ: '1 piece' },
    applications: ['Medical applications', 'Dental surgery'],
    gallery: [
      {
        src: '/images/products/dental-surgical-tray.jpg',
        alt: 'Grey perforated component shaped to hold a dental model, shown on a white background',
        note: 'Customer-supplied product image',
      },
    ],
    sourceRow: 11,
    relatedSlugs: ['titanium-alloy-valve-core'],
  },
  {
    slug: 'humanoid-robot-joint-component',
    name: 'Humanoid Robot Joint Component',
    categorySlug: 'automation-robotics',
    summary: 'Natural aluminium joint component, 90 × 90 × 220 mm.',
    overview:
      'A machined aluminium joint component in natural finish, documented at 90 × 90 × 220 mm for humanoid robot assemblies. Bearing seats, bolt patterns and fit tolerances follow your drawing.',
    material: 'Aluminium',
    finish: 'Natural finish',
    dimensions: '90 × 90 × 220 mm',
    moq: '1 piece',
    specifications: { Material: 'Aluminium', Finish: 'Natural finish', Dimensions: '90 × 90 × 220 mm', MOQ: '1 piece' },
    applications: ['Humanoid robots', 'Non-standard automation'],
    gallery: [
      {
        src: '/images/products/humanoid-robot-joint-component.jpg',
        alt: 'Machined aluminium cylindrical housing with a ring flange, six bolt holes and tapped side holes, held in one hand',
        note: 'Customer-supplied product image',
      },
    ],
    sourceRow: 12,
    relatedSlugs: [],
  },
]
