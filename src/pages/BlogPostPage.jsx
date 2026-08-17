import { useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { blogPosts } from '../data/blogPosts.js'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { Button } from '../components/ui/button.jsx'

export default function BlogPostPage() {
  const { id } = useParams()

  const post = blogPosts.find(
    (p) => String(p.id) === id
  )

  // Post not found
  if (!post) {
    return (
      <main className="relative min-h-screen px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.06),transparent_55%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-2xl"
        >
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h1 className="mb-3 text-2xl font-bold text-foreground">
                Post not found
              </h1>

              <p className="mb-6 text-muted-foreground">
                The blog post you're looking for doesn't exist.
              </p>

              <Button
                asChild
                className="bg-indigo-500 text-white hover:bg-indigo-600"
              >
                <Link to="/blog">
                  ← Back to Blog
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.06),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-3xl"
      >
        {/* Back Button */}
        <Button
          variant="ghost"
          asChild
          className="mb-6 -ml-2 text-muted-foreground hover:text-indigo-500"
        >
          <Link to="/blog">
            ← Back to Blog
          </Link>
        </Button>

        {/* Article */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
          <CardHeader className="pb-6">
            <Badge
              variant="secondary"
              className="w-fit transition-colors hover:bg-indigo-500/10 hover:text-indigo-500"
            >
              {post.date}
            </Badge>

            <CardTitle className="mt-4 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {post.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <article className="max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + index * 0.08,
                    ease: 'easeOut',
                  }}
                  className="mb-6 text-base leading-8 text-muted-foreground md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </article>

            {/* Bottom Navigation */}
            <div className="mt-8 border-t border-border pt-6">
              <Button
                variant="outline"
                asChild
                className="hover:border-indigo-500/50 hover:text-indigo-500"
              >
                <Link to="/blog">
                  ← More Articles
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  )
}