import { useRef } from "react";
import MainBtn from "../widgets/shared/MainBtn";
import { BiDesktop } from "react-icons/bi";
import { DiGithubBadge } from "react-icons/di";
import Title from "../widgets/shared/CustomTitle";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";
import { SkillInterface } from "@/assets/Utils/interfaces";
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
  list: string[];
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
  list,
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
        <CursorDimensionWhenHover Element="h3" scale={0.2} className="itim">
          {head} .
        </CursorDimensionWhenHover>
        <div className="content">
          <CursorDimensionWhenHover
            Element="div"
            scale={0.2}
            className="pic-wrapper"
          >
            <motion.div style={{ scale: imageScale }} className="img-par">
              <img src={img} alt="" />
            </motion.div>
          </CursorDimensionWhenHover>

          <div className="project-data">
            <CursorDimensionWhenHover
              Element="div"
              scale={0.2}
              className="skills-project-par"
            >
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
            </CursorDimensionWhenHover>

            <ul>
              {list?.map((sentence, i) => {
                return (
                  <CursorDimensionWhenHover key={i} scale={1.8} Element="li">
                    {sentence}
                  </CursorDimensionWhenHover>
                );
              })}
              {/* <CursorDimensionWhenHover Element="li" scale={1.8}>
                Lorem ipsum dolor sit, amet consectetur adipisicing
                ecursorDimensionWhenHovert.
              </CursorDimensionWhenHover>
              <CursorDimensionWhenHover Element="li" scale={1.8}>
                Sed porro quas eum iusto expedita, assumenda voluptatibus.
              </CursorDimensionWhenHover>
              <CursorDimensionWhenHover Element="li" scale={1.8}>
                Temporibus excepturi magni amet veCursorDimensionWhenHovert,
                expCursorDimensionWhenHovercabo provident iusto?
              </CursorDimensionWhenHover>
              <CursorDimensionWhenHover Element="li" scale={1.8}>
                Voluptatem, reprehenderit quae! Impedit doloribus quas culpa
                quam.
              </CursorDimensionWhenHover>
              <CursorDimensionWhenHover Element="li" scale={1.8}>
                Culpa consequuntur placeat quaerat magni necessitatibus nulla
                quibusdam.
              </CursorDimensionWhenHover> */}
            </ul>
            <CursorDimensionWhenHover
              className="projects-links"
              scale={0.2}
              Element="div"
            >
              <a href={demo} target="_blank" rel="noreferrer">
                <MainBtn Icon={BiDesktop} btn="Demo" />
              </a>

              <a href={code} target="_blank" rel="noreferrer">
                <MainBtn Icon={DiGithubBadge} btn="code" />
              </a>
            </CursorDimensionWhenHover>
          </div>
        </div>
      </motion.figure>
    </div>
  );
};

export default Figure;
