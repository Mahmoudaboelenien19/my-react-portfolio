import React, { useState, useEffect, useRef } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { textVariant } from "../../assets/Utils/MianVariants";
import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion";
const Major = () => {
  const arr = ["Frontend ", "Backend ", "MERN Stack "];
  const [num, setNum] = useState(-1);

  const handleNums = (num: number) => (num > 2 ? 0 : num);

  const [ref, animate] = useAnimate();
  const h5Ref = useRef<null | HTMLDivElement>(null);
  const inView = useInView(h5Ref);
  const MajorVariant = {
    start: { opacity: 0 },
    end: { opacity: 1, transition: { duration: 0.4, delay: 0.9 } },
    exit: { opacity: 0, transition: { duration: 0.4, delay: 0 } },
  };
  useEffect(() => {
    let timer: any;
    if (num !== -1) {
      timer = setTimeout(() => {
        setNum((cur) => handleNums(cur + 1));
      }, 4800);
    }
    return () => clearTimeout(timer);
  }, [num]);
  return (
    <motion.h5
      variants={textVariant}
      onAnimationComplete={() => {
        setTimeout(() => {
          setNum((cur) => handleNums(cur + 1));
        }, 4800);
      }}
      className="major"
      ref={h5Ref}
    >
      <motion.div
        ref={ref}
        initial={{ width: 0, left: "-20%" }}
        animate={{ width: num === -1 ? 0 : "140%" }}
        transition={{ delay: 0.8, duration: 0.6 }}
        key={`${num}-hider`}
        className="hider"
        onAnimationComplete={() => {
          animate(ref.current, { left: "initial", right: "-20%" }).then(() =>
            animate(ref.current, { width: 0 })
          );
        }}
      ></motion.div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={num}
          variants={MajorVariant}
          initial="start"
          animate="end"
          exit="exit"
        >
          <motion.span
            key={`plus - ${num}`}
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ delay: 3.5, duration: 0.2 }}
          >
            <BiPlusMedical />
          </motion.span>
          {arr[num] || "MERN Stack "}
          <div className="developer">
            <span style={{ animationDelay: num === -1 ? "3.4s" : "2.5s" }}>
              D
            </span>
            eveloper
          </div>
        </motion.span>
      </AnimatePresence>
    </motion.h5>
  );
};

export default Major;
