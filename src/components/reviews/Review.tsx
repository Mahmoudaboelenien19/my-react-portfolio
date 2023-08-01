import React from "react";
import { motion } from "framer-motion";
interface Props {
  img: string;
  name: string;
  review: string;
  shouldBlur: boolean;
}
const Review = ({ img, name, review, shouldBlur }: Props) => {
  return (
    <motion.div
      className={`review ${!shouldBlur ? "blur" : ""}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1] }}
      transition={{ delay: 0.1 }}
    >
      <div className="img-par">
        <img src={img} alt="" />
      </div>
      <div className="review-content">
        <p>{review}</p>
        <div className="review-name">{name}</div>
      </div>
    </motion.div>
  );
};

export default Review;
