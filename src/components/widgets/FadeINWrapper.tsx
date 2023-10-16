import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  ind: number;
  delay?: number;
};
const FadeINWrapper = ({ children, className, ind, delay }: Props) => {
  return (
    <motion.div
      style={{
        opacity: 0,
      }}
      whileInView={{ opacity: [0, 0.5, 1] }}
      transition={{ delay: delay || 0.1 * ind }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeINWrapper;
