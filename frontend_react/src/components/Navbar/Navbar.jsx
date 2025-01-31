import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="app__navbar">
        <div className="app_navvvv">
          <ul className="app__navbar-links">
            {[
              "home",
              "about",
              "projects",
              "skills",
              "education",
              "experience",
            ].map((item) => (
              <li className="app__flex p-text linkss" key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
            <li className="app__flex p-text contact__nav">
              <a href="#contact" style={{ color: "white", fontSize: "0.8rem" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          id="dropdownMenuIconButton"
          className="nav_menu_icon"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile__menu">
          <ul className="mobile__menu-links">
            {[
              "home",
              "about",
              "projects",
              "skills",
              "education",
              "experience",
              "contact",
            ].map((item) => (
              <li key={`link-${item}`} className="app__flex p-text side__nav_bar">
                <a href={`#${item}`} onClick={toggleMobileMenu}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;