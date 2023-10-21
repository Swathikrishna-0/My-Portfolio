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
      <div></div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "experience"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text contact__nav">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="nav_menu_icon" />

        {toggle && (
          <div className="motion_nav_div">
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }} 
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item} >
                  <a href={`#${item}`} onClick={() => setToggle(false)} className="nav_a-link">
                    {item}
                  </a>
                </li>
              ))}
              {/* <li>
                <a
                  href="https://www.linkedin.com/in/swathipriyamoru/"
                  target="blank"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/swathipriya_0/"
                  target="blank"
                >
                  <BsInstagram />
                </a>
              </li>

              <li>
                <a href="https://github.com/Swathikrishna-0">
                  <BsGithub />
                </a>
                <a href="https://www.codingninjas.com/studio/profile/SwathiPriya">
                  <TbHeartCode />
                </a>
              </li> */}
            </ul>
            
          </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
