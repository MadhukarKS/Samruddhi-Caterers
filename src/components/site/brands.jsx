import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap.js'
import { BRANDS } from '@/lib/content.js'
import { RevealText } from '@/components/motion/reveal-text.jsx'
import { SectionLabel } from './section-label.jsx'

export function Brands() {
  const ref = useRef(null)
  const trackRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const track = trackRef.current
        const distance = () => track.scrollWidth - window.innerWidth

        const scroll = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })

        gsap.to('[data-progress]', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            scrub: true,
          },
        })

        gsap.utils.toArray('[data-brand]').forEach((panel) => {
          gsap.fromTo(
            panel.querySelector('img'),
            { xPercent: -10 },
            {
              xPercent: 10,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scroll,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            },
          )
        })
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="brands" className="relative overflow-hidden bg-cream py-24 lg:h-svh lg:py-0">
      <div
        ref={trackRef}
        className="flex flex-col gap-16 px-5 md:px-10 lg:h-full lg:w-max lg:flex-row lg:items-center lg:gap-10"
      >
        <div className="flex flex-col justify-between gap-10 lg:h-[72vh] lg:w-[34vw]">
          <SectionLabel index="03">Signature Brands</SectionLabel>
          <div>
            <RevealText className="font-serif text-5xl leading-[0.95] tracking-[-0.02em] md:text-7xl lg:text-[5.5vw]">
              Five brands. One roof.
            </RevealText>
            <p className="mt-6 max-w-sm text-pretty text-base leading-relaxed text-stone">
              From grand wedding banquets and landscaped lawns to mechanised corporate food courts — each brand is a
              distinct craft, held to one standard.
            </p>
          </div>
          <p className="hidden text-xs uppercase tracking-[0.25em] text-stone lg:block">Scroll to explore</p>
        </div>

        {BRANDS.map((b, i) => (
          <article
            key={b.name}
            data-brand
            className={`group flex flex-col gap-5 lg:w-[30vw] ${i % 2 === 1 ? 'lg:mt-24' : 'lg:-mt-16'}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-[58vh]">
              <img
                src={b.image}
                alt={`${b.name} — ${b.kind}`}
                loading="lazy"
                className="scale-[1.25] absolute inset-0 h-full w-full object-cover transition-[filter] duration-700 group-hover:brightness-90"
              />
              <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink">
                {b.kind}
              </span>
            </div>
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="font-serif text-3xl leading-none md:text-4xl">{b.name}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">{b.body}</p>
              </div>
              <span className="font-mono text-xs text-saffron">{`0${i + 1}/05`}</span>
            </div>
          </article>
        ))}
        <div className="hidden w-[6vw] shrink-0 lg:block" />
      </div>

      <div className="absolute inset-x-10 bottom-8 hidden h-px bg-ink/15 lg:block">
        <span data-progress className="block h-full origin-left scale-x-0 bg-ink" />
      </div>
    </section>
  )
}
