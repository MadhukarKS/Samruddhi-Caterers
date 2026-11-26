'use client'

import { useRef, type ReactNode } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP({ scope: ref })

  const onMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current!
    const r = el.getBoundingClientRect()
    gsap.to(el, {
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
      duration: 0.6,
      ease: 'power3.out',
    })
  })

  const onLeave = contextSafe(() => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.35)' })
  })

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      {children}
    </div>
  )
}
