import { useRef } from "react";
import { SkillInterface } from "../../assets/Utils/interfaces";
import MainBtn from "../widgets/shared/MainBtn";
import { BiDesktop } from "react-icons/bi";
import { DiGithubBadge } from "react-icons/di";
import Title from "../widgets/shared/CustomTitle";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
interface Props {
  i: number;
  img: string;
  demo: string;
  head: string;
  code: string;
  progress: MotionValue;
  range: number[];
  targetScale: number;
  skillsUsed: SkillInterface[];
}
const Figure = ({
  i,
  progress,
  range,
  targetScale,
  skillsUsed,
  img,
  code,
  demo,
  head,
}: Props) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1.8, 1]);

  return (
    <div className="fig-wrapper" ref={container}>
      <motion.figure
        style={{
          scale,
          top: `calc(5vh + ${i * 25}px)`,
        }}
      >
        <h3 className="itim">{head} .</h3>
        <div className="content">
          <div className="pic-wrapper">
            <motion.div style={{ scale: imageScale }} className="img-par">
              <img src={img} alt="" />
            </motion.div>
          </div>

          <div className="project-data">
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

            <ul>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>
                Sed porro quas eum iusto expedita, assumenda voluptatibus.
              </li>
              <li>
                Temporibus excepturi magni amet velit, explicabo provident
                iusto?
              </li>
              <li>
                Voluptatem, reprehenderit quae! Impedit doloribus quas culpa
                quam.
              </li>
              <li>
                Culpa consequuntur placeat quaerat magni necessitatibus nulla
                quibusdam.
              </li>
            </ul>
            <div className="projects-links">
              <a href={demo} target="_blank" rel="noreferrer">
                <MainBtn Icon={BiDesktop} btn="Demo" />
              </a>

              <a href={code} target="_blank" rel="noreferrer">
                <MainBtn Icon={DiGithubBadge} btn="code" />
              </a>
            </div>
          </div>
        </div>
      </motion.figure>
    </div>
  );
};

export default Figure;
