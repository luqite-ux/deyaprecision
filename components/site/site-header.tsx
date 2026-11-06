'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { nav, quoteCta } from '@/data/en/site'
import { cn } from '@/lib/utils'

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      if (y < 120) setHidden(false)
      else if (delta > 10) setHidden(true)
      else if (delta < -6) setHidden(false)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      onFocusCapture={() => setHidden(false)}
      className={cn(
        'sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur transition-transform duration-300 motion-reduce:transition-none',
        hidden && !menuOpen && '-translate-y-full',
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="DEYA Precision, home">
          <Image
            src="/logo.jpg"
            alt=""
            width={44}
            height={44}
            className="size-11 object-contain"
            priority
          />
          <span className="leading-none">
            <span className="block text-lg font-bold tracking-wide text-navy">DEYA</span>
            <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Precision
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                      active ? 'text-primary' : 'text-foreground',
                    )}
                  >
                    {item.label}
                    {active ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-[1px] h-0.5 bg-primary"
                      />
                    ) : null}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex">
            <Link href={quoteCta.href}>{quoteCta.label}</Link>
          </Button>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(22rem,90vw)] gap-0 p-0">
              <div className="border-b border-border p-5">
                <SheetTitle className="text-navy">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation for deyaprecision.com
                </SheetDescription>
              </div>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto p-3">
                <ul>
                  {nav.map((item) => {
                    const active = isActive(pathname, item.href)
                    return (
                      <li key={item.href}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            aria-current={active ? 'page' : undefined}
                            className={cn(
                              'flex items-center justify-between border-b border-border px-3 py-4 text-base font-medium',
                              active ? 'text-primary' : 'text-foreground',
                            )}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      </li>
                    )
                  })}
                </ul>
              </nav>
              <div className="border-t border-border p-5">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <Link href={quoteCta.href}>{quoteCta.label}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
