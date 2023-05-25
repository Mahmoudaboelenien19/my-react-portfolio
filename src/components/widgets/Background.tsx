import React, { useRef } from "react";
import mainImg from "../../assets/background/main1.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
interface Props {
  type?: string;
  text: string;
  pos?: string;
}
const Background = ({ text, pos = "left", type }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "120%"]);
  return (
    <div className="main-background" ref={ref}>
      <p>{text}</p>
      {type === "home" && (
        <motion.img style={{ width, height: width }} src={mainImg} />
      )}
      {/* <div className="shape" style={{ [pos]: "2%" }}>
        <div className="div-1"></div>
        <div className="div-2"></div>
        <div className="div-3"></div>
      </div> */}
    </div>
  );
};

export default Background;
