import React, { useState } from "react";
import Background from "../widgets/Background";
import Header from "../widgets/Header";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion, stagger, useAnimate } from "framer-motion";
import { skillsArr, skillsIconsArr } from "../../assets/Utils/Arr.js";
import TimeLine from "./TimeLine";
import "react-vertical-timeline-component/style.min.css";
import Skills from "./Skills.js";
const Experience = () => {
  const [ref, animate] = useAnimate();
  const [animateState, setAnimateState] = useState(false);
  return (
    <div id="experience">
      <Background text="SKILLS" />
      <Header head="Experience" specialLetter={0} />

      <VerticalTimeline
        animate
        className="timeline-par"
        lineColor="var(--third)"
        layout={"2-columns"}
      >
        {skillsArr?.map((obj, i) => {
          return <TimeLine key={i} {...obj} />;
        })}
      </VerticalTimeline>
      <motion.div
        ref={ref}
        onViewportEnter={() => {
          if (!animateState) {
            setAnimateState(true);
            animate(
              " .skill-icon",
              { opacity: [0, 1], scale: [0.8, 1.05, 1] },
              { delay: stagger(0.18), duration: 0.15 }
            );
          }
        }}
        className="skills-par"
      >
        <Skills arr={skillsIconsArr[0].backend!} />
        <Skills arr={skillsIconsArr[1].frontend!} />
        <Skills arr={skillsIconsArr[2].essentials!} />
      </motion.div>
    </div>
  );
};

export default Experience;
