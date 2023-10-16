import React from "react";
import { motion } from "framer-motion";

import ButtonBackground from "./ButtonBackground";

interface Props {
  btn: string;
  cls?: string;
  Icon: React.ComponentType;
  type?: "button" | "submit";
  children?: React.ReactNode;
}
const MainBtn = ({ children, btn, Icon, type = "button", cls = "" }: Props) => {
  const btnVariant = {
    start: { opacity: 0, y: 200 },
    end: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial={{
        scale: 0.8,
      }}
      whileHover={{
        scaleX: 0.85,
        filter: "drop-shadow(1px .5px .5px black)",
        transition: { type: "spring", stiffness: 300 },
      }}
      className={`btn-par ${cls}`}
    >
      <ButtonBackground />

      <motion.button className={`btn `} variants={btnVariant} type={type}>
        {btn}
        {children}
        <Icon />
      </motion.button>
    </motion.div>
  );
};

export default MainBtn;
