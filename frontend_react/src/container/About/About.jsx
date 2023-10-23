import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { images } from "../../constants";
// import { AppWrap } from '../../wrapper';
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  // const abouts = [
  //   {
  //     title: "Web Development",
  //     description: "I am a good web developer",
  //     imgUrl: images.about01,
  //   },
  //   {
  //     title: "Frontend",
  //     description: "I am a good web developer",
  //     imgUrl: images.about02,
  //   },
  //   {
  //     title: "Full-Stack Development",
  //     description: "I am a good web developer",
  //     imgUrl: images.about03,
  //   },
  //   {
  //     title: "Full-Stack Development",
  //     description: "I am a good web developer",
  //     imgUrl: images.about04,
  //   },
  // ];

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text about__head">
        I believe in <span>The Power of Code</span> <br />
        to transform <small>Ideas into Reality.</small>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h2 className="bold-text title-color" style={{ marginTop: 20,textAlign:"center"}}>
              {about.title}
            </h2>
            <p className="p-text p-color" style={{ marginTop: 10 ,textAlign:"center"}}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__bg");
// export default AppWrap(About,'about')
// // export default About;
