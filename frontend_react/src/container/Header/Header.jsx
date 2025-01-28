import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { BiDownload } from "react-icons/bi";

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
// };

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <a href={images.resume} download style={{textDecoration:"none"}}>
          <button className="resume-button">
              <BiDownload fontSize={20} />
            &nbsp;&nbsp;Download Resume
          </button>
        </a>
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
// export default Header;
