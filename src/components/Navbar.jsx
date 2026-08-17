import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Blog', to: '/blog' },
  ]

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-indigo-500'
        : 'text-muted-foreground hover:text-foreground'
    }`

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Brand */}
        <NavLink
          to="/"
          className="group text-lg font-bold tracking-tight text-foreground"
        >
          Samreen
          <span className="text-indigo-500 transition-colors group-hover:text-indigo-400">
            .
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={linkClass}
            >
              {({ isActive }) => (
                <>
                  {label}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute left-3 right-3 -bottom-1 h-0.5 rounded-full bg-indigo-500"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Desktop Dark Mode Toggle */}
          <Button
            variant="outline"
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 rounded-full gap-2 border-border/70 bg-background/50 hover:bg-muted"
            aria-label="Toggle dark mode"
          >
            <motion.span
              key={darkMode ? 'sun' : 'moon'}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-base"
            >
              {darkMode ? '☀' : '☾'}
            </motion.span>

            <span>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">

          {/* Mobile Dark Mode Toggle */}
          <Button
            variant="outline"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full gap-2 border-border/70 bg-background/50 hover:bg-muted"
            aria-label="Toggle dark mode"
          >
            <motion.span
              key={darkMode ? 'sun-mobile' : 'moon-mobile'}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-base"
            >
              {darkMode ? '☀' : '☾'}
            </motion.span>

            <span>
              {darkMode ? 'Light' : 'Dark'}
            </span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="border-border/70 bg-background/50 hover:bg-muted"
          >
            <motion.span
              key={isOpen ? 'close' : 'menu'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? '✕' : '☰'}
            </motion.span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden border-t border-border/50"
          >
            <div className="bg-background/95 px-4 py-4 backdrop-blur-xl sm:px-6">
              {navLinks.map(({ label, to }, index) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                  }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `mb-1 block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-indigo-500/10 text-indigo-500'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar