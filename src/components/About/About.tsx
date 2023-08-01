import React, { useRef } from "react";
import MacCom from "../3D/MacCom";
import Header from "../widgets/Header";
import MainBtn from "../widgets/MainBtn";
import { FaDownload } from "react-icons/fa";

import { Link } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const About = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div id="about" ref={ref}>
      <Header head="About Me"  />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1] }}
        transition={{ delay: 0.1 }}
        className="about"
      >
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
                  // href={"/src/assets/Mahmoud Abo Elenien.pdf"}
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
      </motion.div>
    </div>
  );
};

export default About;
