import React, { useRef } from "react";
import { motion } from "framer-motion";
import UseBorder from "./customComponents/UseBorder";
import { useScroll, useTransform } from "framer-motion";
import Header from "./widgets/Header";
import Background from "./widgets/Background";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null!);
  const [width1, width2] = UseBorder(sectionRef);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const Y_BigFigure = useTransform(scrollYProgress, [0.15, 0.2], [200, 0]);
  const opacity_BigFigure = useTransform(scrollYProgress, [0.15, 0.2], [0, 1]);

  const y_btn = useTransform(scrollYProgress, [0.65, 0.75], [200, 0]);

  const X_smallFigure1 = useTransform(scrollYProgress, [0.4, 0.45], [-200, 0]);
  const X_smallFigure2 = useTransform(scrollYProgress, [0.4, 0.45], [200, 0]);

  return (
    <section id="projects-home" ref={sectionRef}>
      <Background text={"PORTFOLIO"} pos={"right"} />
      <Header specialLetter={0} head="Portfolio" />
      <section className="projects-section">
        <motion.figure
          className="projects-fig"
          style={{ opacity: opacity_BigFigure, y: Y_BigFigure }}
        >
          <span className="hint">
            <small>typscript</small>
            <small>+</small>
            <small>Scss</small>
          </span>
        </motion.figure>

        <section className="small-fig-parent">
          <motion.figure
            style={{ x: X_smallFigure1 }}
            className="projects-fig small "
          >
            <span className="hint">
              <small>javaSCRIPT</small>
              <small>+</small>
              <small>postgresql</small>
            </span>
          </motion.figure>
          <motion.figure
            style={{ x: X_smallFigure2 }}
            className="projects-fig small"
          >
            <span className="hint">
              <small>mern app</small>
              <small>+</small>
              <small>graphql</small>
            </span>
          </motion.figure>
        </section>
        <div style={{ width: "100%", display: "flex" }}>
          <motion.button
            style={{
              y: y_btn,
              background: "var(--scroll)",
              margin: "20px auto",
              alignSelf: "center",
            }}
            className="btn"
          >
            see more projects
          </motion.button>
        </div>
      </section>
    </section>
  );
};

export default Projects;
