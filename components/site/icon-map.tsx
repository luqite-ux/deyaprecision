import {
  Bot,
  ClipboardCheck,
  Cog,
  Cpu,
  Drill,
  Droplets,
  FileSearch,
  HeartPulse,
  Layers,
  MoveVertical,
  PackageCheck,
  RotateCw,
  Ruler,
  ScanSearch,
  Spline,
  Waves,
  type LucideProps,
} from 'lucide-react'
import type { IconName } from '@/data/types'

const icons = {
  Bot,
  ClipboardCheck,
  Cog,
  Cpu,
  Drill,
  Droplets,
  FileSearch,
  HeartPulse,
  Layers,
  MoveVertical,
  PackageCheck,
  RotateCw,
  Ruler,
  ScanSearch,
  Spline,
  Waves,
} satisfies Record<IconName, React.ComponentType<LucideProps>>

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name]
  return <Component aria-hidden="true" strokeWidth={1.5} {...props} />
}
