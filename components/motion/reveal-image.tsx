'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap'

type RevealImageProps = {
  src: string
  alt: string
  className?: string
  sizes?: string
  parallax?: number
  direction?: 'up' | 'left' | 'right'
  priority?: boolean
}

const CLIP_FROM = {
  up: 'inset(100% 0% 0% 0%)',
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
}

export function RevealImage({
  src,
  alt,
  className,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  parallax = 12,
  direction = 'up',
  priority,
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const wrap = ref.current!
        const inner = wrap.querySelector('[data-inner]')
        const img = wrap.querySelector('img')

        gsap
          .timeline({ scrollTrigger: { trigger: wrap, start: 'top 85%', once: true } })
          .fromTo(
            wrap,
            { clipPath: CLIP_FROM[direction] },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut' },
          )
          .fromTo(img, { scale: 1.35 }, { scale: 1, duration: 2, ease: 'expo.out' }, 0.2)

        gsap.fromTo(
          inner,
          { yPercent: -parallax / 2 },
          {
            yPercent: parallax / 2,
            ease: 'none',
            scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={cn('relative overflow-hidden bg-ink/10', className)}>
      <div data-inner className="absolute inset-x-0 -top-[8%] h-[116%]">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    </div>
  )
}
