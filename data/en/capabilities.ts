import type { CapabilityItem } from '@/data/types'

export const productionEquipment: CapabilityItem[] = [
  {
    title: 'CNC turning',
    description:
      'CNC lathes for round, stepped and threaded parts such as valve cores, fittings and flange blanks.',
    icon: 'RotateCw',
  },
  {
    title: 'Turn-mill machining',
    description:
      'Turning and milling centres that combine round and prismatic features, reducing re-fixturing on complex parts.',
    icon: 'Cog',
  },
  {
    title: 'Vertical machining',
    description:
      'Vertical machining for prismatic bodies, manifolds, plates and housings with drilled and tapped features.',
    icon: 'Drill',
  },
]

export const inspectionEquipment: CapabilityItem[] = [
  {
    title: 'Surface roughness',
    description: 'Roughness measurement for sealing faces and finished surfaces.',
    icon: 'Waves',
  },
  {
    title: 'Profile measurement',
    description: 'Profile checks on contours, edges and sealing geometry.',
    icon: 'Spline',
  },
  {
    title: 'Dimensional measurement',
    description: 'Dimensional measurement of diameters, lengths, positions and hole features.',
    icon: 'Ruler',
  },
  {
    title: 'Height measurement',
    description: 'Height measurement for steps, flange thickness and overall part height.',
    icon: 'MoveVertical',
  },
]

export const processSteps: CapabilityItem[] = [
  {
    title: 'Drawing and requirement review',
    description:
      'Drawings, material, quantity and inspection needs are reviewed before a quotation is prepared.',
    icon: 'FileSearch',
  },
  {
    title: 'Machining',
    description: 'Parts are routed to turning, turn-mill or vertical machining as the geometry requires.',
    icon: 'Cog',
  },
  {
    title: 'Process inspection',
    description: 'Key dimensions are measured during production against the drawing.',
    icon: 'ScanSearch',
  },
  {
    title: 'Finished-product inspection',
    description: 'Finished parts are checked against drawing requirements before dispatch preparation.',
    icon: 'ClipboardCheck',
  },
]

export const facilityFacts = [
  { value: '≈ 1,000 m²', label: 'Site area' },
  { value: '2', label: 'Workshops' },
  { value: '2', label: 'Production lines' },
] as const

export const capacityNote =
  'Indicative capacity is around 1,000,000 pieces per month and 30,000 pieces per day, depending on part geometry. Order acceptance and lead time are confirmed per quotation.'
