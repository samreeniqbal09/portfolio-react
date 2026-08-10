function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded p-5 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
        View project →
      </a>
    </div>
  )
}

export default ProjectCard