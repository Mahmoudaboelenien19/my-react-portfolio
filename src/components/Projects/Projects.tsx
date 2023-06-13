import React, { useRef } from "react";
import { motion } from "framer-motion";
import UseBorder from "../customComponents/UseBorder";
import { useScroll, useTransform } from "framer-motion";
import Header from "../widgets/Header";
import Background from "../widgets/Background";
import ProjectHint from "./ProjectHint";
import { projects } from "../../assets/Utils/Arr";
import Figure from "./Figure";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null!);
  // const [width1, width2] = UseBorder(sectionRef);

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end end"],
  // });

  // const Y_BigFigure = useTransform(scrollYProgress, [0.15, 0.2], [200, 0]);
  // const opacity_BigFigure = useTransform(scrollYProgress, [0.15, 0.2], [0, 1]);

  // const y_btn = useTransform(scrollYProgress, [0.65, 0.75], [200, 0]);

  // const X_smallFigure1 = useTransform(scrollYProgress, [0.4, 0.45], [-200, 0]);
  // const X_smallFigure2 = useTransform(scrollYProgress, [0.4, 0.45], [200, 0]);

  return (
    <section id="projects-home" ref={sectionRef}>
      <Background text={"PORTFOLIO"} />
      <Header specialLetter={0} head="Portfolio" />

      <section className="fig-parent">
        {projects.map((ob, i) => {
          return <Figure key={i} {...ob} i={i} />;
        })}
      </section>
    </section>
  );
};

export default Projects;
