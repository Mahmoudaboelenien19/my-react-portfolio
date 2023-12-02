import Skill from "./Skill";
import { SkillInterface } from "../../assets/Utils/interfaces";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
interface Props {
  arr: SkillInterface[];
  translate: string;
  target: string;
}
const Skills = ({ target, arr, translate }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start end", "end start"],
    offset: ["start end", "start start"],
  });
  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["0%", "0%", translate]
  );

  return (
    <div className="skills" ref={ref}>
      <motion.div
        style={{ translateX: xTransform }}
        className={clsx("skills-wrapper", target)}
      >
        {arr.map((ob, i) => {
          return <Skill key={i} {...ob} />;
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
