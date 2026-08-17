import { useState } from 'react'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function Projects() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const projects = [
    {
      title: 'Python CLI Chatbot',
      description:
        'A command-line chatbot built with Python using dictionary-based Q&A.',
      category: 'Python',
      githubLink: null,
    },
    {
      title: 'Web-Based Chatbot',
      description:
        'Converted the CLI chatbot into a web app using HTML, CSS, and JavaScript.',
      category: 'React',
      githubLink: null,
    },
    {
      title: 'Flask Backend Chatbot',
      description:
        'Connected the web frontend to a Flask backend with API endpoints.',
      category: 'Flask',
      githubLink: null,
    },
    {
      title: 'AI Chatbot',
      description:
        'Integrated OpenRouter AI API for real AI-powered responses, deployed on Vercel.',
      category: 'AI',
      githubLink:
        'https://github.com/samreeniqbal09/AI-chatbot.git',
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio built with React + Tailwind CSS.',
      category: 'React',
      githubLink:
        'https://github.com/samreeniqbal09/portfolio-react.git',
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || project.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto"
    >
      {/* Subtle section glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_60%)]" />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-10"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-500">
          My Work
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          A selection of projects I've built while developing my
          skills in software development, React, Python, Flask, and AI.
        </p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mb-5"
      >
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-input bg-background/70 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
        />
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {['All', 'Python', 'React', 'AI', 'Flask'].map((item) => (
          <Button
  key={item}
  variant={category === item ? 'default' : 'outline'}
  size="sm"
  onClick={() => {
    setCategory(item)

    if (item === 'All') {
      setSearch('')
    }
  }}
  className={
    category === item
      ? 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-md shadow-indigo-500/20'
      : 'border-border bg-background text-foreground hover:border-indigo-500/50 hover:bg-muted hover:text-indigo-500 dark:text-white'
  }
>
  {item}
</Button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: 'easeOut',
            }}
            whileHover={{ y: -6 }}
          >
            <Card className="group h-full border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl leading-tight transition-colors group-hover:text-indigo-500">
                    {project.title}
                  </CardTitle>

                  <Badge
                    variant="secondary"
                    className="shrink-0 transition-colors group-hover:bg-indigo-500/10 group-hover:text-indigo-500"
                  >
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {project.githubLink && (
                  <div className="mt-5">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-indigo-500 hover:text-indigo-400 transition-colors"
                    >
                      View on GitHub
                      <span className="ml-1 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 text-center"
        >
          <p className="text-lg font-medium text-foreground">
            No projects found
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Try a different search term or category.
          </p>
        </motion.div>
      )}
    </section>
  )
}

export default Projects