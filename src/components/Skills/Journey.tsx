import Header from "../widgets/shared/Header";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimeLine from "./TimeLine";
import "react-vertical-timeline-component/style.min.css";
import Container from "../widgets/shared/Container";
import SkillsWrapper from "./SkillsWrapper";
import { Fragment } from "react";
import { skillsArr } from "@/assets/Utils/Arr";
const Journey = () => {
  return (
    <Fragment>
      <Container id="journey">
        <Header head="Learning Journey" title="How the journey Started" />
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
      </Container>
      <SkillsWrapper />
    </Fragment>
  );
};

export default Journey;
