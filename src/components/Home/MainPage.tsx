import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { textVariant } from "@/assets/Utils/MianVariants";
import Major from "./Major";
import MainVideo from "./MainVideo";
import Icons from "./Icons";

const MainPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "140%"]);

  const opacityVariant = {
    start: { opacity: 0, x: [10, 0], y: 30 },
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
          Hello I&apos;m <span> Mahmoud. </span>
        </motion.h2>
        {/* <Major /> */}
        <motion.p variants={textVariant(0.6)} className="message">
          Welcome to my portfolio where I show my projects and skills in web
          development.
        </motion.p>
        <Icons />
      </motion.div>
      {/* <MainVideo width={width} /> */}
    </section>
  );
};

export default MainPage;
