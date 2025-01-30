import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <motion.h1
        className="skills__head"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        SKILLS & <span>TECHNOLOGIES</span>
      </motion.h1>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <motion.div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </motion.div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__bg"
);