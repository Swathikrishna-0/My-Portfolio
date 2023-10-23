import React from "react";
import { motion } from "framer-motion";
// import { Tooltip as ReactTooltip } from "react-tooltip";
// import { AppWrap } from "../../wrapper";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { client } from "../../client";
// import Tooltip from '@mui/material/Tooltip';
import "./Experiences.scss";

const Experiences = () => {
  // const [experiences, setExperiences] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text" style={{ color: "white" }}>
        Education and <span style={{ color: "#483CC2" }}>Work Experience</span>
      </h2>
      <div className="app__skills-exp">
        {/* {experiences.map((experience) => ( */}
        <motion.div className="app__skills-exp-item">
          <>
            <div className="education education22">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  Aug 2018 - Mar 2022
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                {/* {experience.works.map((work) => ( */}
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    // data-for={work.name}
                    // key={work.name}
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      B.tech(Electronics & Communication Engineering)
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      IIIT Nuzvid
                    </p>
                    {/* <p className="p-text-desc" style={{ color: "#cbcbcb" }}>IIIT Nuzvid</p> */}
                  </motion.div>
                  {/* <Tooltip title={"Work Description"} className="p-text-desc">
                    <button sx={{ m: 1 }}>{work.desc}</button>
                  </Tooltip> */}
                </>
                {/* ))} */}
              </motion.div>
            </div>
            <div className="education">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  Nov 2021 - Jun 2022
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                {/* {experience.works.map((work) => ( */}
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    // data-for={work.name}
                    // key={work.name}
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      MERN Full-Stack Development(CCBP 4.0)
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      NXTWAVE
                    </p>
                    {/* <p className="p-text-desc" style={{ color: "#cbcbcb" }}></p> */}
                  </motion.div>
                  {/* <Tooltip title={"Work Description"} className="p-text-desc">
                    <button sx={{ m: 1 }}>{work.desc}</button>
                  </Tooltip> */}
                </>
                {/* ))} */}
              </motion.div>
            </div>
          </>
        </motion.div>
        {/* ))} */}
      </div>
      <div className="app__skills-exp expp">
        {/* {experiences.map((experience) => ( */}
        <motion.div className="app__skills-exp-item">
          <>
            <div className="experience">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  2021 Nov - 2021 Dec
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                {/* {experience.works.map((work) => ( */}
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    // data-for={work.name}
                    // key={work.name}
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      Frontend Developer
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Bazarside
                    </p>
                    <p className="p-text-desc" style={{ color: "#cbcbcb" }}>
                      ● Worked with technologies like HTML, CSS, JS, Bootstrap,
                      Git, Python etc.
                    </p>
                    <p className="p-text-desc para-none" style={{ color: "#cbcbcb" }}>
                      ● Enforced website standards for visual and design
                      integrity.
                    </p>
                    <p className="p-text-desc para-none" style={{ color: "#cbcbcb" }}>
                      ● Built static, dynamic, and responsive web pages,
                      designed UI for web pages, and developed them.
                    </p>
                  </motion.div>
                  {/* <Tooltip title={"Work Description"} className="p-text-desc">
                    <button sx={{ m: 1 }}>{work.desc}</button>
                  </Tooltip> */}
                </>
                {/* ))} */}
              </motion.div>
            </div>
            <div className="experience education223" >
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  2022 Jul - 2023 Mar
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                {/* {experience.works.map((work) => ( */}
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    // data-for={work.name}
                    // key={work.name}
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      Trainee Software Engineer
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Preludesys Ind Ltd
                    </p>
                    <p className="p-text-desc" style={{ color: "#cbcbcb" }}>
                      ● Worked on a real-time project for 7 months as a
                      Fullstack Support Developer for a US-based project named
                      Recovery Assist Platform.
                    </p> 
                    <p className="p-text-desc para-none" style={{ color: "#cbcbcb" }}>
                      ● Leveraged mastery of React JS, CSS, and JavaScript to
                      build top-quality code for diverse projects.
                    </p>
                    <p className="p-text-desc para-none" style={{ color: "#cbcbcb" }}>
                      ● Got trained in Dynamics 365 Business Central and CRM as
                      a Technical Developer Consultant.
                    </p>
                  </motion.div>
                  {/* <Tooltip title={"Work Description"} className="p-text-desc">
                    <button sx={{ m: 1 }}>{work.desc}</button>
                  </Tooltip> */}
                </>
                {/* ))} */}
              </motion.div>
            </div>
          </>
        </motion.div>
        {/* ))} */}
      </div>
    </>
  );
};

// export default Experiences
// export default AppWrap(Experiences, "app__skills-exp"),'experience';
export default AppWrap(
  MotionWrap(Experiences, "app__about"),
  "experience",
  "app__bg"
);
