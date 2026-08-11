import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav>
      <div className="nav-brand">Samreen Iqbal</div>

      {/* Full links - hidden on mobile via CSS */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger - shown only on mobile via CSS */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Mobile menu - only renders when isOpen is true */}
      {isOpen && (
        <ul className="mobile-menu">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;