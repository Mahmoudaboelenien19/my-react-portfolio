import { useRef } from "react";
import { SkillInterface } from "../../assets/Utils/interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MainBtn from "../widgets/MainBtn";
import { BiDesktop } from "react-icons/bi";
import { DiGithubBadge } from "react-icons/di";
import Title from "../widgets/CustomTitle";
import { useTransform, motion, useScroll } from "framer-motion";
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
  i,
  progress,
  range,
  targetScale,
  skillsUsed,
  img,
  code,
  demo,
  head,
}: any) => {
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
                {/* <MainBtn Icon={BiDesktop} btn="Demo" /> */}
                demo
              </a>
              <a href={code} target="_blank" rel="noreferrer">
                code
                {/* <MainBtn Icon={DiGithubBadge} btn="code" /> */}
              </a>
            </div>
          </div>
        </div>
      </motion.figure>
    </div>
  );
};

export default Figure;
