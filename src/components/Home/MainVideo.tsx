import React from "react";
import MainV from "../../assets/videos/main.mp4";
import { MotionValue, motion } from "framer-motion";
interface Props {
  width: MotionValue;
}
const MainVideo = ({ width }: Props) => {
  return (
    <motion.video
      initial={{
        height: "100vh",
        clipPath: "ellipse(100% 100% at 50% 50%)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
      }}
      animate={{
        height: "50vh",
        clipPath: "ellipse(160% 160% at 50% 160%)",
        position: "relative",
        top: "initial",
        left: "initial",
        zIndex: 4,
      }}
      style={{ width }}
      autoPlay
      muted
      loop
      transition={{
        delay: 4,
        type: "tween",
        height: { duration: 1 },
        clipPath: { duration: 0.4 },
      }}
    >
      <source src={MainV} type="video/mp4" />
    </motion.video>
  );
};

export default MainVideo;
