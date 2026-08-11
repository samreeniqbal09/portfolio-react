import { useState } from 'react'

function About() {
  const [showMore, setShowMore] = useState(false)

  const shortBio =
    "I am Samreen Iqbal, a BS Computer Science student with a strong interest in software development and artificial intelligence."

  const fullBio =
    shortBio +
    " I enjoy solving problems, learning new technologies, and building practical applications that improve user experience. I am a quick learner, a confident presenter, and always eager to enhance my technical and communication skills."

  return (
    <section id="about" className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        {showMore ? fullBio : shortBio}
      </p>
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-blue-600 font-medium hover:underline"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </section>
  )
}

export default About