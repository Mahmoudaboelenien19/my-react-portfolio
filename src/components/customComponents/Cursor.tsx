import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
const Cursor = () => {
  const { x, y } = usePosition();
  return (
    <motion.div
      className="cursor"
      style={{
        x,
        y,
        transition: ".5s  cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
      //   transition={{ ease: "backOut" }}
    />
  );
};

export default Cursor;

const usePosition = () => {
  //i use motionValues not states not to re-render for every state change
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const positionFn = (e: MouseEvent) => {
    // setPosition({ x: e.clientX, y: e.clientY });
    x.set(e.clientX - 15);
    y.set(e.clientY - 15);
  };

  useEffect(() => {
    window.addEventListener("mousemove", positionFn);
    return () => {
      window.removeEventListener("mousemove", positionFn);
    };
  }, []);
  return { x, y };
};
