import { opacityVariant } from "@/assets/Utils/MainVariants";
import { motion } from "framer-motion";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";

interface Props {
  Icon: React.ComponentType;
  detail: string;
  value: string;
  i: number;
}
const ContactDetail = ({ Icon, detail, value, i }: Props) => {
  return (
    <motion.div
      className="contact-detail"
      variants={opacityVariant}
      initial="start"
      animate="end"
      transition={{ delay: 0.2 + 0.1 * i }}
    >
      <CursorDimensionWhenHover
        scale={0.2}
        Element="div"
        className="contact-shape"
      >
        <div className="circle">
          {" "}
          <Icon />
        </div>
        <div className="line"></div>
      </CursorDimensionWhenHover>
      <div className="contact-detail-data">
        <CursorDimensionWhenHover
          scale={0.2}
          Element="div"
          className="contact-detail"
        >
          {detail}
        </CursorDimensionWhenHover>
        <CursorDimensionWhenHover Element="div" className="contact-value">
          {value}
        </CursorDimensionWhenHover>
      </div>
    </motion.div>
  );
};

export default ContactDetail;
