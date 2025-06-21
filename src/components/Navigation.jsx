// Navigation.jsx
import React, { useState } from "react";

export function Navigation({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">Satish </div>

        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`navbar-button ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="navbar-menu-icon">
          <button
            className="menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`navbar-button ${activeSection === item.id ? "active" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
