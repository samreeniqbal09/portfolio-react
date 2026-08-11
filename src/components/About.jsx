import { useState } from 'react'

function About() {
  const [showMore, setShowMore] = useState(false)

  const shortBio =
    "I am Samreen Iqbal, a BS Computer Science student with a strong interest in software development and artificial intelligence."

  const fullBio =
    shortBio +
    " I enjoy solving problems, learning new technologies, and building practical applications that improve user experience. I am a quick learner, a confident presenter, and always eager to enhance my technical and communication skills."

  return (
    <section id="about" className="px-6 py-16 max-w-3xl mx-auto dark:bg-gray-900">
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </span>
        <h2 className="text-3xl font-bold dark:text-white">About Me</h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {showMore ? fullBio : shortBio}
      </p>
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </section>
  )
}

export default About