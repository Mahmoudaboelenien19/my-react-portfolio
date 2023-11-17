import { useEffect, useRef } from "react";
import Header from "../widgets/Header";
import { projects } from "../../assets/Utils/Arr";
import Figure from "./Figure";
import Container from "../widgets/Container";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

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
