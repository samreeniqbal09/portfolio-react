import ProjectCard from './ProjectCard.jsx'

const projects = [
 
  {
    id: 1,
    title: 'My-portfolio',
    description:
      'Connected the chatbot frontend with a Flask backend to process user requests.',
    link: 'https://github.com/samreeniqbal09/my-portfolio',
  },
  {
    id: 2,
    title: 'AI Chatbot',
    description:
      'Integrated AI capabilities using an API to provide more intelligent and dynamic responses.',
    link: 'https://github.com/samreeniqbal09/Mini-Ai-chatbot-1',
  },
]

function Projects() {
  return (
    <section id="projects" className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects