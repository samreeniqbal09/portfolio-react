import { useState } from 'react'

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
      color: 'blue',
    },
    {
      title: 'Web-Based Chatbot',
      description:
        'Converted the CLI chatbot into a web app using HTML, CSS, and JavaScript.',
      category: 'React',
      githubLink: null,
      color: 'purple',
    },
    {
      title: 'Flask Backend Chatbot',
      description:
        'Connected the web frontend to a Flask backend with API endpoints.',
      category: 'Flask',
      githubLink: null,
      color: 'green',
    },
    {
      title: 'AI Chatbot',
      description:
        'Integrated OpenRouter AI API for real AI-powered responses, deployed on Vercel.',
      category: 'AI',
      githubLink: 'https://github.com/samreeniqbal09/AI-chatbot.git',
      color: 'orange',
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio built with React + Tailwind CSS.',
      category: 'React',
      githubLink: 'https://github.com/samreeniqbal09/portfolio-react.git',
      color: 'pink',
    },
  ]

  const bgMap = {
    blue: 'bg-blue-100 dark:bg-blue-900',
    purple: 'bg-purple-100 dark:bg-purple-900',
    green: 'bg-green-100 dark:bg-green-900',
    orange: 'bg-orange-100 dark:bg-orange-900',
    pink: 'bg-pink-100 dark:bg-pink-900',
  }

  const strokeMap = {
    blue: '#2563eb',
    purple: '#9333ea',
    green: '#16a34a',
    orange: '#ea580c',
    pink: '#db2777',
  }

  // Search + category filter
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || project.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">
        Projects
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {['All', 'Python', 'React', 'AI', 'Flask'].map((item) => (
          <button
            key={item}
            onClick={() => {
              setCategory(item)

              if (item === 'All') {
                setSearch('')
              }
            }}
            className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
              category === item
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-gray-400 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="border rounded-lg p-5 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`${bgMap[project.color]} p-2 rounded-lg`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={strokeMap[project.color]}
                  strokeWidth="2"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </span>

              <h3 className="text-xl font-semibold dark:text-white">
                {project.title}
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {project.description}
            </p>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {project.category}
            </span>

            {project.githubLink && (
              <div className="mt-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredProjects.length === 0 && (
        <p className="text-gray-600 dark:text-gray-300 mt-6 text-center">
          No projects found
        </p>
      )}
    </section>
  )
}

export default Projects