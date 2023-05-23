import { useTransform, useScroll } from "framer-motion";
import { MutableRefObject } from "react";

const UseBorder = (ref: MutableRefObject<HTMLSpanElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const widthSpan1 = useTransform(scrollYProgress, [0.04, 0.09], [0, 40]);
  const widthSpan2 = useTransform(scrollYProgress, [0.091, 0.15], [0, 20]);
  return [widthSpan1, widthSpan2];
};

export default UseBorder;
