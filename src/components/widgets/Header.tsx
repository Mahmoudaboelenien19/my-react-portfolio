import { motion } from "framer-motion";
import React from "react";

interface Props {
  head: string;
  title: string;
}
const Header = ({ head, title }: Props) => {
  return (
    <motion.h3
      className="heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
      }}
    >
      <motion.span
        whileInView={{ y: [20, 0], opacity: [0, 0.5, 1] }}
        transition={{ delay: 0.2 }}
        className="title"
        viewport={{
          once: true,
        }}
      >
        {title}
      </motion.span>
      {head}
    </motion.h3>
  );
};

export default Header;
