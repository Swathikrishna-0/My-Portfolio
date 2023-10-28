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
import {SocialMedia} from "./components";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Experiences />
        <Certifications />
        <Footer />
        <div className="social__media">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default App;
