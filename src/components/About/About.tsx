import { useRef } from "react";
import MacCom from "../3D/MacCom";
import Header from "../widgets/Header";
import MainBtn from "../widgets/MainBtn";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Container from "../widgets/Container";
const parVariant = {
  initial: {},
  view: {},
};
const textVariant = {
  initial: { opacity: 0 },
  view: { x: [100, 0], opacity: [0, 0.3, 0.7] },
};

const btnVariant = {
  initial: { opacity: 0 },
  view: { opacity: [0, 0.4, 0.6, 1] },
};
const About = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  return (
    <Container id="about">
      <Header head="About Me" title="let me introduce myself" />
      <div className="about">
        <div className="mac" ref={ref}>
          <MacCom />
        </div>
        <motion.div
          className="about-content"
          viewport={{ once: false }}
          variants={parVariant}
          initial="start"
          whileInView={"view"}
          transition={{ staggerChildren: 0.9 }}
        >
          <motion.p
            transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
            variants={textVariant}
          >
            I&apos;m a <span className="special itim clr">MERN Stack</span>{" "}
            developer , I am passionate about crafting robust and scalable web
            applications. With expertise in MongoDB, Express.js, React.js, and
            Node.js, I thrive in building efficient and innovative solutions. I
            have a keen eye for detail and a strong commitment to delivering
            high-quality code. My goal is to create seamless user experiences
            and optimize performance to exceed client expectations. With a drive
            for continuous learning, I stay updated with the latest industry
            trends and best practices. Let&apos;s collaborate and bring your
            ideas to life with cutting-edge technology.
          </motion.p>

          <motion.div
            className="about-btns"
            variants={btnVariant}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="cv">
              <a
                href={"/Mahmoud Abo Elenien.pdf"}
                download="cv.pdf"
                className="cv-link"
              >
                <MainBtn btn={"resume"} Icon={FaDownload}>
                  <></>
                </MainBtn>
              </a>
            </div>
            <>
              <Link to="contact" smooth className="contact-link">
                <MainBtn btn={"contact me"} Icon={BsFillArrowRightCircleFill}>
                  <></>
                </MainBtn>
              </Link>
            </>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default About;
