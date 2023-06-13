import React from "react";
import MacCom from "../3D/MacCom";
import Header from "../widgets/Header";
import Background from "../widgets/Background";
import MainBtn from "../widgets/MainBtn";
import { FaDownload } from "react-icons/fa";

import { Link } from "react-scroll";
import { motion, useAnimate, useInView } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const About = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });
  return (
    <div id="about" ref={scope}>
      <Header head="ABout Me" specialLetter={1} />
      <Background text="About Me" />
      <div className="about">
        <div className="mac">{inView && <MacCom />}</div>
        <motion.div
          className="about-content"
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <p>
            I&apos;m a Full Stack MERN Developer with a background in Electrical
            Engineering. I specialize in both front-end and back-end
            development, creating intuitive user interfaces and designing
            efficient server-side architectures. Explore my portfolio to see
            examples of my work.
          </p>

          <div className="about-btns">
            <div className="cv">
              <MainBtn btn={""} Icon={FaDownload}>
                <a
                  href={"/src/assets/Mahmoud Abo Elenien.pdf"}
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
    </div>
  );
};

export default About;
