import React, { useContext, useRef } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";
import { colorContext } from "../context/colorContext";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import devImg from "../../assets/developer-pic-1.png";
import { FaDownload } from "react-icons/fa";
import { fontVariant, textVariant } from "../../assets/MianVariants";
import Major from "./Major";
import Background from "../widgets/Background";
import MainBtn from "../widgets/MainBtn";
import GmailSvg from "../widgets/GmailSvg";
import MainVideo from "./MainVideo";

const MainPage = () => {
  const { chosenColor } = useContext(colorContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "140%"]);
  const iconsArr = [
    {
      id: 1,
      icon: <GrLinkedinOption />,
      link: "https://www.linkedin.com/in/mahmoud-abo-elenien19/",
      title: "go to my linkedin",
    },
    {
      id: 2,
      icon: <AiFillGithub />,
      link: "https://github.com/Mahmoudaboelenien19",
      title: "go to my github",
    },
    {
      id: 3,
      icon: <GmailSvg />,
      title: "send me an e_mail",
    },
    { id: 4, icon: <AiOutlineWhatsApp />, title: "send me whatApp message" },
  ];

  const mainPageVariant = {
    start: { overflow: "hidden" },
    end: { transition: { delayChildren: 1.1, staggerChildren: 0.3 } },
  };

  const imageVariant = {
    start: {
      x: -400,
      opacity: 0,
    },
    end: {
      x: 0,
      opacity: 1,
    },
  };

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
        delay: 4.8,
        duration: 1,
        when: "beforeChildren",
        delayChildren: 1,
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section id="main-page" ref={ref}>
      {/* <Background text={"web Developer"} /> */}
      {/* <motion.img
        className="main-img"
        src={devImg}
        variants={imageVariant}
        initial="start"
        animate="end"
        transition={{ duration: 0.3 }}
      /> */}

      <motion.div
        layout
        variants={ContentPar}
        initial="start"
        animate="end"
        className="home-content"
      >
        <h2 className="myname-head">
          {Array.from("Hello I'm MaHmoud", (letter, i) => {
            if (letter === " ") {
              return <span key={i}> &nbsp;</span>;
            } else {
              return (
                <motion.div
                  variants={fontVariant}
                  style={{ color: i >= 10 ? chosenColor : "" }}
                  className={`${i >= 10 ? "my-name" : ""} ${
                    i === 12 ? "H-animate" : ""
                  }`}
                  key={i}
                  custom={{ i, delay: 0.1 }}
                >
                  {letter}
                </motion.div>
              );
            }
          })}
        </h2>
        <Major />
        <motion.p variants={textVariant} className="message">
          Welcome to my portfolio where I show my projects and skills in web
          development.
        </motion.p>

        <div className="icons">
          {iconsArr.map(({ icon, id, title }) => {
            return (
              <motion.span
                variants={opacityVariant}
                className="icon-parent"
                key={id}
                style={{ color: chosenColor, fontSize: 30, marginLeft: 10 }}
                title={title}
                transition={{ duration: 0.1 }}
              >
                {icon}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
      <MainVideo width={width} />
    </section>
  );
};

export default MainPage;
