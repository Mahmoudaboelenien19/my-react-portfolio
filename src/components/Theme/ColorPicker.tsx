import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { colorContext } from "../context/colorContext";

const ColorPicker = ({
  setShowClrPicker,
}: {
  setShowClrPicker: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const clrs = ["grey", "blue", "aqua", "red", "lavender"];

  const { chosenColor, setChosenColor } = useContext(colorContext);
  const [dossAnimationEnds, setDossAnimationEnds] = useState(false);

  const pickerVariant = {
    start: { opacity: 0 },
    end: {
      opacity: [0, 0.2, 0.4, 0.7, 1],
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
  };

  const opacityVariant = {
    start: { opacity: 0 },
    end: { opacity: 0.6 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      className="color-picker"
      variants={pickerVariant}
      initial="start"
      animate="end"
      exit="exit"
      onAnimationStart={() => setDossAnimationEnds(false)}
      onAnimationEnd={() => setDossAnimationEnds(true)}
    >
      {clrs.map((clr, i) => {
        return (
          <motion.span
            className={`${
              chosenColor === clr && dossAnimationEnds ? "active" : ""
            } clr-option`}
            key={i}
            style={{ background: `var(--${clr})` }}
            onClick={() => {
              setShowClrPicker(false);
              setChosenColor(clr);
            }}
            variants={opacityVariant}
          ></motion.span>
        );
      })}
    </motion.div>
  );
};

export default ColorPicker;
