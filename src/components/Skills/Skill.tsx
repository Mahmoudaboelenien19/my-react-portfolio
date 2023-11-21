import Title from "../widgets/shared/CustomTitle";
import { SkillInterface } from "../../assets/Utils/interfaces.js";

const Skill = ({ clr, name, Icon }: SkillInterface) => {
  return (
    <div className="skill-icon" style={{ color: clr }}>
      <Title title={name}>
        <Icon />
      </Title>
    </div>
  );
};

export default Skill;
