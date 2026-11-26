import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap.js'

let lenisInstance = null

export const LOADED_EVENT = 'samruddhi:loaded'

export function scrollToTarget(target) {
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

export function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenisInstance = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time) => lenis.raf(time * 1000)
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
