'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { HeroSlide } from '@/data/types'
import type { TypographyOverride } from '@/lib/site-content/transport'

type HeadlineStyle = React.CSSProperties & {'--headline-size-mobile'?:string;'--headline-size-desktop'?:string}
export function HeroCarousel({ slides, headlineTypography = {} }: { slides: HeroSlide[]; headlineTypography?: Record<string,TypographyOverride> }) {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [hovering, setHovering] = useState(false)
  const [keyboardFocus, setKeyboardFocus] = useState(false)
  const swipeStart = useRef<number | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false)
  }, [])

  const go = useCallback(
    (index: number) => setActive((index + slides.length) % slides.length),
    [slides.length],
  )
  const next = useCallback(() => setActive((i) => (i + 1) % slides.length), [slides.length])
  const prev = useCallback(
    () => setActive((i) => (i - 1 + slides.length) % slides.length),
    [slides.length],
  )

  const running = playing && !hovering && !keyboardFocus

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured capabilities"
      className="on-dark bg-navy-deep"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={(event) => {
        if (event.target.matches(':focus-visible')) setKeyboardFocus(true)
      }}
      onBlur={() => setKeyboardFocus(false)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') prev()
        if (event.key === 'ArrowRight') next()
      }}
    >
      <h1 className="sr-only">
        Suzhou Deya Precision Technology Co., Ltd. Precision-machined components
      </h1>

      <div
        className="grid touch-pan-y"
        aria-live={playing ? 'off' : 'polite'}
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse') swipeStart.current = event.clientX
        }}
        onPointerUp={(event) => {
          if (swipeStart.current === null) return
          const dx = event.clientX - swipeStart.current
          swipeStart.current = null
          if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
        }}
        onPointerCancel={() => {
          swipeStart.current = null
        }}
      >
        {slides.map((slide, index) => {
          const isActive = index === active
          const right = slide.align === 'right'
          const typography=headlineTypography[slide.id]
          const headlineStyle:HeadlineStyle={
            ...(typography?.fontFamily==='site-sans'?{fontFamily:'var(--font-sans)'}:{}),
            ...(typography?.fontWeight?{fontWeight:typography.fontWeight}:{}),
            ...(typography?.fontSizeMobile?{'--headline-size-mobile':`${typography.fontSizeMobile}px`}:{}),
            ...(typography?.fontSizeDesktop?{'--headline-size-desktop':`${typography.fontSizeDesktop}px`}:{}),
          }
          return (
            <article
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={!isActive}
              inert={!isActive}
              className={cn(
                'relative col-start-1 row-start-1 bg-navy-deep transition-opacity duration-700 motion-reduce:transition-none',
                isActive ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[2576/1073]">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  draggable={false}
                  style={{ '--mobile-pos': slide.mobilePosition } as React.CSSProperties}
                  className="select-none object-cover [object-position:var(--mobile-pos)] lg:[object-position:center]"
                />
              </div>

              <div className="px-5 pb-8 pt-7 sm:px-8 lg:pointer-events-none lg:absolute lg:inset-0 lg:p-0">
                <div
                  className={cn(
                    'mx-auto max-w-xl lg:pointer-events-auto lg:absolute lg:top-1/2 lg:mx-0 lg:max-w-none lg:-translate-y-1/2',
                    right ? 'lg:left-[57%] lg:w-[37%]' : 'lg:left-[6%] lg:w-[38%]',
                    slide.panel &&
                      'lg:border-l-2 lg:border-signal lg:bg-navy-deep/85 lg:p-6 xl:p-8',
                  )}
                >
                  <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-signal">
                    <span aria-hidden="true" className="h-px w-8 bg-signal" />
                    {slide.eyebrow}
                  </p>
                  <h2 style={headlineStyle} className="hero-editable-headline mt-4 text-balance font-semibold leading-[1.12] tracking-tight text-white">
                    {slide.headline}
                  </h2>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-white/85 sm:text-base lg:text-[clamp(0.875rem,1.1vw,1.125rem)]">
                    {slide.supporting}
                  </p>
                  <Button asChild size="lg" className="mt-6 lg:mt-8">
                    <Link href={slide.ctaHref} tabIndex={isActive ? 0 : -1}>
                      {slide.ctaLabel}
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="border-t border-white/15">
        <div className="container-x flex items-stretch gap-3">
          <div role="group" aria-label="Choose slide" className="grid flex-1 grid-cols-3 gap-2 sm:gap-4">
            {slides.map((slide, index) => {
              const isActive = index === active
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => go(index)}
                  aria-current={isActive ? 'true' : undefined}
                  aria-label={`Slide ${index + 1}: ${slide.tabLabel}`}
                  className={cn(
                    'group relative flex min-h-14 flex-col justify-center gap-0.5 pb-2 pt-3 text-left transition-colors',
                    isActive ? 'text-white' : 'text-white/65 hover:text-white',
                  )}
                >
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-white/20">
                    {isActive ? (
                      <span
                        key={`${active}-${playing}`}
                        className="hero-progress block h-full w-full bg-signal"
                        style={{ animationPlayState: running ? 'running' : 'paused' }}
                        onAnimationEnd={() => {
                          if (playing) next()
                        }}
                      />
                    ) : null}
                  </span>
                  <span className="font-mono text-[0.7rem] tracking-[0.18em] text-signal">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="hidden truncate text-sm font-medium sm:block">{slide.tabLabel}</span>
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-1 py-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={prev}
              aria-label="Previous slide"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? 'Pause automatic slide change' : 'Start automatic slide change'}
              className="text-white hover:bg-white/10 hover:text-white"
            >
              {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={next}
              aria-label="Next slide"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
