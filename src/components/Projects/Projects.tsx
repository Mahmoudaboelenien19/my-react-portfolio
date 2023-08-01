import React from "react";
import Header from "../widgets/Header";
import { projects } from "../../assets/Utils/Arr";
import Figure from "./Figure";

const Projects = () => {

  return (
    <section id="projects-home" >
      <Header head="Portfolio" />

      <section className="fig-parent">
        {projects.map((ob, i) => {
          return <Figure key={i} {...ob} i={i} />;
        })}
      </section>
    </section>
  );
};

export default Projects;
