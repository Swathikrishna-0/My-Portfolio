import React from "react";
import {
  About,
  Footer,
  Header,
  Skills,
  Work,
  Experiences,
  Certifications,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { TbHeartCode } from "react-icons/tb";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 app__social">
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
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Experiences />
        <Certifications />
        <Footer />   
      </div>
    </>
  );
};

export default App;
