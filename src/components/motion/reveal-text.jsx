import { useRef } from 'react'
import { gsap, SplitText, useGSAP, MOTION_OK } from '@/lib/gsap.js'

export function RevealText({
  as: Tag = 'h2',
  children,
  className,
  delay = 0,
  start = 'top 85%',
}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.set(el, { visibility: 'visible' })
        const split = SplitText.create(el, {
          type: 'lines',
          mask: 'lines',
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 110,
              rotate: 2,
              duration: 1.3,
              delay,
              stagger: 0.09,
              ease: 'expo.out',
              scrollTrigger: { trigger: el, start, once: true },
            })
          },
        })
        return () => split.revert()
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} data-reveal className={className}>
      {children}
    </Tag>
  )
}
