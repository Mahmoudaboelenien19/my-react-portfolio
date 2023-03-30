import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { colorContext } from "./context/colorContext";

const ColorPicker = ({
  setShowClrPicker,
}: {
  setShowClrPicker: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const clrs = [
    "var(--grey)",
    "var(--blue)",
    "var(--aqua)",
    "var(--red)",
    "var(--lavender)",
  ];

  const { chosenColor, setChosenColor } = useContext(colorContext);
  const [dossAnimationEnds, setDossAnimationEnds] = useState(false);

  const pickerVariant = {
    start: { y: -300 },
    end: {
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: -300,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
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
            style={{ background: clr }}
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
