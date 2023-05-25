import React, { useState, useRef } from "react";
import Header from "../widgets/Header";
import Background from "../widgets/Background";
import Service from "./Service";
import { IoLogoNodejs } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";

const Services = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
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
        "With my expertise in MERN stack, I specialize in backend development using Apollo Server, RESTful APIs, Express, GraphQL, and JWT. I leverage these technologies to build efficient and secure server-side applications.",
      clr: " #339933",
    },
    {
      Icon: DiMongodb,
      title: "Database Management",
      description:
        "I have a strong command of databases, particularly PostgreSQL and MongoDB with Mongoose. I possess the skills to design, optimize, and manage database systems, ensuring data integrity and efficient querying.",
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
          <Background text="WHAT I OFFER" />
          <Header head="SERVICES" specialLetter={1} />
          <motion.div
            variants={parVar}
            initial="start"
            animate="end"
            className="services"
          >
            {portfolioServices.map((obj, i) => {
              return (
                <Tilt options={defaultOptions} key={i}>
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
