import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useAppSelector } from "@/redux/reduxType";
const Cursor = () => {
  const { x, y } = usePosition();
  const { scale } = useAppSelector((st) => st.cursor);
  return (
    <motion.div
      className="cursor"
      animate={{
        scale,
      }}
      transition={{ duration: 0.5, ease: "backOut" }}
      style={{
        x,
        y,
        transition: ".5s  cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
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
