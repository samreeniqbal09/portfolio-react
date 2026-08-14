import Projects from '../components/Projects.jsx'
import FadeInSection from '../components/FadeInSection.jsx'

export default function ProjectsPage() {
  return (
    <main className="pt-24 px-4 max-w-6xl mx-auto min-h-screen">
      <FadeInSection>
        <Projects />
      </FadeInSection>
    </main>
  )
}