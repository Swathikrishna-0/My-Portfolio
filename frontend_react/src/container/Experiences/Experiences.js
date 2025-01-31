import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGoogle } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Experiences.scss";

const Experiences = () => {
  return (
    <div style={{ width: "100%" }} className="app__skills-exp">
      <motion.h1
        className="experiences__head"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        WORK <span>EXPERIENCE</span>
      </motion.h1>
      <div className="app__skills-exp-item">
        <motion.div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
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
              icon={<FaGoogle />}
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
                Managed Visual Studio Enterprise license tickets and software inventories using ServiceNow. Handled change requests for uninstalling outdated or unlicensed software. Resolved software incidents, runtime errors, and license requests for tools like Docker and Beyond Compare. Ensured system stability and enforced proper licensing standards. Supported vulnerability and incident
                tracking (VIT) for Python, Git, Visual Studio, VS Code, and Java. Used Azure DevOps for user stories and Power BI for data analysis and reporting.
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
              icon={<FaGoogle />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "bold" }}
              >
                Techsophy
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Full stack Developer Intern
              </h4>
              <p style={{ color: "rgba(255, 255, 255, 0.56)" }}>
                Developed and maintained the Recovery Assist Platform as a
                Fullstack Developer. Fixed UI issues and optimized application
                performance using Google Analytics. Worked with ReactJS,
                JavaScript, DynamoDB, MUI, and AWS for project stability.
                Trained in Dynamics 365 Business Central and CRM development.
                Wrote well-designed, testable code to improve functionality.
                Collaborated with product managers, designers, and QA teams to
                meet project goals.
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
              icon={<FaDev />}
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
                Assisted students with technical queries on the MERN
                stack.Clarified doubts to improve subject understanding.
                Supported better learning outcomes through guidance.
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
              icon={<TbTriangleSquareCircle />}
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
                Developed responsive web pages using HTML, CSS, JavaScript, and
                Bootstrap. Integrated Django components and managed version
                control with Git. Built static and dynamic web pages for an
                e-commerce website. Showcased strong work ethic, adaptability,
                and teamwork as an intern.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Experiences, "app__about"),
  "experience",
  "app__bg"
);
