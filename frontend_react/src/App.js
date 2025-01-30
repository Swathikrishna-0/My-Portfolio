import React from "react";
import {
  About,
  Footer,
  Header,
  Skills,
  Work,
  Experiences,
  Education,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";


const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Education />
        <Experiences />
        <Footer />   
      </div>
    </>
  );
};

export default App;
