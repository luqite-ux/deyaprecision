import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  crumbs?: Crumb[]
  children?: React.ReactNode
  compact?: boolean
}

export function PageHero({ eyebrow, title, description, crumbs, children, compact = false }: PageHeroProps) {
  return (
    <section className="on-dark blueprint bg-navy-deep text-white">
      <div className={`container-x ${compact ? 'py-8 sm:py-10' : 'py-12 sm:py-16'}`}>
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className={compact ? 'mb-5' : 'mb-8'}>
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/75">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <ChevronRight aria-hidden="true" className="size-3" />
                  {crumb.href && index < crumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-white hover:underline">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-signal">
          <span aria-hidden="true" className="h-px w-8 bg-signal" />
          {eyebrow}
        </p>
        <h1 className={`mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight ${compact ? 'sm:text-4xl' : 'sm:text-5xl'}`}>
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  )
}
