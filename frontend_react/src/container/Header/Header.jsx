import React from "react";
// import { motion } from "framer-motion";
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
  <>
    <div className="app__header">
      <div className="header_left">
        <div className="header__content">
          <img
            src={images.headercircle}
            className="header-circle"
            alt="circle"
          />
          <img src={images.header} className="header-pic" alt="header" />
          <h2>Swathi Priya</h2>
          <img src={images.headerFire} className="header-fire" alt="fire" />
          <h4>
            I'm a Software Engineer passionate about creating web applications
            using modern technology.
          </h4>
          <div className="app__social">
            <div>
              <a
                href="https://www.linkedin.com/in/swathipriyamoru/"
                target="blank"
              >
                <BsLinkedin />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/swathipriya_0/" target="blank">
                <BsInstagram />
              </a>
            </div>
            <div>
              <a href="https://github.com/Swathikrishna-0" target="blank">
                <BsGithub />
              </a>
            </div>
            <div>
              <a
                href="https://www.codingninjas.com/studio/profile/SwathiPriya"
                target="blank"
              >
                <TbHeartCode />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header_right">
        <h1>FULL-STACK</h1>
        <br />
        <h1 className="developer">DEVELOPER</h1>
        <p>
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
        <div className="content__item">
          <button className="button button--janus" onClick={handleClick}></button>{" "}
          <span className="button-text">
            <IoDocumentTextSharp className="resume-icon" />
            View Resume
          </span>
        </div>
      </div>
    </div>
  </>
);

export default AppWrap(Header, "home");
