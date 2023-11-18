import MacCom from "../3D/MacCom";
import Header from "../widgets/Header";
import MainBtn from "../widgets/MainBtn";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Container from "../widgets/Container";
import { parVariant } from "@/assets/Utils/MianVariants";

const textVariant = {
  initial: { opacity: 0 },
  view: { x: [100, 0], opacity: [0, 0.3, 0.5] },
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
        viewport={{ once: true, amount: 0.2 }}
        variants={parVariant}
        initial="start"
        whileInView={"view"}
        transition={{ staggerChildren: 0.9, delay: 0.6 }}
      >
        <motion.div
          className="mac"
          variants={macVariant}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <MacCom />
        </motion.div>
        <div className="about-content">
          <motion.p
            style={{ opacity: 0 }}
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
                <MainBtn btn={"resume"} Icon={FaDownload} />
              </a>
            </div>
            <>
              <Link to="contact" smooth className="contact-link">
                <MainBtn btn={"contact me"} Icon={BsFillArrowRightCircleFill} />
              </Link>
            </>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default About;
