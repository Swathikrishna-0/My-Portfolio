import React, { useState, useEffect } from "react";
import "./Certifications.scss";
import { client, urlFor } from "../../client";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certifications"]';
    client.fetch(query).then((data) => {
      setCertifications(data);
    });
  }, []);
  console.log(certifications, "Certifications Array");
  return (
    <div>
      <h2 className="head-text main-head">Certifications</h2>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__cert-portfolio"
      >
        {certifications.map((certification) => (
          <div className="certifications__main">
            <div className="app__cert-img app__flex">
              <img
                src={urlFor(certification.imgUrl)}
                alt={certification.certificationName}
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  href={certification.credentialURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div
              className="app__cert-content app__flex"
              style={{ color: "white" }}
            >
              <h4 className="bold-text">{certification.certificationName}</h4>
              <p className="p-text">{certification.issuingOrg}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* <div>
        {certifications.map((certification) => (
          <div>
            <p>{certification.certificationName}</p>
            <p>{certification.issuingOrg}</p>

            <img
              src={urlFor(certification.imgUrl)}
              alt={certification.certificationName}
            />
            <a href={certification.credentialURL}>
              {certification.credentialURL}
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Certifications, "app__certifications"),
  "certifications",
  "app__bg"
);
// export default AppWrap(
//   MotionWrap(Work, 'app__works'),
//   'work',
//   'app__primarybg',
// );
