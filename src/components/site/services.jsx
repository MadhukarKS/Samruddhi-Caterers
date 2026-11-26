import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap.js'
import { SERVICES } from '@/lib/content.js'
import { RevealText } from '@/components/motion/reveal-text.jsx'
import { SectionLabel } from './section-label.jsx'

export function Services() {
  const ref = useRef(null)
  const followerRef = useRef(null)
  const [active, setActive] = useState(null)
  const quick = useRef(null)

  const { contextSafe } = useGSAP(
    () => {
      quick.current = {
        x: gsap.quickTo(followerRef.current, 'x', { duration: 0.8, ease: 'power3' }),
        y: gsap.quickTo(followerRef.current, 'y', { duration: 0.8, ease: 'power3' }),
      }
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.from('[data-row]', {
          y: 60,
          autoAlpha: 0,
          duration: 1.4,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: '[data-rows]', start: 'top 80%', once: true },
        })
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  const onMove = contextSafe((e) => {
    const r = ref.current.getBoundingClientRect()
    quick.current?.x(e.clientX - r.left)
    quick.current?.y(e.clientY - r.top)
  })

  const show = contextSafe((i) => {
    setActive(i)
    gsap.to(followerRef.current, {
      scale: i === null ? 0.6 : 1,
      autoAlpha: i === null ? 0 : 1,
      duration: 0.6,
      ease: 'expo.out',
    })
  })

  return (
    <section
      ref={ref}
      id="services"
      onMouseMove={onMove}
      className="relative overflow-hidden bg-forest px-5 py-24 text-cream md:px-10 md:py-40"
    >
      <div className="grid gap-10 md:grid-cols-12">
        <SectionLabel index="02" className="text-cream/70 md:col-span-3">
          Services
        </SectionLabel>
        <RevealText className="text-balance font-serif text-5xl leading-[0.95] tracking-[-0.02em] md:col-span-9 md:text-[7vw]">
          Catering, engineered for every setting.
        </RevealText>
      </div>

      <ul data-rows className="mt-20 border-t border-cream/15 md:mt-28" onMouseLeave={() => show(null)}>
        {SERVICES.map((s, i) => (
          <li
            key={s.title}
            data-row
            onMouseEnter={() => show(i)}
            className="group relative grid gap-4 border-b border-cream/15 py-8 md:grid-cols-12 md:items-center md:py-12"
          >
            <span className="font-mono text-xs text-cream/50">{`0${i + 1}`}</span>
            <h3 className="font-serif text-4xl leading-none transition-[transform,color] duration-700 ease-expo group-hover:translate-x-4 group-hover:text-saffron md:col-span-5 md:text-6xl">
              {s.title}
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-cream/70 md:col-span-4">{s.body}</p>
            <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
              <span className="text-xs uppercase tracking-[0.15em] text-cream/60">{s.range}</span>
              <ArrowUpRight
                aria-hidden
                className="size-5 shrink-0 transition-transform duration-700 ease-expo group-hover:rotate-45"
              />
            </div>
            <div className="relative mt-2 aspect-[16/10] overflow-hidden md:hidden">
              <img src={s.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </li>
        ))}
      </ul>

      <div
        ref={followerRef}
        aria-hidden
        className="pointer-events-none invisible absolute left-0 top-0 z-10 hidden h-80 w-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden md:block"
      >
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            className="absolute inset-0 transition-[clip-path] duration-700 ease-expo"
            style={{ clipPath: active === i ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
          >
            <img src={s.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
