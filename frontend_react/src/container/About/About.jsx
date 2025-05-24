import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  const [completedProjects, setCompletedProjects] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false); 
  const aboutRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current); 
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current); 
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const projectsInterval = setInterval(() => {
        if (completedProjects < 35) {
          setCompletedProjects((prev) => prev + 1);
        } else {
          clearInterval(projectsInterval);
        }
      }, 40); 

      const experienceInterval = setInterval(() => {
        if (yearsOfExperience < 3) {
          setYearsOfExperience((prev) => prev + 0.1);
        } else {
          clearInterval(experienceInterval);
        }
      }, 40); 

      return () => {
        clearInterval(projectsInterval);
        clearInterval(experienceInterval);
      };
    }
  }, [isVisible, completedProjects, yearsOfExperience]);

  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      ref={aboutRef} // Attach the ref to the About section
    >
      <motion.h1 
        className="about__heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        About <span>Me</span>
      </motion.h1>
      <div className="about__wrapper">
        <motion.div 
          className="about__content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="about__title">
            I love being a <span>developer!</span>
          </h1>
          <p className="about__description">
            Hello, I'm Swathi Priya! A passionate software engineer with expertise in full-stack development. I specialize in MERN & MEAN stacks, Python & SQL. My journey in tech started with a strong foundation in programming, and I’ve since worked on diverse projects. When I’m not coding, I enjoy exploring startups, staying updated with emerging technologies, and watching my favorite series! ✨🚀
          </p>
          <motion.div 
            className="about__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="stat-box">
              <h2>{completedProjects}+</h2>
              <p>Completed Projects</p>
            </div>
            <div className="stat-box">
              <h2>{yearsOfExperience.toFixed(1)}+</h2>
              <p>Years of Experience</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="about__image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={images.Aboutme}
            alt="Profile"
            whileHover={{ scale: 1.05 }}
            className="profile-image"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppWrap(MotionWrap(About), "about", "app__bg");