import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { textVariant } from "@/assets/Utils/MainVariants";
import MainVideo from "./MainVideo";
import Icons from "./Icons";
import HoverAnimation from "../widgets/animation/HoverAnimation";
import useLens from "../customComponents/useLens";
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
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
};
const MainPage = () => {
  useLens();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "140%"]);

  return (
    <section id="main-page" ref={ref}>
      <motion.div
        variants={ContentPar}
        initial="start"
        animate="end"
        className="home-content"
      >
        <motion.h2
          className="myname-head itim greeting"
          variants={opacityVariant}
        >
          Hi , I&apos;m{" "}
          <span className="first">
            {"Mahmoud".split("").map((letter, index) => {
              return <HoverAnimation key={index} letter={letter} />;
            })}
          </span>
          <span className="clr"> .</span>
        </motion.h2>

        <motion.p variants={textVariant(0.7)} className="message">
          <span className="my-major">
            MERN stack developer
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: "90%" }}
              transition={{ delay: 2.5, duration: 0.3 }}
              viewport={{ once: true }}
              className="bg"
            />
          </span>{" "}
          proficient in creating user-friendly web applications with a focus on
          efficiency and seamless experiences.{" "}
        </motion.p>
        <Icons />
      </motion.div>
      <MainVideo width={width} />
    </section>
  );
};

export default MainPage;
