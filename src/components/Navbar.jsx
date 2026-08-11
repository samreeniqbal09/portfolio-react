import { useState } from 'react';

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav>
      <div className="nav-brand">Samreen Iqbal</div>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}

        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow flex items-center justify-center"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="black">
                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36A5.389 5.389 0 0 1 12 3z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </li>
      </ul>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {isOpen && (
        <ul className="mobile-menu">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {link}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-2"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;