import { opacityVariant } from "@/assets/Utils/MainVariants";
import { motion } from "framer-motion";

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
      <div className="contact-shape">
        <div className="circle">
          {" "}
          <Icon />
        </div>
        <div className="line"></div>
      </div>
      <div className="contact-detail-data">
        <div className="contact-detail">{detail}</div>
        <div className="contact-value">{value}</div>
      </div>
    </motion.div>
  );
};

export default ContactDetail;
