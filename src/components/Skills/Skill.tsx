import React from "react";
import { Tilt } from "react-tilt";
import { TiltDefaultOptions } from "../../assets/Objects/object";

interface Props {
  Icon: React.ComponentType;
  clr: string;
  name: string;
}
const Skill = ({ clr, name, Icon }: Props) => {
  return (
    <Tilt options={TiltDefaultOptions(45, 1.05)} key={name}>
      <div className="skill-icon" style={{ color: clr }} title={name}>
        <Icon />
      </div>
    </Tilt>
  );
};

export default Skill;
