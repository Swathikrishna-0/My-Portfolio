import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { TbHeartCode } from "react-icons/tb";
import { IoDocumentTextSharp } from "react-icons/io5";

const handleClick = () => {
  window.open(
    "https://drive.google.com/file/d/14RCaZOqawrPVD_I92p2fgA5FhZAJApjo/view?usp=sharing",
    "_blank"
  );
};

const Header = () => (
  <div className="app__header">
    {/* Left Section */}
    <motion.div 
      className="header_left"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div 
        className="header__content"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img 
          src={images.headercircle} 
          className="header-circle" 
          alt="circle"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.img 
          src={images.header} 
          className="header-pic" 
          alt="header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Swathi Priya
        </motion.h2>
        <motion.img 
          src={images.headerFire} 
          className="header-fire" 
          alt="fire"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I'm a Software Engineer passionate about creating web applications using modern technology.
        </motion.h4>

        {/* Social Icons */}
        <motion.div className="app__social">
          {[
            { href: "https://www.linkedin.com/in/swathipriyamoru/", icon: <BsLinkedin /> },
            { href: "https://www.instagram.com/swathipriya_0/", icon: <BsInstagram /> },
            { href: "https://github.com/Swathikrishna-0", icon: <BsGithub /> },
            { href: "https://www.codingninjas.com/studio/profile/SwathiPriya", icon: <TbHeartCode /> }
          ].map((social, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Right Section */}
    <motion.div 
      className="header_right"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        FULL-STACK
      </motion.h1>
      <motion.h1 
        className="developer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        DEVELOPER
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Passionate about creating intuitive and engaging user experiences. 
        Specialize in transforming ideas into beautifully crafted products.
      </motion.p>

      {/* Resume Button with Animation */}
      <motion.div 
        className="content__item"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <motion.button 
          className="button button--janus"
          onClick={handleClick}
          whileHover={{ scale: 1.1,  color: "#fff" }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.span 
          className="button-text"
          whileHover={{ color: "#e82e81" }}
        >
          <IoDocumentTextSharp className="resume-icon" />
          View Resume
        </motion.span>
      </motion.div>
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
