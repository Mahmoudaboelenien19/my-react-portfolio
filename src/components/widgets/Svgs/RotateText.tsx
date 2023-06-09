import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Scroll from "react-scroll";
import { ReactSVG } from "react-svg";
import rotateSvg from "../../../assets/Svg/RotatedText.svg";
const RotateText = () => {
  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestProgress) => {
      setScrollY(latestProgress);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);
  const scroll = Scroll.animateScroll;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 5.5, duration: 0.3 }}
      className="rotated-text-par"
      style={{
        transform: `rotate(${scrollY * 360}deg) scale(.75)`,
      }}
      onClick={() => scroll.scrollToTop({ smooth: true })}
    >
      <ReactSVG
        src={rotateSvg}
        beforeInjection={(svg) => {
          svg.classList.add("rotate-svg");
        }}
      />
    </motion.div>
  );
};

export default RotateText;
