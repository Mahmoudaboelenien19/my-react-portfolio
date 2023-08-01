import React from "react";
import Header from "../widgets/Header";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { skillsArr, skillsIconsArr } from "../../assets/Utils/Arr.js";
import TimeLine from "./TimeLine";
import "react-vertical-timeline-component/style.min.css";
import Skills from "./Skills.js";
import {motion} from "framer-motion";
const Experience = () => {
  return (
    <div id="experience">
      <Header head="Experience"  />

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
          style={{opacity:0,x:-60}}
          viewport={{once:true,amount:.7}}
          whileInView={{ opacity: [0,.1,.2,.5,.8,1],x:0 }}
          transition={{duration:.4}}
   
        className="skills-par"
      >
        <Skills arr={skillsIconsArr[0].backend||[] }  />
        <Skills arr={skillsIconsArr[1].frontend||[]} />
        <Skills arr={skillsIconsArr[2].essentials||[]}  />
      </motion.div>
    </div>
  );
};

export default Experience;
