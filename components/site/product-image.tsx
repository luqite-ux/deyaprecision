import Image from 'next/image'
import { Box } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ImageAsset } from '@/data/types'

type ProductImageProps = {
  image?: ImageAsset
  dimensions: string
  sizes: string
  priority?: boolean
  className?: string
}

export function ProductImage({ image, dimensions, sizes, priority, className }: ProductImageProps) {
  return (
    <div
      className={cn(
        'relative aspect-[4/3] w-full overflow-hidden bg-white',
        !image && 'blueprint-light bg-steel',
        className,
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <Box className="size-9 text-navy/60" strokeWidth={1.25} aria-hidden="true" />
          <p className="font-mono text-sm text-navy">{dimensions}</p>
          <p className="text-xs text-muted-foreground">Product photograph to be added</p>
        </div>
      )}
    </div>
  )
}
