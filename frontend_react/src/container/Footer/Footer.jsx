import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import { AiFillMail } from "react-icons/ai";
import { RiUser3Fill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { TbHeartCode } from "react-icons/tb";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {" "}
      <motion.h1
        className="footer__head"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        LET'S WORK <span>TOGETHER</span>
      </motion.h1>
      <div className="main__footer">
        <div className="footer__container">
          {!isFormSubmitted ? (
            <div className="form__container">
              <div className="input__group">
                <RiUser3Fill className="input__icon" />
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={name}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="input__group">
                <AiFillMail className="input__icon" />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="input__group">
                <AiFillMessage className="input__icon" />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" onClick={handleSubmit}>
                {!loading ? "Submit" : "Submitting..."}
              </button>
            </div>
          ) : (
            <div className="message_note">
              <h3>Thank you for getting in touch!</h3>
            </div>
          )}
        </div>
        <motion.div
          className="app__social__footer"
          style={{ marginTop: "40px" }}
        >
          {[
            {
              href: "https://www.linkedin.com/in/swathipriyamoru/",
              icon: <BsLinkedin size={30} />,
            },
            {
              href: "https://www.instagram.com/swathipriya_0/",
              icon: <BsInstagram size={30} />,
            },
            {
              href: "https://github.com/Swathikrishna-0",
              icon: <BsGithub size={30} />,
            },
            {
              href: "https://www.codingninjas.com/studio/profile/SwathiPriya",
              icon: <TbHeartCode size={30} />,
            },
          ].map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "main__footer"),
  "contact",
  "app__bg"
);
