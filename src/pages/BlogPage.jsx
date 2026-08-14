import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts.js'
import FadeInSection from '../components/FadeInSection.jsx'

export default function BlogPage() {
  return (
    <main className="pt-24 px-4 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold dark:text-white mb-8">
        Blog
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <FadeInSection key={post.id} delay={index * 0.1}>
            <Link
              to={`/blog/${post.id}`}
              className="block p-6 rounded-lg border dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold dark:text-white">
                {post.title}
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {post.date}
              </p>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {post.excerpt}
              </p>
            </Link>
          </FadeInSection>
        ))}
      </div>
    </main>
  )
}