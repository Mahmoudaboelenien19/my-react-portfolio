import React, { useState } from "react";
import Header from "../widgets/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import image1 from "../../assets/reviews/1.jpg";
import image2 from "../../assets/reviews/2.jpg";
import image3 from "../../assets/reviews/3.jpg";
import image4 from "../../assets/reviews/4.jpg";
import image5 from "../../assets/reviews/5.jpg";

import "swiper/css";
import "swiper/css/pagination";
import Review from "./Review";
import Background from "../widgets/Background";

const arr = [
  {
    review:
      "Working with this person was an absolute pleasure! I highly recommend them.",
    name: "John Doe",
    img: image1,
  },
  {
    review:
      "I'm incredibly impressed with the skills and professionalism of this individual. I wouldn't hesitate to work with them again.",
    name: "Jane Smith",
    img: image2,
  },
  {
    review:
      "It was a delight to collaborate with this person. They have exceptional creativity and problem-solving abilities",
    name: "David Johnson",
    img: image3,
  },
  {
    review:
      "I can't speak highly enough about this individual. They are not only talented but also reliable and efficient.",
    name: "Sarah Wilson",
    img: image4,
  },
  {
    review:
      "Their expertise and dedication are evident in every aspect of their work.",
    name: "Michael Thompson",
    img: image5,
  },
];
const Testimonials = () => {
  const [ind, setInd] = useState(0);
  return (
    <div id="testimonials">
      <Header head="Reviews" specialLetter={0} />
      <Background text="REVIEWS" />
      <Swiper
        loop
        spaceBetween={10}
        slidesPerView={1.7}
        direction="vertical"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="swiper-par"
        onSlideChange={(e: any) => {
          setInd(e.realIndex);
        }}
      >
        {arr.map((obj, i) => {
          return (
            <SwiperSlide key={i}>
              <Review shouldBlur={ind === i} {...obj} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
