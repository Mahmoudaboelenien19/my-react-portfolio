import { useContext } from "react";
import { SiGmail } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";
import { colorContext } from "./context/colorContext";
import { motion } from "framer-motion";
import MacCom from "../MacCom";
const MainPage = () => {
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
    { id: 3, icon: <SiGmail />, title: "send me an e_mail" },
    { id: 4, icon: <AiOutlineWhatsApp />, title: "send me whatApp message" },
  ];

  const { chosenColor } = useContext(colorContext);

  return (
    <section className="main-page">
      <h4>
        <small>
          Hello, I'm <span className="my-name">Mahmoud </span>
        </small>
        <span className="major"> MERN stack developer </span>
        <span className="message">
          Welcome to my portfolio where I show my projects and skills in web
          development.
        </span>
        <div className="icons">
          {iconsArr.map(({ icon, id, title }) => {
            return (
              <span
                key={id}
                style={{ color: chosenColor, fontSize: 30, marginLeft: 10 }}
                title={title}
              >
                {icon}
              </span>
            );
          })}
        </div>

        <div className="cv">
          <motion.button
            className="btn"
            style={{ background: chosenColor }}
            whileHover={{ scale: 1.1, boxShadow: "2px 2px 2px grey" }}
          >
            <span className="btn-span">download cv</span>
          </motion.button>
        </div>
      </h4>
      <MacCom />
    </section>
  );
};

export default MainPage;
