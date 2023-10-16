import React, { useRef } from "react";
import MacCom from "../3D/MacCom";
import Header from "../widgets/Header";
import MainBtn from "../widgets/MainBtn";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Container from "../widgets/Container";

const About = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <Container id="about">
      <Header head="About Me" title="let me introduce myself" />
      <div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: [0, 0.5, 1] }}
        // transition={{ delay: 0.1 }}
        className="about"
      >
        <div className="mac" ref={ref}>
          {inView && <MacCom />}
        </div>
        <motion.div
          className="about-content"
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <p>
            I&apos;m a <span className="special">MERN stack</span> developer , I
            am passionate about crafting robust and scalable web applications.
            With expertise in MongoDB, Express.js, React.js, and Node.js, I
            thrive in building efficient and innovative solutions. I have a keen
            eye for detail and a strong commitment to delivering high-quality
            code. My goal is to create seamless user experiences and optimize
            performance to exceed client expectations. With a drive for
            continuous learning, I stay updated with the latest industry trends
            and best practices. Let's collaborate and bring your ideas to life
            with cutting-edge technology.
          </p>

          <div className="about-btns">
            <div className="cv">
              <MainBtn btn={""} Icon={FaDownload}>
                <a
                  href={"/Mahmoud Abo Elenien.pdf"}
                  download="cv.pdf"
                  className="cv-link"
                >
                  Resume
                </a>
              </MainBtn>
            </div>
            <>
              <MainBtn
                cls={"contact-btn"}
                btn={"contact me"}
                Icon={BsFillArrowRightCircleFill}
              >
                <Link to="contact" smooth className="contact-link">
                  <div className="transparent-btn"></div>
                </Link>
              </MainBtn>
            </>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default About;
