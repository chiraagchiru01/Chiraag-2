import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">

        <a href="#hero" className="logo" onClick={closeMenu}>
          CR
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">

          <button
            className="theme-toggle"
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            ☰
          </button>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;