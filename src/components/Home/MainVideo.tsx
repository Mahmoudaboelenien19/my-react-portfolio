import MainV from "@/assets/videos/main.mp4";
import { MotionValue, motion } from "framer-motion";
interface Props {
  width: MotionValue;
}
const MainVideo = ({ width }: Props) => {
  return (
    <motion.video
      initial={{
        height: "0vh",
        opacity: 0,
        clipPath: "ellipse(100% 100% at 50% 50%)",
      }}
      animate={{
        height: "45vh",
        opacity: [0, 0.5, 1],
        clipPath: "ellipse(160% 160% at 50% 160%)",
      }}
      style={{ width }}
      autoPlay
      muted
      loop
      transition={{
        delay: 3,
        height: {
          duration: 1,
        },
        clipPath: { duration: 0.2 },
        ease: "easeInOut",
      }}
    >
      <source src={MainV} type="video/mp4" />
    </motion.video>
  );
};

export default MainVideo;
