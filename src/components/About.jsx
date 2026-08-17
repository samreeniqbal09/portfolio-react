import { useState } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function About() {
  const [showMore, setShowMore] = useState(false)

  const shortBio =
    'I am Samreen Iqbal, a BS Computer Science student with a strong interest in software development and artificial intelligence.'

  const fullBio =
    shortBio +
    ' I enjoy solving problems, learning new technologies, and building practical applications that improve user experience. I am a quick learner, a confident presenter, and always eager to enhance my technical and communication skills.'

  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 py-16 sm:py-20 max-w-5xl mx-auto"
    >
      {/* Subtle section glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-500">
            Get to Know Me
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            About Me
          </h2>

          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            A little more about my background, interests, and goals.
          </p>
        </div>

        {/* About Card */}
        <Card className="group border-border/50 bg-card/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">

              {/* Icon */}
              <div className="shrink-0 mx-auto md:mx-0">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-base md:text-lg text-muted-foreground leading-8">
                  {showMore ? fullBio : shortBio}
                </p>

                <Button
                  variant="link"
                  onClick={() => setShowMore(!showMore)}
                  className="mt-3 px-0 text-indigo-500 hover:text-indigo-600"
                >
                  {showMore ? 'Show Less ↑' : 'Show More ↓'}
                </Button>
              </div>

            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

export default About