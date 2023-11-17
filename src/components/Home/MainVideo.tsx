import { useContext } from "react";
import MainV from "../../assets/videos/main.mp4";
import { MotionValue, motion } from "framer-motion";
import { MainAnimationContext } from "./Home";
interface Props {
  width: MotionValue;
}
const MainVideo = ({ width }: Props) => {
  const setIsMainAnimationCompleted = useContext(MainAnimationContext);
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
        height: "45vh",
        clipPath: "ellipse(160% 160% at 50% 160%)",
        position: "relative",
        top: "initial",
        left: "initial",
        zIndex: 4,
      }}
      onAnimationComplete={() => {
        if (setIsMainAnimationCompleted) {
          setIsMainAnimationCompleted(true);
        }
      }}
      style={{ width }}
      autoPlay
      muted
      loop
      transition={{
        delay: 1.5,
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
