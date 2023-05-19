import React, { useRef } from "react";
import { motion } from "framer-motion";
import UseBorder from "./customComponents/UseBorder";
import { useScroll, useTransform } from "framer-motion";
import ProjectHint from "./widgets/projectHint";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null!);
  const [width1, width2, x] = UseBorder(sectionRef);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const Y_BigFigure = useTransform(scrollYProgress, [0.2, 0.3], [600, 0]);
  const opacity_BigFigure = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.4],
    [0, 0.6, 1]
  );

  const y_btn = useTransform(scrollYProgress, [0.8, 1], [400, 0]);

  const X_smallFigure1 = useTransform(scrollYProgress, [0.4, 0.6], [-600, 0]);
  const X_smallFigure2 = useTransform(scrollYProgress, [0.4, 0.6], [600, 0]);

  return (
    <section id="projects-home" ref={sectionRef}>
      <motion.h3 className="heading" style={{ x }}>
        <span>projects</span>
        <motion.span
          style={{ width: width1 }}
          className="border-one"
        ></motion.span>
        <motion.span
          style={{ width: width2 }}
          className="border-two"
        ></motion.span>
      </motion.h3>

      <section className="projects-section">
        <motion.figure
          className="projects-fig"
          style={{ opacity: opacity_BigFigure, y: Y_BigFigure }}
        >
          <span className="hint">
            <small>Mern App</small>
          </span>
        </motion.figure>

        <section className="small-fig-parent">
          <motion.figure
            style={{ x: X_smallFigure1 }}
            className="projects-fig small "
          >
            <ProjectHint top="javascript" bottom="css" />
            {/* <span className="hint">
              <small>Mern App</small>
            </span> */}
          </motion.figure>
          <motion.figure
            style={{ x: X_smallFigure2 }}
            className="projects-fig small"
          >
            <span className="hint">
              <small>Mern App</small>
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
