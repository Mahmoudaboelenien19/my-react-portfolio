import { motion, useAnimationControls } from "framer-motion";
import { Fragment, useState } from "react";
import { StringDecoder } from "string_decoder";

type Props = {
  letter: string;
};

const HoverAnimation = ({ letter }: Props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const controls = useAnimationControls();
  const hoverFn = () =>
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
    });
  return (
    <motion.span
      className="splited-word"
      animate={controls}
      onHoverStart={() => {
        if (!isCompleted) {
          setIsCompleted(true);
          hoverFn();
        }
      }}
      onAnimationComplete={() => setIsCompleted(false)}
    >
      {letter}
    </motion.span>
  );
};

export default HoverAnimation;
