import React from "react";
import Skill from "./Skill";
import { SkillInterface } from "../../assets/Utils/interfaces"
interface Props {
  arr: SkillInterface[];
}
const Skills = ({arr }: Props) => {
  return (
    <div className="skills"

    >
      {arr.map((ob, i) => {
        return <Skill key={i} {...ob} />;
      })}
    </div>
  );
};

export default Skills;
