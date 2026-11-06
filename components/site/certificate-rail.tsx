'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { Certificate } from '@/data/types'

export function CertificateRail({ certificates }: { certificates: Certificate[] }) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [playing, setPlaying] = useState(true)
  const [hovering, setHovering] = useState(false)
  const [overflowing, setOverflowing] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(query.matches)
    if (query.matches) setPlaying(false)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => setOverflowing(track.scrollWidth > track.clientWidth + 4)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  const scrollByItem = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current
      if (!track) return
      const item = track.querySelector('li')
      const step = item ? item.getBoundingClientRect().width + 20 : track.clientWidth
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
      const behavior = reducedMotion ? 'auto' : 'smooth'
      if (direction === 1 && atEnd) track.scrollTo({ left: 0, behavior })
      else if (direction === -1 && track.scrollLeft <= 4)
        track.scrollTo({ left: track.scrollWidth, behavior })
      else track.scrollBy({ left: direction * step, behavior })
    },
    [reducedMotion],
  )

  useEffect(() => {
    if (!playing || hovering || !overflowing || reducedMotion) return
    const id = window.setInterval(() => scrollByItem(1), 5000)
    return () => window.clearInterval(id)
  }, [playing, hovering, overflowing, reducedMotion, scrollByItem])

  return (
    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <ul
        ref={trackRef}
        role="list"
        aria-label="Certificates and registrations"
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 motion-reduce:scroll-auto sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
      >
        {certificates.map((certificate) => (
          <li
            key={certificate.id}
            className="w-[72vw] max-w-[19rem] shrink-0 snap-start sm:w-[16.5rem] lg:flex-1"
          >
            <figure className="flex h-full flex-col border border-border bg-card">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative block aspect-[3/4] w-full border-b border-border bg-white"
                    aria-label={`View ${certificate.title} (${certificate.language}) larger`}
                  >
                    <Image
                      src={certificate.image}
                      alt={certificate.alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, 72vw"
                      className="object-contain p-2"
                    />
                    <span className="absolute right-2 top-2 flex size-8 items-center justify-center bg-navy text-white opacity-90 transition-opacity group-hover:opacity-100">
                      <Maximize2 aria-hidden="true" className="size-4" />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[92vh] w-[min(94vw,46rem)] max-w-none overflow-y-auto sm:max-w-none">
                  <DialogTitle className="pr-6 text-navy">
                    {certificate.title} ({certificate.language})
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Full view of the {certificate.kind.toLowerCase()}.
                  </DialogDescription>
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[34rem] bg-white">
                    <Image
                      src={certificate.image}
                      alt={certificate.alt}
                      fill
                      sizes="(min-width: 768px) 34rem, 90vw"
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <figcaption className="flex-1 p-4">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-primary">
                  {certificate.kind} · {certificate.language}
                </p>
                <p className="mt-2 text-sm font-semibold text-navy">{certificate.title}</p>
                <ul className="mt-2 space-y-1 text-xs leading-relaxed text-muted-foreground">
                  {certificate.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => scrollByItem(-1)}
          aria-label="Previous certificate"
        >
          <ChevronLeft aria-hidden="true" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => scrollByItem(1)}
          aria-label="Next certificate"
        >
          <ChevronRight aria-hidden="true" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setPlaying((value) => !value)}
          aria-label={playing ? 'Pause automatic scrolling' : 'Start automatic scrolling'}
          aria-pressed={!playing}
        >
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </Button>
        <p className="ml-2 text-xs text-muted-foreground">Select a document to view it in full.</p>
      </div>
    </div>
  )
}
