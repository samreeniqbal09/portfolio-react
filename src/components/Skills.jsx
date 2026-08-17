import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const skillCategories = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C++', 'Basic JavaScript'],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    category: 'Web Technologies',
    items: ['HTML', 'CSS', 'Flask'],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    category: 'Technical Skills',
    items: [
      'API Integration',
      'Git & GitHub',
      'Vercel Deployment',
      'Problem Solving',
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    category: 'Soft Skills',
    items: [
      'Communication',
      'Presentation Skills',
      'Teamwork',
      'Quick Learning',
      'Time Management',
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto"
    >
      {/* Subtle signature glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_60%)]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-10"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-500">
          What I Work With
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Skills &amp; Technologies
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Technologies and skills I use to build practical software
          applications and solve problems.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: 'easeOut',
            }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-5">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500"
                  >
                    {group.icon}
                  </motion.div>

                  <h3 className="font-semibold text-lg text-foreground">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 transition-colors hover:bg-indigo-500/10 hover:text-indigo-500"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills