import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="dark:bg-gray-900 min-h-screen transition-colors">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 dark:text-white px-3 py-2 rounded-full shadow"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App