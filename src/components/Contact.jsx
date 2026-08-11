function Contact() {
  return (
    <section id="contact" className="px-6 py-16 max-w-3xl mx-auto dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Feel free to reach out through any of these:
      </p>
      <ul className="space-y-2 dark:text-gray-300">
       <li>
  Email: <a href="mailto:samreeniqbal0987@email.com" className="text-blue-600 dark:text-blue-400 hover:underline">samreeniqbal0987@email.com</a>
</li>
<li>
  GitHub: <a href="https://github.com/samreeniqbal09" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/samreeniqbal09</a>
</li>
      </ul>
    </section>
  )
}

export default Contact