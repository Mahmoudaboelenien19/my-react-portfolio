import React, { useState, useRef } from "react";
import Header from "../widgets/Header";
import Service from "./Service";
import { IoLogoNodejs } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";
import { TiltDefaultOptions } from "../../assets/Objects/object.js";

const Services = () => {
  const portfolioServices = [
    {
      Icon: FaReact,
      title: "Frontend Development",
      description:
        "I excel at frontend development using TypeScript, React, SCSS, and Apollo Client. I have a deep understanding of these technologies and utilize them effectively to build dynamic and responsive user interfaces.",
      clr: " #61DAFB",
    },
    {
      Icon: IoLogoNodejs,
      title: "Backend Development",
      description:
        "With my good knowledge in MERN stack, I specialize in backend development using Apollo Server, RESTful APIs, Express, GraphQL, and JWT. I leverage these technologies to build efficient and secure server-side applications.",
      clr: " #339933",
    },
    {
      Icon: DiMongodb,
      title: "Database Management",
      description:
        "I have a good command of databases, particularly PostgreSQL and MongoDB with Mongoose. I possess the skills to design, optimize, and manage database systems, ensuring data integrity and efficient querying.",
      clr: "#4DB33D",
    },
  ];
  const [hoveredService, setHoverService] = useState(-1);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const parVar = {
    start: {},
    end: {
      transition: { when: "beforeChildren", staggerChildren: 0.4 },
    },
  };
  return (
    <div ref={ref} id="service">
      {inView && (
        <>
          <Header head="Services"  />
          <motion.div
            variants={parVar}
            initial="start"
            animate="end"
            className="services"
          >
            {portfolioServices.map((obj, i) => {
              return (
                <Tilt options={TiltDefaultOptions()} key={i}>
                  <Service
                    {...obj}
                    hoveredService={hoveredService}
                    i={i}
                    setHoverService={setHoverService}
                  />
                </Tilt>
              );
            })}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Services;
