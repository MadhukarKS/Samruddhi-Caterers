import { useRef } from 'react'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap.js'
import { PROCESS } from '@/lib/content.js'
import { RevealText } from '@/components/motion/reveal-text.jsx'
import { SectionLabel } from './section-label.jsx'

export function Commissary() {
  const ref = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap
          .timeline({
            scrollTrigger: { trigger: '[data-expand]', start: 'top 90%', end: 'top 10%', scrub: true },
          })
          .fromTo(
            '[data-expand]',
            { clipPath: 'inset(14% 22% 14% 22%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none' },
          )
          .fromTo('[data-expand] img', { scale: 1.4 }, { scale: 1, ease: 'none' }, 0)

        gsap.from('[data-step]', {
          y: 50,
          autoAlpha: 0,
          duration: 1.3,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: { trigger: '[data-steps]', start: 'top 80%', once: true },
        })
        gsap.from('[data-step-rule]', {
          scaleX: 0,
          transformOrigin: 'left',
          duration: 1.4,
          stagger: 0.12,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: '[data-steps]', start: 'top 80%', once: true },
        })
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="commissary" className="bg-ink pb-24 text-cream md:pb-40">
      <div data-expand className="relative h-[85svh] overflow-hidden">
        <img
          src="/images/kitchen.png"
          alt="The Samruddhi central commissary in Jigani with chefs at stainless steel stations"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative flex h-full flex-col justify-end px-5 pb-10 md:px-10 md:pb-14">
          <SectionLabel index="04" className="mb-6 text-cream/80">
            The Commissary
          </SectionLabel>
          <RevealText className="max-w-5xl text-balance font-serif text-5xl leading-[0.95] tracking-[-0.02em] md:text-[7vw]">
            One kitchen. Zero compromise.
          </RevealText>
        </div>
      </div>

      <div className="grid gap-10 px-5 pt-20 md:grid-cols-12 md:px-10 md:pt-28">
        <p className="text-pretty text-lg leading-relaxed text-cream/70 md:col-span-5">
          Our ISO 22000 central commissary at Jigani runs around the clock, purpose-built for continuous, punctual
          dispatch across every shift rotation — with a microbiological lab on site.
        </p>
        <ol data-steps className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:col-span-7">
          {PROCESS.map((p) => (
            <li key={p.step} data-step className="relative pt-6">
              <span data-step-rule className="absolute inset-x-0 top-0 h-px bg-cream/25" />
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-4xl">{p.title}</h3>
                <span className="font-mono text-xs text-saffron">{p.step}</span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-24 flex flex-wrap gap-x-10 gap-y-4 border-y border-cream/15 px-5 py-6 text-xs uppercase tracking-[0.25em] text-cream/60 md:px-10">
        <span>FSSAI Level 5</span>
        <span>ISO 22000:2018</span>
        <span>HACCP Certified</span>
        <span>Lab-verified batches</span>
        <span className="md:ml-auto">Lic. 11221334000542</span>
      </div>
    </section>
  )
}
