import { useRef } from "react";
import Header from "../widgets/shared/Header";
import Figure from "./Figure";
import Container from "../widgets/shared/Container";
import { useScroll } from "framer-motion";
import useLens from "../customComponents/useLens";
import { projects } from "@/assets/Utils/Arr";

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end end"],
  });

  useLens();

  return (
    <Container id="projects-home">
      <Header head="Portfolio" title="some of my recent works" />
      <section className="fig-parent" ref={projectsRef}>
        {projects.map((ob, i) => {
          const targetScale = 1 - 5 * 0.05;

          return (
            <Figure
              key={i}
              progress={scrollYProgress}
              range={[i * 0.2, 1 + i * 0.1]}
              targetScale={targetScale}
              i={i}
              {...ob}
            />
          );
        })}
      </section>
    </Container>
  );
};

export default Projects;
