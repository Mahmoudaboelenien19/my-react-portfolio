import { motion } from "framer-motion";
import React from "react";
const Loading = () => {
  const opaciyVariant = {
    start: { opacity: 0, y: 40 },
    end: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.6, duration: 0.4 },
    },
  };
  return (
    <div className="loading">
      <motion.svg
        // style={{ }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, filter: " drop-shadow(1px 0.4px .2px gray)" }}
        transition={{ duration: 0.2 }}
        width="116"
        height="45"
        viewBox="0 0 116 45"
      >
        <motion.path
          d="M9.64 44C8.64 44 7.18 44 5.26 44C3.38 44 2.1 43.86 1.42 43.58C0.74 43.3 0.4 42.86 0.4 42.26V4.4C0.4 3.48 1.62 2.76 4.06 2.24C6.54 1.68 9.18 1.4 11.98 1.4C14.78 1.4 16.78 1.76 17.98 2.48C19.18 3.2 19.88 3.96 20.08 4.76L24.16 20.6H24.7L28.54 5.48C28.82 4.4 30.12 3.46 32.44 2.66C34.8 1.82 37.38 1.4 40.18 1.4C42.98 1.4 45.04 1.62 46.36 2.06C47.72 2.5 48.4 3.06 48.4 3.74V42.26C48.4 42.78 47.26 43.2 44.98 43.52C42.7 43.84 39.92 44 36.64 44C33.36 44 31.72 43.42 31.72 42.26C31.72 39.1 32.06 33.48 32.74 25.4H32.2L29.08 41.06C28.96 41.66 28.46 42.1 27.58 42.38C26.74 42.66 25.46 42.8 23.74 42.8C22.02 42.8 20.96 42.68 20.56 42.44C20.2 42.2 19.96 41.74 19.84 41.06L16.6 25.4H16.06C16.78 33.64 17.14 39.26 17.14 42.26C17.14 43.3 14.64 43.88 9.64 44Z"
          initial={{
            pathLength: 0,
            fill: "white",
            stroke: "url(#paint0_linear_1_3)",
            pathOffset: 0.1,
          }}
          animate={{
            pathLength: 1,
            fill: "url(#paint0_linear_1_3)",
            pathOffset: 0,
          }}
          transition={{
            pathLength: { duration: 1 },
            fill: { delay: 1 },
          }}
        />
        <motion.path
          d="M75.573 42.56C75.573 43 74.353 43.36 71.913 43.64C69.473 43.88 67.033 44 64.593 44C62.153 44 60.573 43.9 59.853 43.7C59.173 43.46 58.833 43.08 58.833 42.56V16.64H52.713C52.033 16.64 51.693 15.18 51.693 12.26C51.693 9.34 52.033 6.7 52.713 4.34C52.913 3.58 55.033 2.88 59.073 2.24C63.113 1.6 66.213 1.28 68.373 1.28C70.533 1.28 71.973 1.36 72.693 1.52C73.413 1.68 73.953 1.88 74.313 2.12C74.673 2.32 74.953 2.56 75.153 2.84C75.433 3.28 75.573 3.7 75.573 4.1V42.56ZM90.2805 28.88C86.8405 28.88 84.2205 27.64 82.4205 25.16C80.6605 22.64 79.7805 19.34 79.7805 15.26C79.7805 11.82 80.9005 8.68 83.1405 5.84C84.3405 4.28 86.1205 3.04 88.4805 2.12C90.8405 1.16 93.6405 0.679996 96.8805 0.679996C103.24 0.679996 108 2.32 111.16 5.6C114.32 8.88 115.9 14.5 115.9 22.46C115.9 30.42 114.42 36.1 111.46 39.5C108.5 42.86 103.92 44.54 97.7205 44.54C93.4005 44.54 89.7205 44.28 86.6805 43.76C83.6405 43.2 82.1205 42.5 82.1205 41.66C82.1205 40.66 82.5005 38.86 83.2605 36.26C84.0605 33.66 84.7805 32.36 85.4205 32.36C85.6205 32.36 86.2205 32.44 87.2205 32.6C90.1405 33 92.6605 33.2 94.7805 33.2C96.9405 33.2 98.3405 32.64 98.9805 31.52C99.6205 30.36 99.9405 28.84 99.9405 26.96C99.3805 27.4 98.1405 27.84 96.2205 28.28C94.3405 28.68 92.3605 28.88 90.2805 28.88ZM97.8405 21.44C99.0005 21.44 99.5805 19.4 99.5805 15.32C99.5805 11.2 99.0005 9.14 97.8405 9.14C96.6005 9.14 95.9805 11.2 95.9805 15.32C95.9805 19.4 96.6005 21.44 97.8405 21.44Z"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            strokeWidth: 0.4,
          }}
          transition={{
            delay: 1.3,
            duration: 1,
          }}
          fill="var(--svg)"
          stroke={"black"}
          // strokeOpacity=".2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_3"
            x1="61.5"
            y1="-14"
            x2="61.5"
            y2="49"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.325581" stopColor="var(--scroll)" />
            <stop offset="0.976744" stopColor="#010E00" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.span
        variants={opaciyVariant}
        initial="start"
        animate="end"
        className="loading-content"
      >
        It&apos;s Mahmoud Abo Elenien&apos;s Portfolio.
      </motion.span>
    </div>
  );
};

export default Loading;
