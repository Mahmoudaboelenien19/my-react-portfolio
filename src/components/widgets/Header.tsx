import { motion } from "framer-motion";
import React from "react";

interface Props {
  head: string;
}
const Header = ({ head }: Props) => {
  return (
    <motion.h3 className="heading"
    initial={{ opacity: 0 }}
    whileInView={{opacity:[0,.1,0.3,0.5,0.8,1]}}
    transition={{duration:0.5}}
    viewport={{
      
      amount:"all"
    }}
    >
{head}

    </motion.h3>
  );
};

export default Header;
