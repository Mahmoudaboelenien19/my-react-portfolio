import { useContext } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";
import { colorContext } from "./context/colorContext";
import { motion } from "framer-motion";
import devImg from "./../assets/developer-pic-1.png";
import { FaDownload } from "react-icons/fa";
const MainPage = () => {
  const { chosenColor } = useContext(colorContext);

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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path
            fill={chosenColor}
            d="M 4.5 3 C 2.5788117 3 1 4.5788117 1 6.5 L 1 18 C 1 19.64497 2.3550302 21 4 21 L 8 21 L 8 13.673828 L 12 16.798828 L 16 13.673828 L 16 21 L 20 21 C 21.64497 21 23 19.64497 23 18 L 23 6.5 C 23 4.5788117 21.421188 3 19.5 3 C 18.750123 3 17.982547 3.2422598 17.34375 3.7421875 L 12 7.9121094 L 6.65625 3.7421875 L 6.6542969 3.7421875 C 6.0158061 3.2430811 5.2492693 3 4.5 3 z M 4.5 5 C 4.8301235 5 5.1426247 5.098287 5.4238281 5.3183594 L 6 5.7675781 L 6 9.5742188 L 3 7.2324219 L 3 6.5 C 3 5.6591883 3.6591883 5 4.5 5 z M 19.5 5 C 20.340812 5 21 5.6591883 21 6.5 L 21 7.2324219 L 18 9.5742188 L 18 5.7675781 L 18.576172 5.3183594 C 18.857375 5.0982871 19.169877 5 19.5 5 z M 8 7.328125 L 12 10.449219 L 16 7.328125 L 16 11.136719 L 12 14.261719 L 8 11.136719 L 8 7.328125 z M 3 9.7695312 L 6 12.111328 L 6 19 L 4 19 C 3.4349698 19 3 18.56503 3 18 L 3 9.7695312 z M 21 9.7695312 L 21 18 C 21 18.56503 20.56503 19 20 19 L 18 19 L 18 12.111328 L 21 9.7695312 z"
          />
        </svg>
      ),
      title: "send me an e_mail",
    },
    { id: 4, icon: <AiOutlineWhatsApp />, title: "send me whatApp message" },
  ];

  const mainPageVariant = {
    start: { overflow: "hidden" },
    end: { transition: { staggerChildren: 0.3 } },
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

  const textVariant = {
    start: { opacity: 0, x: 400 },
    end: { opacity: 1, x: 0 },
  };

  const opacityVariant = {
    start: { opacity: 0, x: 100 },
    end: { opacity: 1, x: 0 },
  };

  const btnVariant = {
    start: { opacity: 0, y: 200 },
    end: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="main-page"
      variants={mainPageVariant}
      initial="start"
      animate="end"
    >
      <motion.img className="main-img" src={devImg} variants={imageVariant} />

      <div className="home-content">
        <motion.h2 variants={textVariant}>
          Hello , I'm
          <motion.span variants={opacityVariant} style={{ color: chosenColor }}>
            {" "}
            Mahmoud
          </motion.span>
        </motion.h2>

        <motion.span variants={textVariant} className="major">
          {" "}
          MERN stack developer{" "}
        </motion.span>
        <motion.span variants={textVariant} className="message">
          Welcome to my portfolio where I show my projects and skills in web
          development.
        </motion.span>

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

        <div className="cv">
          <motion.button
            className="btn"
            style={{ background: chosenColor, marginTop: 20 }}
            variants={btnVariant}
            whileHover={{
              scale: 1.1,
              boxShadow: "1px 1px .5px grey",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <span className="btn-span">
              <motion.a href={"/src/assets/cv.pdf"} download="cv.pdf">
                Resume
                <FaDownload style={{ marginLeft: 4 }} />
              </motion.a>
            </span>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default MainPage;
