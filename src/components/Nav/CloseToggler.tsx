import React from "react";
import { motion } from "framer-motion";
import { parVar } from "../../assets/MianVariants";
const CloseToggler = () => {
  const closeLine = {
    start: { height: 0 },
    end: {
      height: "100%",
      transition: { type: "tween", duration: 0.2 },
    },
    exit: {
      height: 20,
    },
  };
  return (
    <motion.div
      key={"closing"}
      variants={parVar}
      initial={"start"}
      animate="end"
      exit="exit"
      className="closing-toggle"
    >
      <motion.div
        key={"closed-one"}
        variants={closeLine}
        className="closing-line line-one"
      ></motion.div>
      <motion.div
        key={"closed-two"}
        variants={closeLine}
        className="closing-line line-two"
      ></motion.div>
    </motion.div>
  );
};

export default CloseToggler;
