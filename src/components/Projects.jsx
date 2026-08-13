function Projects() {
  const projects = [
    {
      title: 'Python CLI Chatbot',
      description: 'A command-line chatbot built with Python using dictionary-based Q&A.',
      githubLink: null,
      color: 'blue'
    },
    {
      title: 'Web-Based Chatbot',
      description: 'Converted the CLI chatbot into a web app using HTML, CSS, and JavaScript.',
      githubLink: null,
      color: 'purple'
    },
    {
      title: 'Flask Backend Chatbot',
      description: 'Connected the web frontend to a Flask backend with API endpoints.',
      githubLink: null,
      color: 'green'
    },
    {
      title: 'AI Chatbot',
      description: 'Integrated OpenRouter AI API for real AI-powered responses, deployed on Vercel.',
      githubLink: "https://github.com/samreeniqbal09/AI-chatbot.git",
      color: 'orange'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with React + Tailwind CSS.',
      githubLink: 'https://github.com/samreeniqbal09/portfolio-react.git',
      color: 'pink'
    }
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

  return (
    <section id="projects" className="px-6 py-16 max-w-3xl mx-auto dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border rounded p-4 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <span className={`${bgMap[project.color]} p-2 rounded-lg`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={strokeMap[project.color]} strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
            {project.githubLink && (
              
                <a href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects