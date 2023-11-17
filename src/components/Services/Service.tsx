import { useState } from "react";
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
      style={{ color: isHoverStarted ? "var(--third)" : clr }}
      onHoverStart={() => {
        setHoverService(i);
        setIsHoverStarted(true);
      }}
      onHoverEnd={() => {
        setHoverService(-1);
        setIsHoverStarted(false);
      }}
    >
      <Icon />
      <h2
        style={{ color: isHoverStarted ? "var(--third)" : clr }}
        className="service-title itim"
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
