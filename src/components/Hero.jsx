import profilePic from '../assets/profile.jpeg'

function Hero() {
  return (
    <section
      id="hero"
      className="px-6 py-20 max-w-3xl mx-auto flex flex-col items-center text-center gap-6"
    >
      <img
        src={profilePic}
        alt="Samreen Iqbal"
        className="w-40 h-40 rounded-full object-cover border-4 border-gray-200"
      />

      <div>
        <h1 className="text-4xl font-bold mb-2">Samreen Iqbal</h1>
        <p className="text-lg text-gray-600">
          BS Computer Science Student — Software Development &amp; AI Enthusiast
        </p>
      </div>

      <div className="flex gap-4">
        <a href="#about" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
          About Me
        </a>
        <a href="#skills" className="border border-gray-400 px-5 py-2 rounded hover:border-blue-600">
          Skils
        </a>
         <a href="#projects" className="border border-gray-400 px-5 py-2 rounded hover:border-blue-500">
          Projects
        </a>
        <a href="#contact" className="border border-gray-400 px-5 py-2 rounded hover:border-blue-600">
          Contact
        </a>
      </div>
    </section>
  )
}

export default Hero