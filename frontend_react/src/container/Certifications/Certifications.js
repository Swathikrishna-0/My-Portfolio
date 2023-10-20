import React, { useState, useEffect } from "react";
import "./Certifications.scss";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Certifications = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);
  return <div>Certifications</div>;
};

export default AppWrap(MotionWrap(Certifications, "app__certifications"));
