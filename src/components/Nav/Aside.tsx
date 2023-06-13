import React from "react";
import { motion } from "framer-motion";
import { linkArr } from "../../assets/Utils/Arr";
import { Link } from "react-scroll";
const Aside = () => {
  const AsideVariant = {
    start: { width: 0 },
    end: { width: "40%" },
    exit: { width: 0 },
  };
  return (
    <motion.aside
      variants={AsideVariant}
      initial="start"
      animate="end"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <div className="links">
        {linkArr.map(({ id, link }, i) => {
          return (
            <Link
              key={i}
              // spyThrottle={400}
              to={id}
              smooth
              spy
              offset={-100}
              activeClass="active"
            >
              {link}
            </Link>
          );
        })}
      </div>
    </motion.aside>
  );
};

export default Aside;
