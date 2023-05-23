import React, { useState, useEffect } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { textVariant } from "../assets/MianVariants";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
const Major = () => {
  const arr = ["MERN Stack ", "Frontend ", "Backend "];
  const [num, setNum] = useState(0);

  const handleNums = (num: number) => (num > 2 ? 0 : num);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNum((cur) => handleNums(cur + 1));
    }, 4000);
    return () => clearTimeout(timer);
  }, [num]);
  const [ref, animate] = useAnimate();
  return (
    <>
      <motion.h5 variants={textVariant} className="major">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            ref={ref}
            initial={{ width: 0, left: "-20%" }}
            animate={{ width: "140%" }}
            transition={{ duration: 0.6 }}
            key={`${num}-hider`}
            className="hider"
            onAnimationComplete={() => {
              animate(ref.current, { left: "initial", right: "-20%" }).then(
                () => animate(ref.current, { width: 0 })
              );
            }}
          ></motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.3 }}
            key={num}
          >
            <BiPlusMedical key={`plus - ${num}`} />
            {arr[num]}{" "}
            <div className="developer">
              <span>D</span>eveloper
            </div>
          </motion.span>
        </AnimatePresence>
      </motion.h5>
    </>
  );
};

export default Major;
