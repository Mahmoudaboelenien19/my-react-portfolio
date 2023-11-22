import Header from "../widgets/shared/Header";
import MyDetails from "./MyDetails";
import Form from "./Form";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import useLens from "../customComponents/useLens";
import Container from "../widgets/shared/Container";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "0px", once: false });
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  useLens();
  const height = useTransform(scrollYProgress, [0, 0.8], [15, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [-300, 0]);
  return (
    <div className="contact-wrapper" id="contact">
      <motion.div
        className="circle-container"
        ref={container}
        style={{ height }}
      >
        <div className="circle-animation" />
      </motion.div>
      <motion.div style={{ y }}>
        <Container id="">
          <Header head="Contact Me" title="how to reach me" />
          <div className="contact-data" ref={containerRef}>
            {inView && (
              <>
                <MyDetails />
                <Form />
              </>
            )}
          </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default Contact;
