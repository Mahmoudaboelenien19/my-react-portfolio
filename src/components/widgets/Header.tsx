import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { opacityVariant } from "../../assets/Utils/MianVariants.js";

interface Props {
  head: string;
  specialLetter: number;
}
const Header = ({ head, specialLetter }: Props) => {
  const ref = useRef<null | HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, amount: "all" });
  return (
    <motion.h3 className="heading" ref={ref}>
      <span className="heading-span">
        {Array.from(head, (letter, i) => {
          if (letter === " ") {
            return <span key={i}> &nbsp;</span>;
          } else {
            return (
              <motion.div
                variants={opacityVariant}
                initial="start"
                transition={{ delay: 0.1, duration: 0.3 }}
                animate={inView ? "end" : ""}
                key={i}
                className={i === 0 && inView ? "heading-animate" : ""}
              >
                {letter}
              </motion.div>
            );
          }
        })}
      </span>
      <>
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: inView ? 40 : 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="border-one custom-border"
        ></motion.span>
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: inView ? 20 : 0 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          className="border-two custom-border"
        ></motion.span>
      </>
    </motion.h3>
  );
};

export default Header;
