'use client'

import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap'
import { CONTACT, NAV_LINKS } from '@/lib/content'
import { RevealText } from '@/components/motion/reveal-text'
import { Magnetic } from '@/components/motion/magnetic'
import { RollLabel } from '@/components/motion/roll-label'
import { scrollToTarget } from '@/components/motion/smooth-scroll'

export function Contact() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.from('[data-wordmark]', {
          yPercent: 15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'bottom 120%',
            end: 'bottom bottom',
            scrub: 1,
          },
        })
        gsap.to('[data-orb]', {
          x: 'random(-60, 60)',
          y: 'random(-40, 40)',
          duration: 6,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
        })
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <footer ref={ref} id="contact" className="relative overflow-hidden bg-forest text-cream">
      <div
        data-orb
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 size-[38rem] rounded-full bg-saffron/20 blur-[120px]"
      />

      <div className="relative px-5 pb-16 pt-24 md:px-10 md:pt-40">
        <p className="text-xs uppercase tracking-[0.25em] text-cream/60">Corporate RFP & event planning desk</p>
        <RevealText className="mt-8 max-w-6xl text-balance font-serif text-6xl leading-[0.92] tracking-[-0.02em] md:text-[8.5vw]">
          {"Let's plan your next service."}
        </RevealText>

        <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-pretty text-base leading-relaxed text-cream/70">
            Commission daily catering or plan a celebration. Our desk responds within one business day with menu
            engineering and service-level proposals.
          </p>
          <Magnetic strength={0.4}>
            <a
              href={`mailto:${CONTACT.email}?subject=Catering%20RFP`}
              className="group flex size-40 flex-col items-center justify-center gap-2 rounded-full bg-saffron text-center text-sm font-medium text-cream transition-colors duration-500 hover:bg-cream hover:text-ink md:size-48"
            >
              <ArrowUpRight aria-hidden className="size-6 transition-transform duration-700 ease-expo group-hover:rotate-45" />
              <RollLabel>Start an RFP</RollLabel>
            </a>
          </Magnetic>
        </div>

        <div className="mt-24 grid gap-10 border-t border-cream/15 pt-10 text-sm sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cream/50">Commissary</p>
            <address className="not-italic leading-relaxed text-cream/80">
              {CONTACT.address[0]}
              <br />
              {CONTACT.address[1]}
            </address>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cream/50">Talk to us</p>
            <ul className="space-y-1 text-cream/80">
              <li>
                <a href={CONTACT.phoneHref} className="link-sweep">{CONTACT.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="link-sweep">{CONTACT.email}</a>
              </li>
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="link-sweep">
                  WhatsApp desk
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cream/50">Explore</p>
            <ul className="space-y-1 text-cream/80">
              {NAV_LINKS.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToTarget(l.href)
                    }}
                    className="link-sweep"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cream/50">Certified</p>
            <p className="leading-relaxed text-cream/80">
              FSSAI Lic. 11221334000542
              <br />
              ISO 22000:2018 · HACCP
            </p>
          </div>
        </div>
      </div>

      <div className="relative px-3 pt-6 pb-2 md:pt-10 md:pb-4 overflow-hidden">
        <p
          data-wordmark
          aria-hidden
          className="select-none text-center font-serif text-[19vw] leading-none tracking-[-0.03em] text-cream/95 pb-2"
        >
          Samruddhi
        </p>
      </div>

      <div className="relative flex flex-col gap-2 border-t border-cream/10 px-5 py-6 text-xs text-cream/50 md:flex-row md:justify-between md:px-10">
        <p>{`\u00A9 ${new Date().getFullYear()} Samruddhi Group. All rights reserved.`}</p>
        <p>Nourishing trust, delivering excellence — since 2004.</p>
      </div>
    </footer>
  )
}
