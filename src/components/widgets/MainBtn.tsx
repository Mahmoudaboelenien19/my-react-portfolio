import React, { useContext } from "react";
import { motion } from "framer-motion";
import { colorContext } from "../context/colorContext";

interface Props {
  btn: string;
  Icon: React.ComponentType;
  type?: "button" | "submit";
  children?: React.ReactNode;
}
const MainBtn = ({ children, btn, Icon, type = "button" }: Props) => {
  const { chosenColor } = useContext(colorContext);

  const btnVariant = {
    start: { opacity: 0, y: 200 },
    end: { opacity: 1, y: 0 },
  };

  return (
    <motion.button
      className="btn"
      style={{ background: chosenColor, marginTop: 20 }}
      variants={btnVariant}
      whileHover={{
        scale: 1.1,
        boxShadow: "1px 1px .5px grey",
        transition: { type: "spring", stiffness: 300 },
      }}
      type={type}
    >
      {btn}
      {children}
      <Icon />
    </motion.button>
  );
};

export default MainBtn;
