import { skillsIconsArr } from "@/assets/Utils/Arr";
import Skills from "./Skills";
import useIsMobile from "../customComponents/useIsMobile";
import useLens from "../customComponents/useLens";

const SkillsWrapper = () => {
  const { isMobile } = useIsMobile();
  useLens();

  return (
    <div id="skills">
      <div className="desktop-skills">
        <Skills target="left" arr={skillsIconsArr} translate={"-15%"} />{" "}
      </div>
      <div className="mobile-skills">
        <p className="text itim">skills</p>
        <Skills
          target="left"
          arr={skillsIconsArr.slice(0, Math.floor(skillsIconsArr.length / 2))}
          translate={isMobile ? "-30%" : "-10%"}
        />
        -
        <Skills
          target="right"
          arr={skillsIconsArr.slice(Math.ceil(skillsIconsArr.length / 2))}
          translate={"10%"}
        />
      </div>
    </div>
  );
};

export default SkillsWrapper;
