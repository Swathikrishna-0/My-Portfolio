import React from "react";
import "./Navbar.scss";

const Navbar = () => {
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
      </nav>
    </>
  );
};

export default Navbar;
