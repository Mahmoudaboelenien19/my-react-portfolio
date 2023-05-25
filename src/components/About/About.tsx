import React from "react";
import MacCom from "../3D/MacCom";
import Header from "../widgets/Header";
import Background from "../widgets/Background";

const About = () => {
  return (
    <div id="about">
      <Header head="ABout Me" specialLetter={1} />
      <Background text="About Me" />
      <div className="about">
        <div className="mac">
          <MacCom />
        </div>

        <p>
          I'm a Full Stack MERN Developer with a background in Electrical
          Engineering. I specialize in both front-end and back-end development,
          creating intuitive user interfaces and designing efficient server-side
          architectures. Explore my portfolio to see examples of my work.
        </p>
      </div>
    </div>
  );
};

export default About;
