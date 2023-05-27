import React from "react";
import Title from "../widgets/CustomTitle";

interface Props {
  Icon: React.ComponentType;
  clr: string;
  name: string;
}
const Skill = ({ clr, name, Icon }: Props) => {
  return (
    <div className="skill-icon" style={{ color: clr }}>
      <Title title={name}>
        <Icon />
      </Title>
    </div>
  );
};

export default Skill;
