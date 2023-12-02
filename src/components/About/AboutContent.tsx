import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";
import MainBtn from "../widgets/shared/MainBtn";
import { useRef } from "react";
import useLens from "../customComponents/useLens";
import clsx from "clsx";

const AboutContent = () => {
  useLens();
  const paragraph = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paragraph,
    offset: ["start .8", "start .25"],
  });
  const text = `I'm a MERN Stack developer , I am passionate about crafting robust and scalable web
  applications. With expertise in MongoDB, Express.js, React.js, and
  Node.js, I thrive in building efficient and innovative solutions. I
  have a keen eye for detail and a strong commitment to delivering
  high-quality code. My goal is to create seamless user experiences and
  optimize performance to exceed client expectations. With a drive for
  continuous learning, I stay updated with the latest industry trends
  and best practices. Let&apos;s collaborate and bring your ideas to
  life with cutting-edge technology.`;
  return (
    <div className="about-content">
      <motion.div
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
        ref={paragraph}
      >
        <CursorDimensionWhenHover scale={2} Element="p">
          {text.split(" ").map((word, i, arr) => {
            const len = arr.length;
            const start = i / len;
            const step = 1 / len;
            const end = start + step;
            return (
              <Word
                key={i}
                word={word}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </CursorDimensionWhenHover>
      </motion.div>
      <motion.div
        className="about-btns"
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
              <MainBtn btn={"contact me"} Icon={BsFillArrowRightCircleFill} />
            </CursorDimensionWhenHover>
          </Link>
        </>
      </motion.div>
    </div>
  );
};
export default AboutContent;

type Props = {
  range: number[];
  word: string;
  progress: MotionValue;
};
const Word = ({ range, word, progress }: Props) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span
      className={clsx(
        ["MERN", "Stack", "developer"].includes(word) && "itim clr"
      )}
      style={{ opacity }}
    >
      {word}
    </motion.span>
  );
};
