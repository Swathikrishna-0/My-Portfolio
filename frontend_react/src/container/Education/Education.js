import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Education.scss";

const Education = () => {
  const educationData = [
    {
      year: "2024 - Present",
      degree: "Masters in Computer Science",
      institution: "International University of Applied Sciences",
      description:
        "Pursuing Software Engineering with industry-relevant skills.",
    },
    {
      year: "2018 - 2022",
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid",
    },
    {
      year: "2016 - 2018",
      degree: "Pre University Course (MPC)",
      institution: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid",
    },
  ];

  const certificationsData = [
    { name: "JavaScript Engine (V8)", url: "https://certificate-url.com/v8" },
    {
      name: "Advance Your Skills in Python",
      url: "https://www.linkedin.com/learning/certificates/24507a89c26639620dbf65c8d5f5e4e1acf92384518f619c019f8ce47e790fb4?u=73656306",
    },
    {
      name: "React JS",
      url: "https://certificates.ccbp.in/intensive/react-js?id=WYOMYQEXQW",
    },
    {
      name: "Data Structures in C++",
      url: "https://certificate.codingninjas.com/view/0ee838aaff141ffe",
    },
    {
      name: "JavaScript Essentials",
      url: "https://certificates.ccbp.in/intensive/javascript-essentials?id=JBVFSGIGWF",
    },
    {
      name: "Node.js",
      url: "https://certificates.ccbp.in/intensive/node-js?id=MKOYQPTWRX",
    },
    {
      name: "Responsive Web Design using Flexbox",
      url: "https://certificates.ccbp.in/intensive/flexbox?id=DDLAQTAKRR",
    },
    {
      name: "Build Your Own Dynamic Web Application",
      url: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=BSPTYTVYGH",
    },
    {
      name: "Programming Foundations with Python",
      url: "https://certificates.ccbp.in/intensive/programming-foundations?id=HZRNBLBGSV",
    },
    {
      name: "Build Your Own Responsive Website",
      url: "https://certificates.ccbp.in/intensive/responsive-website?id=UEUIGDIBEV",
    },
    {
      name: "Build Your Own Static Website",
      url: "https://certificates.ccbp.in/intensive/static-website?id=TUZVFIDWHG",
    },
    {
      name: "Developer Foundations",
      url: "https://certificates.ccbp.in/intensive/developer-foundations?id=EBMHBOWQQJ",
    },
    {
      name: "Introduction to Databases",
      url: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=KGLKOGIJXW",
    },
    {
      name: "Introduction to C++",
      url: "https://certificate.codingninjas.com/view/3b6fbf6b14d45511",
    },
  ];

  return (
    <>
      <motion.h1
        className="education__head"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Education <span>and Certifications</span>
      </motion.h1>
      <div className="app__education-container">
        <div className="app__education-timeline">
          {educationData.map((edu, index) => (
            <motion.div
              className="app__education-item"
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="app__education-year">{edu.year}</div>
              <div className="app__education-content">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                {edu.description && (
                  <p className="description">{edu.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="app__certifications">
          <h2>Certifications</h2>
          <ul>
            {certificationsData.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  {cert.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Education, "app__education"),
  "education",
  "app__bg"
);
