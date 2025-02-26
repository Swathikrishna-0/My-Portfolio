import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Experiences.scss";

const Experiences = () => {
  return (
    <div style={{ width: "100%" }} className="app__skills-exp">
      {/* Animate the header with a fade-in effect */}
      <motion.h1
        className="experiences__head"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        WORK <span>EXPERIENCE</span>
      </motion.h1>

      {/* Animate the experience timeline container */}
      <motion.div
        className="app__skills-exp-item"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Animate the vertical timeline */}
        <motion.div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <VerticalTimeline className="custom-timeline2" lineColor="white">
            <VerticalTimelineElement
              className="vertical-timeline-element--left"
              date="May 2024 - Aug 2024"
              dateClassName="dateClass"
              contentArrowStyle={{
                borderRight: "7px solid #E82E81",
              }}
              contentStyle={{ background: "black", color: "#fff" }}
              iconStyle={{ background: "#fff", color: "#E82E81" }}
              icon={<MdOutlineWork />}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3
                className="vertical-timeline-element-title--left"
                style={{ fontWeight: "bold" }}
              >
                Humana
              </h3>
              <h4 className="vertical-timeline-element-subtitle--left">
                Software Engineer
              </h4>
              <p style={{ color: "rgba(255, 255, 255, 0.56)" }}>
              Developed an email automation utility using C#, .NET, and JavaScript to generate and send personalized emails. Built a release monitor utility with Python and web scraping to automate software version tracking from Excel input. Implemented a Power BI dashboard to visualize license usage for tools like Docker, Redgate, and Visual Studio. Resolved software incidents, managed licenses, and remediated security vulnerabilities for Python, Git, and PowerShell. Collaborated with teams on patching, compliance, and UAT testing to ensure enterprise software stability and security.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--right"
              date="Jul 2022 - Mar 2023"
              dateClassName="dateClass"
              contentArrowStyle={{
                borderRight: "7px solid #E82E81",
              }}
              contentStyle={{ background: "black", color: "#fff" }}
              iconStyle={{ background: "#fff", color: "#E82E81" }}
              icon={<MdOutlineWork />}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "bold" }}
              >
                Preludesys
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Trainee Software Engineer
              </h4>
              <p style={{ color: "rgba(255, 255, 255, 0.56)" }}>
                Developed and maintained the Recovery Assist Platform as a Fullstack Developer. Fixed UI issues and optimized application performance using Google Analytics. Worked with ReactJS, JavaScript, DynamoDB, MUI, and AWS for project stability. Trained in Dynamics 365 Business Central and CRM development. Wrote well-designed, testable code to improve functionality. Collaborated with product managers, designers, and QA teams to meet project goals.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--left"
              date="Mar 2021 - Jun 2022"
              dateClassName="dateClass"
              contentArrowStyle={{
                borderRight: "7px solid #E82E81",
              }}
              contentStyle={{ background: "black", color: "#fff" }}
              iconStyle={{ background: "#fff", color: "#E82E81" }}
              icon={<MdOutlineWork />}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3
                className="vertical-timeline-element-title--left"
                style={{ fontWeight: "bold" }}
              >
                NxtWave
              </h3>
              <h4 className="vertical-timeline-element-subtitle--left">
                Teaching Assistant
              </h4>
              <p style={{ color: "rgba(255, 255, 255, 0.56)" }}>
                Assisted students with technical queries on the MERN stack. Clarified doubts to improve subject understanding. Supported better learning outcomes through guidance.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--right"
              date="Nov 2021 - Feb 2022"
              dateClassName="dateClass"
              contentArrowStyle={{
                borderRight: "7px solid #E82E81",
              }}
              contentStyle={{ background: "black", color: "#fff" }}
              iconStyle={{ background: "#fff", color: "#E82E81" }}
              icon={<MdOutlineWork />}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "bold" }}
              >
                Bazarside
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Frontend Developer, Intern
              </h4>
              <p style={{ color: "rgba(255, 255, 255, 0.56)" }}>
                Developed responsive web pages using HTML, CSS, JavaScript, and Bootstrap. Integrated Django components and managed version control with Git. Built static and dynamic web pages for an e-commerce website. Showcased strong work ethic, adaptability, and teamwork as an intern.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Experiences, "app__about"),
  "experience",
  "app__bg"
);
