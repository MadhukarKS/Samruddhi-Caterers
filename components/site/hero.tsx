'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ArrowDownRight } from 'lucide-react'
import { gsap, SplitText, useGSAP, MOTION_OK } from '@/lib/gsap'
import { LOADED_EVENT, scrollToTarget } from '@/components/motion/smooth-scroll'
import { RollLabel } from '@/components/motion/roll-label'
import { Magnetic } from '@/components/motion/magnetic'

const LINES = [
  { text: 'Nourishing', className: '' },
  { text: 'trust,', className: 'italic text-saffron md:pl-[12vw]' },
  { text: 'at every scale.', className: '' },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        document.body.dataset.loading = '1'
        gsap.set('[data-hero-line]', { visibility: 'visible' })
        const chars = SplitText.create('[data-hero-line]', { type: 'chars' }).chars
        const counter = { v: 0 }

        const finish = () => {
          delete document.body.dataset.loading
          window.dispatchEvent(new Event(LOADED_EVENT))
        }

        gsap
          .timeline({ defaults: { ease: 'expo.out' }, onComplete: finish })
          .from('[data-loader-word]', { yPercent: 110, duration: 1, ease: 'expo.out' })
          .to(counter, {
            v: 100,
            duration: 1.4,
            ease: 'power2.inOut',
            onUpdate: () => {
              const el = document.querySelector('[data-loader-count]')
              if (el) el.textContent = String(Math.round(counter.v)).padStart(3, '0')
            },
          }, 0)
          .to('[data-loader-bar]', { scaleX: 1, duration: 1.4, ease: 'power2.inOut' }, 0)
          .to('[data-loader]', { yPercent: -100, duration: 1.2, ease: 'expo.inOut' }, '+=0.15')
          .fromTo('[data-hero-media]', { scale: 1.35 }, { scale: 1, duration: 2.4 }, '<')
          .from(chars, { yPercent: 115, duration: 1.4, stagger: 0.025 }, '<0.55')
          .from('[data-hero-fade]', { autoAlpha: 0, y: 24, duration: 1.2, stagger: 0.08 }, '<0.4')

        gsap.to('[data-hero-parallax]', {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('[data-hero-title]', {
          yPercent: -30,
          autoAlpha: 0.2,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
        })

        return () => {
          delete document.body.dataset.loading
        }
      })

      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="top" className="relative h-svh min-h-[640px] overflow-hidden bg-ink text-cream">
      <div
        data-loader
        aria-hidden
        className="fixed inset-0 z-[60] flex flex-col justify-between bg-forest p-5 text-cream motion-reduce:hidden md:p-10"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-cream/60">Est. 2004 — Bengaluru</span>
        <div className="flex items-end justify-between gap-6">
          <span className="overflow-hidden">
            <span data-loader-word className="block font-serif text-6xl md:text-9xl">
              Samruddhi
            </span>
          </span>
          <span data-loader-count className="font-mono text-sm tabular-nums text-cream/60">
            000
          </span>
        </div>
        <span data-loader-bar className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-saffron" />
      </div>

      <div data-hero-parallax className="absolute inset-0">
        <div data-hero-media className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="A chef finishing a brass handi of biryani with saffron and herbs"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
      </div>
      <div className="grain absolute inset-0" />

      <div className="relative flex h-full flex-col justify-end px-5 pb-8 md:px-10 md:pb-10">
        <div
          data-hero-fade
          className="absolute left-5 right-5 top-24 flex justify-between text-[11px] uppercase tracking-[0.25em] text-cream/70 md:left-10 md:right-10 md:top-28"
        >
          <span>FSSAI Level 5 · ISO 22000:2018</span>
          <span className="hidden md:inline">Jigani Central Commissary · Bengaluru</span>
        </div>

        <h1 data-hero-title className="font-serif text-[15vw] leading-[0.88] tracking-[-0.02em] md:text-[11.5vw]">
          <span className="sr-only">Nourishing trust, at every scale.</span>
          {LINES.map((l) => (
            <span key={l.text} aria-hidden className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line data-reveal className={`block ${l.className}`}>
                {l.text}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-8 grid items-end gap-8 border-t border-cream/20 pt-6 md:mt-10 md:grid-cols-12">
          <p data-hero-fade className="max-w-md text-pretty text-sm leading-relaxed text-cream/80 md:col-span-5 md:text-base">
            {"Bengaluru's industrial, corporate and celebration catering partner — over 50,000 meals a day from a single, audited central kitchen, running 24/7."}
          </p>
          <div data-hero-fade className="flex items-center gap-8 md:col-span-4 md:col-start-7">
            <div>
              <p className="font-serif text-4xl">50,000+</p>
              <p className="text-xs uppercase tracking-[0.2em] text-cream/60">Meals daily</p>
            </div>
            <div>
              <p className="font-serif text-4xl">24/7</p>
              <p className="text-xs uppercase tracking-[0.2em] text-cream/60">Tri-shift supply</p>
            </div>
          </div>
          <div data-hero-fade className="md:col-span-2 md:justify-self-end">
            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToTarget('#contact')
                }}
                className="group inline-flex items-center gap-3 rounded-full bg-cream px-6 py-4 text-sm font-medium text-ink transition-colors duration-500 hover:bg-saffron hover:text-cream"
              >
                <RollLabel>Request a proposal</RollLabel>
                <ArrowDownRight className="size-4 transition-transform duration-500 group-hover:-rotate-45" aria-hidden />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  )
}
