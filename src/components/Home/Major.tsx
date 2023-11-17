import { useState, useEffect } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { MajorVariant, textVariant } from "@/assets/Utils/MianVariants";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
const Major = () => {
  const arr = ["Frontend ", "Backend ", "MERN Stack "];
  const [num, setNum] = useState(-1);

  const handleNums = (num: number) => (num > 2 ? 0 : num);

  const [ref, animate] = useAnimate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setNum((cur) => handleNums(cur + 1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [num]);
  return (
    <motion.h5 variants={textVariant()} className="major">
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
            <span>D</span>
            eveloper
          </div>
        </motion.span>
      </AnimatePresence>
    </motion.h5>
  );
};

export default Major;
