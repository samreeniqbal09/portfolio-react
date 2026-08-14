import { useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="dark:bg-gray-900 min-h-screen transition-colors">
        <BrowserRouter>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Suspense fallback={<div className="p-10 text-center dark:text-white">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App