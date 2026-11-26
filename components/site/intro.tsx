'use client'

import { useRef } from 'react'
import { gsap, SplitText, useGSAP, MOTION_OK } from '@/lib/gsap'
import { RevealImage } from '@/components/motion/reveal-image'
import { SectionLabel } from './section-label'

export function Intro() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const split = SplitText.create('[data-manifesto]', {
          type: 'words',
          autoSplit: true,
          onSplit(self) {
            return gsap.fromTo(
              self.words,
              { opacity: 0.12 },
              {
                opacity: 1,
                stagger: 0.08,
                ease: 'none',
                scrollTrigger: { trigger: '[data-manifesto]', start: 'top 80%', end: 'bottom 50%', scrub: true },
              },
            )
          },
        })
        gsap.to('[data-float]', {
          yPercent: -40,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
        })
        return () => split.revert()
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="group" className="relative bg-cream px-5 py-24 md:px-10 md:py-40">
      <div className="grid gap-10 md:grid-cols-12">
        <SectionLabel index="01" className="md:col-span-3">
          The Group
        </SectionLabel>
        <p data-manifesto className="text-balance font-serif text-4xl leading-[1.08] tracking-[-0.01em] md:col-span-9 md:text-[5.2vw]">
          For two decades we have fed the people who build Bengaluru — shift workers, engineers, students and
          celebrants — from one{' '}
          <em className="text-saffron">uncompromising</em> kitchen.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-4 md:mt-32 md:gap-6">
        <div className="col-span-7 md:col-span-4 md:col-start-2">
          <RevealImage
            src="/images/produce.png"
            alt="Fresh curry leaves, chillies, turmeric and coconut in a woven basket"
            className="aspect-[3/4]"
            sizes="(min-width: 768px) 33vw, 60vw"
          />
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-stone">Farm-level produce screening</p>
        </div>

        <div className="col-span-12 flex flex-col justify-between gap-10 md:col-span-6 md:col-start-7 md:pt-40">
          <div data-float className="ml-auto w-3/4 md:w-full">
            <RevealImage
              src="/images/thali.png"
              alt="A South Indian thali served on banana leaf with brass bowls"
              className="aspect-square"
              direction="left"
              sizes="(min-width: 768px) 50vw, 75vw"
            />
          </div>
          <div className="grid gap-6 text-pretty text-base leading-relaxed text-stone md:grid-cols-2">
            <p>
              What began in 2004 as a family kitchen is now one of Karnataka&apos;s most trusted food-service groups —
              five signature brands, a mechanised central commissary and a team of chefs, dietitians and logisticians.
            </p>
            <p>
              Scale has never meant compromise. Every meal is prepared under FSSAI Level 5 and ISO 22000 HACCP
              standards, lab-verified, and dispatched on time — 99.8% of the time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
