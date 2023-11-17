import Header from "../widgets/Header";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { skillsArr, skillsIconsArr } from "../../assets/Utils/Arr.js";
import TimeLine from "./TimeLine";
import "react-vertical-timeline-component/style.min.css";
import Skills from "./Skills.js";
import { motion } from "framer-motion";
import Container from "../widgets/Container";
import SkillsWrapper from "./SkillsWrapper";
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
      <SkillsWrapper />
    </Container>
  );
};

export default Experience;
