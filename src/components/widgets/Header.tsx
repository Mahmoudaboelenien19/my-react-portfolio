import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { fontVariant } from "../../assets/MianVariants";

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
                variants={fontVariant}
                initial="start"
                animate="end"
                custom={{ bool: inView, i }}
                key={i}
                className={
                  i === specialLetter && inView ? "heading-animate" : ""
                }
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
          transition={{ delay: 1.4, duration: 0.2 }}
          className="border-one custom-border"
        ></motion.span>
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: inView ? 20 : 0 }}
          transition={{ delay: 1.8, duration: 0.2 }}
          className="border-two custom-border"
        ></motion.span>
      </>
    </motion.h3>
  );
};

export default Header;
