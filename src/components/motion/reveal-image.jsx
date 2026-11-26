import { useRef } from 'react'
import { cn } from '@/lib/utils.js'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap.js'

const CLIP_FROM = {
  up: 'inset(100% 0% 0% 0%)',
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
}

export function RevealImage({
  src,
  alt,
  className,
  parallax = 12,
  direction = 'up',
  priority,
}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const wrap = ref.current
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
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
