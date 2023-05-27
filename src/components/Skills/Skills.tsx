import React from "react";
import { skillsIconsArr } from "../../assets/Arr.js";
import Skill from "./Skill";
interface Props {
  arr: { Icon: React.ComponentType; clr: string; name: string }[];
}
const Skills = ({ arr }: Props) => {
  return (
    <div className="skills">
      {arr.map((ob, i) => {
        return <Skill key={i} {...ob} />;
      })}
    </div>
  );
};

export default Skills;
