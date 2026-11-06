'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const selector = 'main section'

export function ViewportRevealController() {
  const pathname = usePathname()

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observed = new Set<Element>()
    const observer = reducedMotion
      ? null
      : new IntersectionObserver(
          entries => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue
              entry.target.setAttribute('data-viewport-reveal', 'shown')
              observer?.unobserve(entry.target)
              observed.delete(entry.target)
            }
          },
          { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
        )

    const register = () => {
      for (const section of document.querySelectorAll(selector)) {
        if (section.querySelector('.reveal') || section.closest('[data-viewport-reveal]')) continue
        if (section.hasAttribute('data-viewport-reveal')) continue
        section.setAttribute('data-viewport-reveal', reducedMotion ? 'shown' : 'pending')
        if (observer) {
          observer.observe(section)
          observed.add(section)
        }
      }
    }

    register()
    const mutations = new MutationObserver(register)
    const main = document.querySelector('main')
    if (main) mutations.observe(main, { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer?.disconnect()
      observed.clear()
    }
  }, [pathname])

  return null
}
