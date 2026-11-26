import { SmoothScroll } from './components/motion/smooth-scroll.jsx'
import { SiteNav } from './components/site/site-nav.jsx'
import { Hero } from './components/site/hero.jsx'
import { Marquee } from './components/site/marquee.jsx'
import { Intro } from './components/site/intro.jsx'
import { Stats } from './components/site/stats.jsx'
import { Services } from './components/site/services.jsx'
import { Brands } from './components/site/brands.jsx'
import { Commissary } from './components/site/commissary.jsx'
import { Testimonial } from './components/site/testimonial.jsx'
import { Contact } from './components/site/contact.jsx'

export default function App() {
  return (
    <SmoothScroll>
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
    </SmoothScroll>
  )
}
