import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Contact.jsx'
import FadeInSection from '../components/FadeInSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <Skills />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <Contact />
      </FadeInSection>
    </>
  )
}