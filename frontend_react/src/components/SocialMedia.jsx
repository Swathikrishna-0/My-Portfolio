import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { TbHeartCode } from "react-icons/tb";

const SocialMedia = () => {
  return (
    <div className="app__social_mobile">
      <div>
        <a href="https://www.linkedin.com/in/swathipriyamoru/" target="blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/swathipriya_0/" target="blank">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/Swathikrishna-0" target="blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.codingninjas.com/studio/profile/SwathiPriya"
          target="blank"
        >
          <TbHeartCode />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
