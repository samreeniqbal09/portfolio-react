import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts.js'

export default function BlogPostPage() {
  const { id } = useParams()
  const post = blogPosts.find((p) => String(p.id) === id)

  if (!post) {
    return (
      <main className="pt-24 px-4 max-w-3xl mx-auto min-h-screen">
        <p className="dark:text-white">Post not found.</p>
        <Link to="/blog" className="text-blue-500 hover:underline">← Back to blog</Link>
      </main>
    )
  }

  return (
    <main className="pt-24 px-4 max-w-3xl mx-auto min-h-screen">
      <Link to="/blog" className="text-blue-500 hover:underline">← Back to blog</Link>
      <h1 className="text-3xl font-bold dark:text-white mt-4">{post.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-1">{post.date}</p>
      <div  className="prose dark:prose-invert mt-6">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}</div>
    </main>
  )
}