import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { textVariant } from "@/assets/Utils/MianVariants";
import Major from "./Major";
import MainVideo from "./MainVideo";
import { iconsArr } from "@/assets/Utils/Arr.js";
import Title from "@/components/widgets/CustomTitle";

const MainPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "140%"]);

  const opacityVariant = {
    start: { opacity: 0, x: 100, y: 30 },
    end: { opacity: 1, x: 0, y: 0 },
  };

  const ContentPar = {
    start: { height: 0 },
    end: {
      height: "50vh",
      marginTop: 20,
      transition: {
        duration: 0.4,
        delay: 1.8,
        when: "beforeChildren",
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <section id="main-page" ref={ref}>
      <motion.div
        variants={ContentPar}
        initial="start"
        animate="end"
        className="home-content"
      >
        <motion.h2 className="myname-head my-name" variants={opacityVariant}>
          Hello I'm <span> Mahmoud. </span>
        </motion.h2>
        <Major />
        <motion.p variants={textVariant(0.6)} className="message">
          Welcome to my portfolio where I show my projects and skills in web
          development.
        </motion.p>

        <div className="icons">
          {iconsArr.map(({ Icon, id, title, link }) => {
            return (
              <Title key={id} title={title}>
                <motion.a
                  variants={opacityVariant}
                  className="icon-parent"
                  style={{ fontSize: 30, color: "var(--scroll)" }}
                  transition={{ duration: 0.1 }}
                  href={link}
                  target="blank"
                >
                  <Icon />
                </motion.a>
              </Title>
            );
          })}
        </div>
      </motion.div>
      <MainVideo width={width} />
    </section>
  );
};

export default MainPage;
