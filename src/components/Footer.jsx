function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 py-6 text-center text-gray-500 border-t">
      <p>© {year} Samreen Iqbal. All rights reserved.</p>
    </footer>
  )
}

export default Footer