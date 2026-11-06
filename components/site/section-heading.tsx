import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
  as?: 'h1' | 'h2'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn('max-w-2xl', className)}>
      <p
        className={cn(
          'flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]',
          dark ? 'text-signal' : 'text-primary',
        )}
      >
        <span aria-hidden="true" className={cn('h-px w-8', dark ? 'bg-signal' : 'bg-primary')} />
        {eyebrow}
      </p>
      <Tag
        className={cn(
          'mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl',
          dark ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            'mt-4 text-pretty text-base leading-relaxed sm:text-lg',
            dark ? 'text-white/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
