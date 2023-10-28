import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
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
      <div className="main__footer">
        {/* <div className="round__container">
          <div className="round__left"></div>
        </div> */}
        <h2 className="head-text" style={{ color: "white", margin: "35px" }}>
          Contact
        </h2>
        <div className="footer__contianer">
          <div className="contact_container">
            <h2 className="p-text head__drop">Drop a Message</h2>
            <p className="p-text">
              Thank you for taking the time to explore my portfolio. I'm
              passionate about my work and always eager to embark on new
              creative journeys. If you have any questions or opportunities to
              discuss, please don't hesitate to reach out. Let's create
              something remarkable together!
            </p>
            <div className="contact_card">
              <div className="icon__style">
                <AiFillMail style={{ color: "white" }} className="icons" />
              </div>
              <a href="mailto:swathipriyamoru@gmail.com" className="p-text">
                swathipriyamoru@gmail.com
              </a>
            </div>
            <div className="contact_card">
              <div className="icon__style">
                <AiFillPhone style={{ color: "white" }} className="icons" />
              </div>
              <a href="tel:+91 9912576665" className="p-text">
                +91 9912576665
              </a>
            </div>
            <div className="contact_card">
              <div className="icon__style">
                <TiLocation style={{ color: "white" }} className="icons" />
              </div>
              <a
                href="https://maps.app.goo.gl/GxsypGtZs9MsjrUb6"
                className="p-text"
              >
                3-156, Narayanapuram, <br /> Unguturu Mandal, West Godavari
                District, <br />
                Andhra Pradesh, India 534406.
              </a>
            </div>
          </div>
          {!isFormSubmitted ? (
            <div className="message__container">
              <div>
                <input
                  className="p-text"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  value={username}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  type="text"
                  onChange={handleChangeInput}
                  className="textareaa"
                />
              </div>
              <button type="button" onClick={handleSubmit}>
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </div>
          ) : (
            <div className="message_note">
              <h3>Thank you for getting in touch!</h3>
            </div>
          )}
        </div>
        {/* <div>
        <p>@2023 Swathi</p>
        <p>All rights reserved</p>
      </div> */}
        {/* <div className="round__right"></div> */}
      </div>
     
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "main__footer"),
  "contact",
  "app__bg"
);
// export default MotionWrap(Footer, "contact");
