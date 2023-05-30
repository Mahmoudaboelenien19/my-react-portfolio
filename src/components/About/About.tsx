import React from "react";
import MacCom from "../3D/MacCom";
import Header from "../widgets/Header";
import Background from "../widgets/Background";
import MainBtn from "../widgets/MainBtn";
import { FaDownload } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import { Link } from "react-scroll";

const About = () => {
  return (
    <div id="about">
      <Header head="ABout Me" specialLetter={1} />
      <Background text="About Me" />
      <div className="about">
        <div className="mac">
          <MacCom />
        </div>
        <div className="about-content">
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
                  href={"/src/assets/cv.pdf"}
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
                Icon={MdOutlineArrowRightAlt}
              >
                <Link to="contact" smooth className="contact-link">
                  <div className="transparent-btn"></div>
                </Link>
              </MainBtn>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
