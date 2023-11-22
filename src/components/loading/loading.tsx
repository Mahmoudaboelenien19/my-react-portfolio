import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ar = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallo"];
const Loading = () => {
  const [index, setindex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (index < ar.length - 1) {
          setindex((cur) => cur + 1);
        }
      },
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="loading-container">
      <motion.div
        className="loading"
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{
          ease: [0.76, 0, 0.24, 1],
          y: {
            duration: 0.7,
            delay: 2,
          },
        }}
      >
        <motion.div
          initial={{ height: 15 }}
          animate={{ height: 0 }}
          transition={{
            ease: [0.76, 0, 0.24, 1],
            duration: 0.65,
            delay: 2.1,
          }}
          className="curve"
        />
        <p className="itim">{ar[index]}</p>
      </motion.div>
    </div>
  );
};

export default Loading;
