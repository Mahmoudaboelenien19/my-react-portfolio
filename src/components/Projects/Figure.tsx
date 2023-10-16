import React from "react";
import ProjectHint from "./ProjectHint";
import { motion } from "framer-motion";
import { SkillInterface } from "../../assets/Utils/interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MainBtn from "../widgets/MainBtn";
import { BiDesktop } from "react-icons/bi";
import { DiGithubBadge } from "react-icons/di";
import Title from "../widgets/CustomTitle";
interface Props {
  img: string;
  demo: string;
  head: string;
  code: string;
  skillsUsed: SkillInterface[];
  msgOne: string;
  msgTwo: string;
}
const Figure = ({
  msgTwo,
  msgOne,
  skillsUsed,
  img,
  code,
  demo,
  head,
}: Props) => {
  return (
    <motion.figure
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1] }}
      transition={{ delay: 0.1 }}
    >
      <ProjectHint msgOne={msgOne} msgTwo={msgTwo} />
      <div className="img-par">
        <LazyLoadImage effect="blur" src={img} alt="" />
      </div>
      <h3 style={{ margin: "20px 0 " }}>{head}</h3>
      <div className="skills-project-par">
        {skillsUsed.map(({ clr, name, Icon }, i) => {
          return (
            <span
              key={i}
              style={{ color: clr, fontSize: 16, position: "relative" }}
            >
              <Title title={name}>
                <Icon />
              </Title>
            </span>
          );
        })}
      </div>
      <div className="projects-links">
        <a href={demo} target="_blank" rel="noreferrer">
          <MainBtn Icon={BiDesktop} btn="Demo" />
        </a>
        <a href={code} target="_blank" rel="noreferrer">
          <MainBtn Icon={DiGithubBadge} btn="code" />
        </a>
      </div>
    </motion.figure>
  );
};

export default Figure;
