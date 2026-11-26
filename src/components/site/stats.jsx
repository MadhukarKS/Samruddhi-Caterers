import { useRef } from 'react'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap.js'
import { STATS } from '@/lib/content.js'

const format = (v, decimals = 0) =>
  v.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

export function Stats() {
  const ref = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.from('[data-rule]', {
          scaleX: 0,
          transformOrigin: 'left',
          duration: 1.6,
          stagger: 0.12,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        })
        gsap.utils.toArray('[data-count]').forEach((el, i) => {
          const target = Number(el.dataset.count)
          const decimals = Number(el.dataset.decimals ?? 0)
          const obj = { v: 0 }
          el.textContent = format(0, decimals)
          gsap.to(obj, {
            v: target,
            duration: 2.4,
            delay: i * 0.12,
            ease: 'expo.out',
            onUpdate: () => {
              el.textContent = format(obj.v, decimals)
            },
            scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
          })
        })
        gsap.from('[data-stat-copy]', {
          y: 30,
          autoAlpha: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
        })
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <section ref={ref} aria-label="Samruddhi in numbers" className="bg-cream px-5 pb-24 md:px-10 md:pb-40">
      <dl className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="relative pb-10 pt-6">
            <span data-rule className="absolute inset-x-0 top-0 h-px bg-ink" />
            <dt data-stat-copy className="text-xs uppercase tracking-[0.2em] text-stone">
              {s.label}
            </dt>
            <dd className="mt-6 font-serif text-7xl leading-none tracking-[-0.02em] tabular-nums md:text-8xl">
              <span data-count={s.value} data-decimals={s.decimals ?? 0}>
                {format(s.value, s.decimals ?? 0)}
              </span>
              <span className="text-saffron">{s.suffix}</span>
            </dd>
            <dd data-stat-copy className="mt-4 max-w-[16rem] text-sm text-stone">
              {s.note}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
