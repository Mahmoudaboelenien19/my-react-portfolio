import { motion } from "framer-motion";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";

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
  return (
    <motion.div
      className={`service ${
        i !== hoveredService && hoveredService !== -1 ? "blurred-service" : ""
      }`}
      onHoverStart={() => {
        setHoverService(i);
      }}
      onHoverEnd={() => {
        setHoverService(-1);
      }}
    >
      <CursorDimensionWhenHover
        Element="div"
        scale={0.2}
        className="service-head"
        style={{ color: clr }}
      >
        <Icon />
        <h2 className="service-title itim">{title}</h2>
      </CursorDimensionWhenHover>
      <CursorDimensionWhenHover Element="p">
        {description}
      </CursorDimensionWhenHover>
    </motion.div>
  );
};

export default Service;
