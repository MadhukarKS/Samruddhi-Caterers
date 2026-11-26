'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from '@/lib/gsap'

const ITEMS = ['Industrial Catering', 'Corporate Dining', 'Grand Banquets', 'Institutional Programmes', 'Celebration Venues']

export function Marquee() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const loop = gsap.to('[data-track]', { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate(self) {
            const boost = Math.min(Math.abs(self.getVelocity()) / 300, 6)
            gsap.to(loop, {
              timeScale: self.direction * (1 + boost),
              duration: 0.3,
              overwrite: true,
              onComplete: () => {
                gsap.to(loop, { timeScale: self.direction, duration: 1.2 })
              },
            })
          },
        })
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  const row = ITEMS.map((item) => (
    <span key={item} className="flex items-center gap-10 pr-10">
      <span className="whitespace-nowrap">{item}</span>
      <span className="size-3 shrink-0 rounded-full bg-saffron" />
    </span>
  ))

  return (
    <div ref={ref} aria-hidden className="overflow-hidden border-b border-border bg-cream py-6 md:py-8">
      <div data-track className="flex w-max font-serif text-4xl italic text-ink md:text-6xl">
        <div className="flex">{row}</div>
        <div className="flex">{row}</div>
      </div>
    </div>
  )
}
