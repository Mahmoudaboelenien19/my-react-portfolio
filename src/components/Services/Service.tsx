import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  Icon: React.ComponentType;
  clr: string;
  hoveredService: number;
  setHoverService: React.Dispatch<React.SetStateAction<number>>;
  i: number;
}
const Service = ({
  i,
  setHoverService,
  hoveredService,
  clr,
  Icon,
  description,
  title,
}: Props) => {
  const [isHoverStarted, setIsHoverStarted] = useState(false);
  return (
    <motion.div
      className={`service ${
        i !== hoveredService && hoveredService !== -1 ? "blurred-service" : ""
      }`}
      style={{ color: isHoverStarted ? "var(--third)" : clr, opacity: 0 }}
      onHoverStart={() => {
        setHoverService(i);
        setIsHoverStarted(true);
      }}
      onHoverEnd={() => {
        setHoverService(-1);
        setIsHoverStarted(false);
      }}
      whileInView={{ opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1] }}
    >
      <Icon />
      <h2
        style={{ color: isHoverStarted ? "var(--third)" : clr }}
        className="service-title"
      >
        {title}
      </h2>
      <p style={{ color: !isHoverStarted ? "var(--third)" : clr }}>
        {description}
      </p>
    </motion.div>
  );
};

export default Service;
