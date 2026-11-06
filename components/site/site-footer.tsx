import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { getContent } from '@/lib/content'

export function SiteFooter() {
  const { site, nav, categories } = getContent()
  const year = new Date().getFullYear()

  return (
    <footer className="on-dark blueprint bg-navy-deep text-white">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="DEYA Precision, home">
            <span className="flex size-14 items-center justify-center bg-white p-1">
              <Image src="/logo.jpg" alt="" width={48} height={48} className="size-12 object-contain" />
            </span>
            <span className="leading-none">
              <span className="block text-xl font-bold tracking-wide">DEYA</span>
              <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-signal">
                Precision
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/75">{site.tagline}</p>
          <p className="mt-4 text-sm text-white/75">
            <span lang="zh-CN">{site.legalNameZh}</span>
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Product categories">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">Products</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/products/category/${category.slug}`}
                  className="text-white/85 hover:text-white hover:underline"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-white/85">
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal" />
              <a href={`mailto:${site.email}`} className="hover:text-white hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal" />
              <a href={site.phoneHref} className="hover:text-white hover:underline">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal" />
              <address className="not-italic leading-relaxed">{site.address}</address>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x py-6 text-xs text-white/70">
          &copy; {year} {site.legalName} All rights reserved.
        </div>
      </div>
    </footer>
  )
}
