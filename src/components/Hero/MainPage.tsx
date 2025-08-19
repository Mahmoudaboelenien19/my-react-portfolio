import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { textVariant } from "@/assets/Utils/MainVariants";
import MainVideo from "./MainVideo";
import Icons from "./Icons";
import HoverAnimation from "../widgets/animation/HoverAnimation";
import useLens from "../customComponents/useLens";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";
import useIsMobile from "../customComponents/useIsMobile";
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
  const { isMidScreen } = useIsMobile();
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
          <CursorDimensionWhenHover
            Element="span"
            className="first"
            scale={0.2}
          >
            {"Mahmoud".split("").map((letter, index) => {
              return <HoverAnimation key={index} letter={letter} />;
            })}
          </CursorDimensionWhenHover>
          <span className="clr"> .</span>
        </motion.h2>

        <motion.p variants={textVariant(0.7)} className="message">
          <CursorDimensionWhenHover
            className="my-major"
            scale={0.2}
            Element="span"
          >
            MERN stack developer &nbsp;
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: "90%" }}
              transition={{ delay: 2.5, duration: 0.3 }}
              viewport={{ once: true }}
              className="bg"
            />
          </CursorDimensionWhenHover>
          <CursorDimensionWhenHover Element="span">
            proficient in creating user-friendly web applications with a focus
            on efficiency and seamless experiences.
          </CursorDimensionWhenHover>
        </motion.p>

        <Icons />
      </motion.div>
      {!isMidScreen && <MainVideo width={width} />}
    </section>
  );
};

export default MainPage;
