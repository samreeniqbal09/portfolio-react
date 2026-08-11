function Contact() {
  return (
    <section id="contact" className="px-6 py-16 max-w-3xl mx-auto dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Feel free to reach out through any of these:
      </p>
      <ul className="space-y-3 dark:text-gray-300">
        <li className="flex items-center gap-3">
          <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </span>
          <span>
            Email: <a href="mailto:samreeniqbal0987@email.com" className="text-blue-600 dark:text-blue-400 hover:underline">samreeniqbal0987@email.com</a>
          </span>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#374151" className="dark:fill-gray-200">
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.1 1.9 3 1.4 3.7 1a2.3 2.3 0 0 1 .7-1.5c-2.6-.3-5.4-1.3-5.4-5.9a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.2 3.2c0 4.6-2.8 5.6-5.4 5.9a2.6 2.6 0 0 1 .7 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
            </svg>
          </span>
          <span>
            GitHub: <a href="https://github.com/samreeniqbal09" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/samreeniqbal09</a>
          </span>
        </li>
      </ul>
    </section>
  )
}

export default Contact