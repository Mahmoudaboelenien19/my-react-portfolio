import React from "react";
import Header from "../widgets/Header";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { skillsArr, skillsIconsArr } from "../../assets/Utils/Arr.js";
import TimeLine from "./TimeLine";
import "react-vertical-timeline-component/style.min.css";
import Skills from "./Skills.js";
import { motion } from "framer-motion";
import Container from "../widgets/Container";
const Experience = () => {
  return (
    <Container id="experience">
      <Header head="Experience" title="" />

      <VerticalTimeline
        animate
        className="timeline-par"
        lineColor="grey"
        layout={"2-columns"}
      >
        {skillsArr?.map((obj, i) => {
          return <TimeLine key={i} {...obj} />;
        })}
      </VerticalTimeline>
      <motion.div
        style={{ opacity: 0, x: -60 }}
        viewport={{ once: true, amount: 0.7 }}
        whileInView={{ opacity: [0, 0.1, 0.2, 0.5, 0.8, 1], x: 0 }}
        transition={{ duration: 0.4 }}
        className="skills-par"
      >
        <Skills arr={skillsIconsArr[0].backend || []} />
        <Skills arr={skillsIconsArr[1].frontend || []} />
        <Skills arr={skillsIconsArr[2].essentials || []} />
      </motion.div>
    </Container>
  );
};

export default Experience;
