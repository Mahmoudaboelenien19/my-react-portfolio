import React from "react";
import Header from "../widgets/Header";
import MyDetails from "./MyDetails";
import Form from "./Form";
import Background from "../widgets/Background";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

const Contact = () => {
  const [ref, animate] = useAnimate();
  const inView = useInView(ref);
  return (
    <span ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        onAnimationComplete={() => {
          animate(
            "#contact , .contact-detail , .inp-par .placeholder , input ,textarea",
            { opacity: [0, 1], scale: [0.8, 1] },
            { delay: stagger(0.06), duration: 0.05 }
          );
        }}
        id="contact"
      >
        <Background text="Contact Me" />
        <Header head="ContAct Me" specialLetter={4} />
        {inView && (
          <div className="contact-data">
            <MyDetails />
            <Form />
          </div>
        )}
      </motion.div>
    </span>
  );
};

export default Contact;
