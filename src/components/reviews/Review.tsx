import React from "react";

interface Props {
  img: string;
  name: string;
  review: string;
  shouldBlur: boolean;
}
const Review = ({ img, name, review, shouldBlur }: Props) => {
  return (
    <div className={`review ${!shouldBlur ? "blur" : ""}`}>
      <div className="img-par">
        <img src={img} alt="" />
      </div>
      <div className="review-content">
        <p>{review}</p>
        <div className="review-name">{name}</div>
      </div>
    </div>
  );
};

export default Review;
