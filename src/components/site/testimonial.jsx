import { RevealText } from '@/components/motion/reveal-text.jsx'
import { RevealImage } from '@/components/motion/reveal-image.jsx'
import { SectionLabel } from './section-label.jsx'

export function Testimonial() {
  return (
    <section className="bg-cream px-5 py-24 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-4">
          <SectionLabel index="05" className="mb-10">
            In their words
          </SectionLabel>
          <RevealImage
            src="/images/finedine.png"
            alt="A contemporary plated dish from Santrupthi fine dining"
            className="aspect-[4/5] w-2/3 md:w-full"
            direction="right"
          />
        </div>
        <figure className="md:col-span-7 md:col-start-6">
          <RevealText
            as="blockquote"
            className="text-balance font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-6xl"
          >
            {'\u201CThree shifts, four thousand people, not one late dispatch in a year. Samruddhi runs like part of our own operations team.\u201D'}
          </RevealText>
          <figcaption className="mt-10 flex items-center gap-4 text-sm text-stone">
            <span className="h-px w-10 bg-saffron" />
            Head of Facilities, Electronics Manufacturer — Bommasandra
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
