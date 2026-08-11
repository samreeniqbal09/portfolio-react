function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 py-6 text-center text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 dark:bg-gray-900">
      <p>© {year} Samreen Iqbal. All rights reserved.</p>
    </footer>
  )
}

export default Footer