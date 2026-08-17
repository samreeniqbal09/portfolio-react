import { motion } from "motion/react"
import profilePic from "../assets/profile.jpeg"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

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

function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative min-h-[85vh] overflow-hidden px-4 py-12 text-center sm:px-6 sm:py-16 flex flex-col items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Signature background glow */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.14),transparent_55%)]"
        aria-hidden="true"
      />

      {/* Signature Hero Glow */}
      <div
        className="hero-glow absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      {/* Profile Image */}
      <motion.div
        variants={item}
        className="relative mb-5"
      >
        {/* Image glow */}
        <div
          className="absolute inset-0 scale-110 rounded-full bg-indigo-500/20 blur-2xl"
          aria-hidden="true"
        />

        <motion.img
          src={profilePic}
          alt="Samreen Iqbal"
          className="relative z-10 h-32 w-32 rounded-full border-4 border-background object-cover shadow-xl sm:h-40 sm:w-40 md:h-44 md:w-44"
          whileHover={{ scale: 1.04 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </motion.div>

      {/* Hero Text */}
      <motion.div
        variants={item}
        className="mx-auto w-full max-w-3xl"
      >
        {/* Eyebrow */}
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-indigo-500 sm:text-sm md:text-base">
          Software Development • AI
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl">
          Samreen Iqbal
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 md:text-xl">
          BS Computer Science student passionate about software development,
          problem-solving, and building intelligent applications with AI.
        </p>
      </motion.div>

      {/* Hero Buttons */}
      <motion.div
        variants={item}
        className="mt-7 flex flex-wrap justify-center gap-3"
      >
        {/* About Button */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-600"
          >
            <a href="#about">
              About Me
            </a>
          </Button>
        </motion.div>

        {/* Projects Button */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border bg-background/50 text-foreground hover:bg-muted"
          >
            <Link to="/projects">
              View Projects
            </Link>
          </Button>
        </motion.div>

        {/* Contact Button */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border bg-background/50 text-foreground hover:bg-muted"
          >
            <a href="#contact">
              Contact
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero