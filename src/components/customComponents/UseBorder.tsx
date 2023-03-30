import { useTransform, useScroll } from "framer-motion";
import { MutableRefObject } from "react";

const UseBorder = (ref: MutableRefObject<HTMLSpanElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const widthSpan1 = useTransform(scrollYProgress, [0.12, 0.2], [0, 40]);
  const widthSpan2 = useTransform(scrollYProgress, [0.22, 0.3], [0, 20]);
  const x = useTransform(scrollYProgress, [0.04, 0.1], [-400, 0]);
  return [widthSpan1, widthSpan2, x];
};

export default UseBorder;
