function Projects() {
  const projects = [
    {
      title: 'Python CLI Chatbot',
      description: 'A command-line chatbot built with Python using dictionary-based Q&A.',
      githubLink: null
    },
    {
      title: 'Web-Based Chatbot',
      description: 'Converted the CLI chatbot into a web app using HTML, CSS, and JavaScript.',
      githubLink: null
    },
    {
      title: 'Flask Backend Chatbot',
      description: 'Connected the web frontend to a Flask backend with API endpoints.',
      githubLink: null
    },
    {
      title: 'AI Chatbot',
      description: 'Integrated OpenRouter AI API for real AI-powered responses, deployed on Vercel.',
      githubLink: 'https://github.com/your-username/ai-chatbot'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with React + Tailwind CSS.',
      githubLink: 'https://github.com/your-username/portfolio-react'
    }
  ]

  return (
    <section id="projects" className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border rounded p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            {project.githubLink && (
              
       <a       href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
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