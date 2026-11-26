import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap.js'
import { NAV_LINKS, CONTACT } from '@/lib/content.js'
import { scrollToTarget } from '@/components/motion/smooth-scroll.jsx'
import { RollLabel } from '@/components/motion/roll-label.jsx'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const barRef = useRef(null)
  const overlayRef = useRef(null)
  const tl = useRef(null)

  useGSAP(() => {
    const overlay = overlayRef.current
    tl.current = gsap
      .timeline({ paused: true })
      .set(overlay, { visibility: 'visible' })
      .fromTo(
        overlay,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'expo.inOut' },
      )
      .from('[data-menu-link]', { yPercent: 120, duration: 1, stagger: 0.06, ease: 'expo.out' }, 0.45)
      .from('[data-menu-meta]', { autoAlpha: 0, y: 20, duration: 0.8, stagger: 0.05, ease: 'power3.out' }, 0.6)

    let hidden = false
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate(self) {
        const shouldHide = self.direction === 1 && self.scroll() > 200
        if (shouldHide !== hidden) {
          hidden = shouldHide
          gsap.to(barRef.current, { yPercent: shouldHide ? -120 : 0, duration: 0.8, ease: 'expo.out' })
        }
      },
    })
  })

  useEffect(() => {
    if (!tl.current) return
    if (open) {
      tl.current.timeScale(1).play()
    } else {
      tl.current.timeScale(1.6).reverse()
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (href) => (e) => {
    e.preventDefault()
    setOpen(false)
    window.setTimeout(() => scrollToTarget(href), open ? 500 : 0)
  }

  return (
    <>
      <header
        ref={barRef}
        className="fixed inset-x-0 top-0 z-50 text-cream mix-blend-difference"
      >
        <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
          <a href="#top" onClick={go('#top')} className="group flex items-baseline gap-2" aria-label="Samruddhi Group home">
            <span className="font-serif text-2xl leading-none md:text-3xl">Samruddhi</span>
            <span className="text-[10px] uppercase tracking-[0.3em]">Group</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 text-sm lg:flex">
            {NAV_LINKS.slice(0, 4).map((l) => (
              <a key={l.href} href={l.href} onClick={go(l.href)} className="group">
                <RollLabel>{l.label}</RollLabel>
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="group flex items-center gap-3 text-sm"
          >
            <RollLabel>{open ? 'Close' : 'Menu'}</RollLabel>
            <span className="relative block h-3 w-7" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-700 ease-expo ${open ? 'translate-y-1.5 rotate-45' : ''}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-700 ease-expo ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        ref={overlayRef}
        inert={open ? undefined : ''}
        className="invisible fixed inset-0 z-40 flex flex-col justify-between bg-forest px-5 pb-8 pt-28 text-cream md:px-10 md:pb-10"
      >
        <nav aria-label="Menu">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l, i) => (
              <li key={l.href} className="overflow-hidden border-b border-cream/10">
                <a
                  data-menu-link
                  href={l.href}
                  onClick={go(l.href)}
                  className="group flex items-baseline gap-4 py-2 md:gap-8"
                >
                  <span className="w-8 font-mono text-xs text-cream/50">{`0${i + 1}`}</span>
                  <span className="font-serif text-5xl leading-[1.05] transition-[color,transform] duration-700 ease-expo group-hover:translate-x-4 group-hover:text-saffron md:text-8xl">
                    {l.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-10 grid gap-6 text-sm text-cream/70 md:grid-cols-3">
          <p data-menu-meta>
            {CONTACT.address[0]}
            <br />
            {CONTACT.address[1]}
          </p>
          <p data-menu-meta>
            <a href={CONTACT.phoneHref} className="link-sweep">{CONTACT.phone}</a>
            <br />
            <a href={`mailto:${CONTACT.email}`} className="link-sweep">{CONTACT.email}</a>
          </p>
          <p data-menu-meta className="md:text-right">FSSAI Lic. 11221334000542 · ISO 22000:2018</p>
        </div>
      </div>
    </>
  )
}
