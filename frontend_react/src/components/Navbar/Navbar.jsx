import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

// import { images } from "../../constants";
import "./Navbar.scss";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { TbHeartCode } from "react-icons/tb";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      {/* <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div> */}
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "experience"].map((item) => (
          <li className="app__flex p-text linkss" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text contact__nav">
          <a href="#contact" style={{color:"white"}}>Contact</a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <div>
          <HiMenuAlt4
            onClick={() => setToggle(true)}
            className="nav_menu_icon"
          />
        </div>

        {toggle && (
          <div className="motion_nav_div">
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} className="close__icon" />

              <ul style={{ paddingTop: "60px" }}>
                {["home", "about", "work", "skills", "contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                      className="nav_a-link"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.linkedin.com/in/swathipriyamoru/"
                target="blank"
                className="social__icon"
              >
                <BsLinkedin className="icon"/>
              </a>
              <a
                href="https://www.instagram.com/swathipriya_0/"
                target="blank"
                className="social__icon"
              >
                <BsInstagram />
              </a>
              <a
                href="https://github.com/Swathikrishna-0"
                target="blank"
                className="social__icon"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.codingninjas.com/studio/profile/SwathiPriya"
                className="social__icon"
                target="blank"
              >
                <TbHeartCode />
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
