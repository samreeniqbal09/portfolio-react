import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { blogPosts } from '../data/blogPosts.js'
import FadeInSection from '../components/FadeInSection.jsx'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { Button } from '../components/ui/button.jsx'

export default function BlogPage() {
  return (
    <main className="relative min-h-screen px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.06),transparent_55%)]" />

      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <FadeInSection>
          <div className="mx-auto mb-10 sm:mb-12 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-500">
              My Thoughts
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Blog
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-7">
              Thoughts, lessons, and experiences from my journey through
              software development, React, and AI.
            </p>
          </div>
        </FadeInSection>

        {/* Blog Cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <FadeInSection
              key={post.id}
              delay={index * 0.1}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="h-full"
              >
                <Card className="group flex h-full flex-col border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10">

                  {/* Card Header */}
                  <CardHeader>
                    <Badge
                      variant="secondary"
                      className="w-fit transition-colors group-hover:bg-indigo-500/10 group-hover:text-indigo-500"
                    >
                      {post.date}
                    </Badge>

                    <CardTitle className="mt-3 text-xl leading-tight transition-colors group-hover:text-indigo-500">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="flex flex-1 flex-col">
                    <p className="leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6">
                      <Button
                        asChild
                        variant="outline"
                        className="group-hover:border-indigo-500/50 group-hover:text-indigo-500 transition-all"
                      >
                        <Link to={`/blog/${post.id}`}>
                          Read Article
                          <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>

                </Card>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center text-muted-foreground"
          >
            No blog posts available yet.
          </motion.p>
        )}
      </div>
    </main>
  )
}