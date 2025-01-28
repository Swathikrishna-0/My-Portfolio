import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app_navvvv">
        <ul className="app__navbar-links">
          {[
            "home",
            "about",
            "work",
            "skills",
            "experience",
            "certifications",
          ].map((item) => (
            <li className="app__flex p-text linkss" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          <li className="app__flex p-text contact__nav">
            <a href="#contact" style={{ color: "white",fontSize:"0.8rem" }}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="nav_menu_div">
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
          className="nav_menu_icon"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>

        <div
          id="dropdownDots"
          class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700 dark:divide-gray-600"
          className="menubutton"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconButton"
          >
            {[
              "home",
              "about",
              "work",
              "skills",
              "experience",
              "certifications",
              "contact",
            ].map((item) => (
              <li key={`link-${item}`} className="app__flex p-text side__nav_bar">
                <a href={`#${item}`} className="anchortag">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
