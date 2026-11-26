'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

let lenisInstance: Lenis | null = null

export const LOADED_EVENT = 'samruddhi:loaded'

export function scrollToTarget(target: string | number) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { duration: 1.6 })
    return
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target })
  } else {
    document.querySelector(target)?.scrollIntoView()
  }
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenisInstance = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    if (document.body.dataset.loading === '1') lenis.stop()
    const onLoaded = () => lenis.start()
    window.addEventListener(LOADED_EVENT, onLoaded)

    return () => {
      window.removeEventListener(LOADED_EVENT, onLoaded)
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  return <>{children}</>
}
