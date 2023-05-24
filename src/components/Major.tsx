import React, { useState, useEffect } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { opacityVariant, textVariant } from "../assets/MianVariants";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
const Major = () => {
  const arr = ["MERN Stack ", "Frontend ", "Backend "];
  const [num, setNum] = useState(0);

  const handleNums = (num: number) => (num > 2 ? 0 : num);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDeveloper(false);
      setNum((cur) => handleNums(cur + 1));
    }, 4800);
    return () => clearTimeout(timer);
  }, [num]);
  const [ref, animate] = useAnimate();
  const [showDeveloper, setShowDeveloper] = useState(false);

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
                () =>
                  animate(ref.current, { width: 0 }).then(() =>
                    setShowDeveloper(true)
                  )
              );
            }}
          ></motion.div>
          <motion.span
            transition={{ delay: 1.5, duration: 0.3 }}
            key={num}
            variants={opacityVariant}
            initial="start"
            animate="end"
            exit="exit"
          >
            <motion.span
              key={`plus - ${num}`}
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ delay: 2.5, duration: 0.2 }}
            >
              <BiPlusMedical />
            </motion.span>
            {arr[num]}
            {showDeveloper && (
              <div className="developer">
                <span>D</span>eveloper
              </div>
            )}
          </motion.span>
        </AnimatePresence>
      </motion.h5>
    </>
  );
};

export default Major;
