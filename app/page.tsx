import { SiteNav } from '@/components/site/site-nav'
import { Hero } from '@/components/site/hero'
import { Marquee } from '@/components/site/marquee'
import { Intro } from '@/components/site/intro'
import { Stats } from '@/components/site/stats'
import { Services } from '@/components/site/services'
import { Brands } from '@/components/site/brands'
import { Commissary } from '@/components/site/commissary'
import { Testimonial } from '@/components/site/testimonial'
import { Contact } from '@/components/site/contact'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Stats />
        <Services />
        <Brands />
        <Commissary />
        <Testimonial />
      </main>
      <Contact />
    </>
  )
}
