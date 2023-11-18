import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  title: string;
  dir?: string;
  abs?: boolean;
  children: React.ReactNode;
}
const Title = ({ title, dir, children, abs }: Props) => {
  const variant = {
    start: { opacity: 0, y: 10 },
    end: { opacity: [0.2, 0.5, 1], y: 0, transition: { duration: 0.1 } },
    exit: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.1 },
    },
  };
  const [showTitle, setShowTitle] = useState(false);
  const show = () => setShowTitle(true);
  const hide = () => setShowTitle(false);
  return (
    <motion.span
      className={`title-par ${abs ? "" : "relative"}`}
      onHoverStart={show}
      onHoverEnd={hide}
      onTapStart={hide}
    >
      {children}
      <AnimatePresence mode="wait">
        {showTitle && title !== "" && (
          <motion.div
            variants={variant}
            key={title}
            initial="start"
            exit={"exit"}
            animate="end"
            className={` custom-title ${dir === "left" ? "left" : "right"}`}
          >
            {" "}
            {title}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.span>
  );
};

export default Title;
