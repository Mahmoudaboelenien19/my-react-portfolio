import { useState } from "react";
import Header from "../widgets/shared/Header";
import Service from "./Service";
import { IoLogoNodejs } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
//@ts-ignore
import { Tilt } from "react-tilt";
import Container from "../widgets/shared/Container";
import FadeINWrapper from "../widgets/animation/FadeINWrapper";
import { TiltDefaultOptions } from "@/assets/Objects/object";

const portfolioServices = [
  {
    Icon: FaReact,
    title: "Frontend Development",
    description:
      "I excel at frontend development using React, TypeScript,  SCSS, and Tailwindt. I have a deep understanding of these technologies and utilize them effectively to build dynamic and responsive user interfaces.",
    clr: " #61DAFB",
  },
  {
    Icon: IoLogoNodejs,
    title: "Backend Development",
    description:
      "With my good knowledge in MERN stack, I specialize in backend development using  RESTful APIs, Express, GraphQL, and JWT. I leverage these technologies to build efficient and secure server-side applications.",
    clr: " #339933",
  },
  {
    Icon: DiMongodb,
    title: "Database Management",
    description:
      "I have a good command of databases, particularly PostgreSQL and MongoDB with Mongoose. I possess the skills to design and manage database systems, ensuring data integrity and efficient querying.",
    clr: "#4DB33D",
  },
];
const parVar = {
  start: {},
  end: {
    transition: { when: "beforeChildren", staggerChildren: 0.4 },
  },
};
const Services = () => {
  const [hoveredService, setHoverService] = useState(-1);

  return (
    <Container id="service">
      <>
        <Header head="Services" title="what I can Do" />
        <motion.div
          variants={parVar}
          initial="start"
          animate="end"
          className="services"
        >
          {portfolioServices.map((obj, i) => {
            return (
              <Tilt options={TiltDefaultOptions()} key={i}>
                <FadeINWrapper ind={i}>
                  <Service
                    {...obj}
                    hoveredService={hoveredService}
                    i={i}
                    setHoverService={setHoverService}
                  />
                </FadeINWrapper>
              </Tilt>
            );
          })}
        </motion.div>
      </>
    </Container>
  );
};

export default Services;
