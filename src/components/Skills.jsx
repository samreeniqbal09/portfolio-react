const skillCategories = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C++', 'Basic JavaScript'],
  },
  {
    category: 'Web Technologies',
    items: ['HTML', 'CSS', 'Flask'],
  },
  {
    category: 'Technical Skills',
    items: ['API Integration', 'Git & GitHub', 'Vercel Deployment', 'Problem Solving'],
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'Presentation Skills', 'Teamwork', 'Quick Learning', 'Time Management'],
  },
]

function Skills() {
  return (
    <section id="skills" className="px-6 py-16 max-w-3xl mx-auto dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Skills</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="font-semibold text-lg mb-3 dark:text-white">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded px-3 py-1 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills