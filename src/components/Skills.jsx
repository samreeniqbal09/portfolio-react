const skillCategories = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C++', 'Basic JavaScript'],
    color: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    category: 'Web Technologies',
    items: ['HTML', 'CSS', 'Flask'],
    color: 'purple',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    category: 'Technical Skills',
    items: ['API Integration', 'Git & GitHub', 'Vercel Deployment', 'Problem Solving'],
    color: 'green',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'Presentation Skills', 'Teamwork', 'Quick Learning', 'Time Management'],
    color: 'orange',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const bgMap = {
  blue: 'bg-blue-100 dark:bg-blue-900',
  purple: 'bg-purple-100 dark:bg-purple-900',
  green: 'bg-green-100 dark:bg-green-900',
  orange: 'bg-orange-100 dark:bg-orange-900',
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-16 max-w-3xl mx-auto dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Skills</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`${bgMap[group.color]} p-2 rounded-lg`}>
                {group.icon}
              </span>
              <h3 className="font-semibold text-lg dark:text-white">{group.category}</h3>
            </div>
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