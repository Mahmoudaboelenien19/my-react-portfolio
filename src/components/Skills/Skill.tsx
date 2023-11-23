import Title from "../widgets/shared/CustomTitle";
import { SkillInterface } from "../../assets/Utils/interfaces.js";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";

const Skill = ({ clr, name, Icon }: SkillInterface) => {
  return (
    <CursorDimensionWhenHover
      scale={0.2}
      Element="div"
      className="skill-icon"
      style={{ color: clr }}
    >
      <Title title={name}>
        <Icon />
      </Title>
    </CursorDimensionWhenHover>
  );
};

export default Skill;
