import { useState, Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home.jsx'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -12,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="min-h-[60vh]"
      >
        <Suspense
          fallback={
            <div className="flex min-h-[60vh] items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-muted-foreground"
              >
                Loading...
              </motion.div>
            </div>
          }
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <BrowserRouter>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <main>
            <AnimatedRoutes />
          </main>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App