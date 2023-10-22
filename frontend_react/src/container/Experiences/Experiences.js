import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Tooltip as ReactTooltip } from "react-tooltip";
// import { AppWrap } from "../../wrapper";
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from "../../client";
// import Tooltip from '@mui/material/Tooltip';
import "./Experiences.scss";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Experiences</h2>
      <div className="app__skills-exp">
        {experiences.map((experience) => (
          <motion.div className="app__skills-exp-item" key={experience.year}>
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {experience.works.map((work) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                    <p className="p-text-desc">{work.desc}</p>
                  </motion.div>
                  {/* <Tooltip title={"Work Description"} className="p-text-desc">
                    <button sx={{ m: 1 }}>{work.desc}</button>
                  </Tooltip> */}
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default Experiences
// export default AppWrap(Experiences, "app__skills-exp"),'experience';
export default AppWrap(MotionWrap(Experiences, "app__about"), "experience","app__bg");
