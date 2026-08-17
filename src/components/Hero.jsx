import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { useNavigate } from "react-router-dom"
import profilePic from "../assets/profile.jpeg"
import { Button } from "@/components/ui/button"

const roles = [
  "Web Developer",
  "React Developer",
  "AI Enthusiast",
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

/* =========================
   TYPING ROLE
========================= */

function TypingRole() {
  const shouldReduceMotion = useReducedMotion()

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState(
    shouldReduceMotion ? roles[0] : ""
  )
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(roles[0])
      return
    }

    const currentRole = roles[roleIndex]

    const typingSpeed = isDeleting ? 50 : 90

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(
          0,
          displayText.length + 1
        )

        setDisplayText(nextText)

        if (nextText === currentRole) {
          setIsDeleting(true)
        }
      } else {
        const nextText = currentRole.slice(
          0,
          displayText.length - 1
        )

        setDisplayText(nextText)

        if (nextText === "") {
          setIsDeleting(false)

          setRoleIndex(
            (current) => (current + 1) % roles.length
          )
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [
    displayText,
    isDeleting,
    roleIndex,
    shouldReduceMotion,
  ])

  return (
    <div
      className="mb-3 min-h-[24px] text-xs font-medium uppercase tracking-[0.2em] text-indigo-500 sm:text-sm md:text-base"
      aria-live="polite"
    >
      <span>{displayText}</span>

      {!shouldReduceMotion && (
        <motion.span
          aria-hidden="true"
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          |
        </motion.span>
      )}
    </div>
  )
}

/* =========================
   HERO
========================= */

function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    })
  }

  return (
    <motion.section
      id="hero"
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-12 text-center sm:px-6 sm:py-16"
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      variants={container}
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div
        className="absolute inset-0 -z-20 bg-background"
        aria-hidden="true"
      />

      {/* Single signature animated gradient */}
      <motion.div
        className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-400/10 sm:h-[500px] sm:w-[500px]"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 30, -20, 0],
                y: [0, -20, 25, 0],
                scale: [1, 1.06, 0.98, 1],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      {/* =========================
          PROFILE IMAGE
      ========================= */}

      <motion.div
        variants={item}
        className="relative mb-5"
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                y: -4,
              }
        }
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      >
        <motion.div
          className="absolute inset-0 scale-110 rounded-full bg-indigo-500/20 blur-2xl dark:bg-indigo-400/20"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: [0.45, 0.7, 0.45],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />

        <motion.img
          src={profilePic}
          alt="Samreen Iqbal"
          loading="eager"
          decoding="async"
          className="relative z-10 h-32 w-32 rounded-full border-4 border-background object-cover shadow-xl sm:h-40 sm:w-40 md:h-44 md:w-44"
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: 1.04,
                  rotate: 1,
                }
          }
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </motion.div>

      {/* =========================
          HERO TEXT
      ========================= */}

      <motion.div
        variants={item}
        className="mx-auto w-full max-w-3xl"
      >
        <TypingRole />

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl">
          Samreen Iqbal
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 md:text-xl">
          BS Computer Science student passionate about
          software development, problem-solving, and
          building intelligent applications with AI.
        </p>
      </motion.div>

      {/* =========================
          BUTTONS
      ========================= */}

      <motion.div
        variants={item}
        className="mt-7 flex flex-wrap justify-center gap-3"
      >
        {/* About */}
        <motion.div
          whileHover={
            shouldReduceMotion ? {} : { y: -2 }
          }
          whileTap={
            shouldReduceMotion ? {} : { scale: 0.97 }
          }
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("about")}
            className="bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-600"
          >
            About Me
          </Button>
        </motion.div>

        {/* Projects */}
        <motion.div
          whileHover={
            shouldReduceMotion ? {} : { y: -2 }
          }
          whileTap={
            shouldReduceMotion ? {} : { scale: 0.97 }
          }
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/projects")}
            className="border-border bg-background/50 text-foreground hover:bg-muted"
          >
            View Projects
          </Button>
        </motion.div>

        {/* Contact */}
        <motion.div
          whileHover={
            shouldReduceMotion ? {} : { y: -2 }
          }
          whileTap={
            shouldReduceMotion ? {} : { scale: 0.97 }
          }
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-border bg-background/50 text-foreground hover:bg-muted"
          >
            Contact
          </Button>
        </motion.div>
      </motion.div>

      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <motion.button
        type="button"
        aria-label="Scroll to About section"
        onClick={() => scrollToSection("about")}
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-indigo-500 sm:bottom-6"
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 6, 0],
              }
        }
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>

        <span
          aria-hidden="true"
          className="text-lg"
        >
          ↓
        </span>
      </motion.button>
    </motion.section>
  )
}

export default Hero