import MacCom from "../3D/MacCom";
import Header from "../widgets/shared/Header";
import MainBtn from "../widgets/shared/MainBtn";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Container from "../widgets/shared/Container";
import { parVariant } from "@/assets/Utils/MainVariants";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";
import cv from "@/assets/pdfs/cv.pdf";

const textVariant = {
  initial: { x: 300, opacity: 0 },
  view: {
    x: [300, 0],
    opacity: [0, 0.2, 0.5, 1],
    transition: { delay: 1, duration: 0.3 },
  },
};

const btnVariant = {
  initial: { opacity: 0 },
  view: { opacity: [0, 0.4, 0.6, 1] },
};
const macVariant = {
  start: { opacity: 0 },
  view: { opacity: [0, 0.2, 0.5, 1] },
};
const About = () => {
  return (
    <Container id="about">
      <Header head="About Me" title="let me introduce myself" />
      <motion.div
        className="about"
        viewport={{ once: false, amount: 0.2 }}
        variants={parVariant}
        initial="start"
        whileInView={"view"}
        transition={{ staggerChildren: 0.9, delay: 0.6 }}
      >
        <CursorDimensionWhenHover
          scale={0.2}
          Element="div"
          className="mac"
          variants={macVariant}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <MacCom />
        </CursorDimensionWhenHover>
        <div className="about-content">
          <motion.div
            transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
            variants={textVariant}
            style={{ opacity: 0 }}
          >
            <CursorDimensionWhenHover scale={2} Element="p">
              I&apos;m a <span className="special itim clr">MERN Stack </span>
              developer , I am passionate about crafting robust and scalable web
              applications. With expertise in MongoDB, Express.js, React.js, and
              Node.js, I thrive in building efficient and innovative solutions.
              I have a keen eye for detail and a strong commitment to delivering
              high-quality code. My goal is to create seamless user experiences
              and optimize performance to exceed client expectations. With a
              drive for continuous learning, I stay updated with the latest
              industry trends and best practices. Let&apos;s collaborate and
              bring your ideas to life with cutting-edge technology.
            </CursorDimensionWhenHover>
          </motion.div>
          <motion.div
            className="about-btns"
            variants={btnVariant}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <CursorDimensionWhenHover scale={0.2} Element="div" className="cv">
              <a href={"cv.pdf"} download="MahmoudAboELenienCv.pdf">
                <MainBtn btn={"resume"} Icon={FaDownload} />
              </a>
            </CursorDimensionWhenHover>
            <>
              <Link to="contact" smooth className="contact-link">
                <CursorDimensionWhenHover scale={0.2} Element="span">
                  <MainBtn
                    btn={"contact me"}
                    Icon={BsFillArrowRightCircleFill}
                  />
                </CursorDimensionWhenHover>
              </Link>
            </>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default About;
