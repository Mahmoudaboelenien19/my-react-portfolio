import React, { useState } from "react";
import Header from "../widgets/Header";
import MyDetails from "./MyDetails";
import Form from "./Form";
import Background from "../widgets/Background";
import { motion, stagger, useAnimate } from "framer-motion";

const Contact = () => {
  const [ref, animate] = useAnimate();
  const [isANimated, setIsAnimated] = useState(false);
  return (
    <motion.div
      ref={ref}
      onViewportEnter={() => {
        if (!isANimated) {
          setIsAnimated(true);
          animate(
            " .contact-detail ",
            { opacity: [0, 1], scale: [0.8, 1], x: [-20, 0] },
            { delay: stagger(0.2), duration: 0.15 }
          )
            .then(() =>
              animate(
                "form",
                { opacity: [0, 1], x: [200, 0] },
                { duration: 0.15 }
              )
            )

            .then(() =>
              animate(
                "    .send-btn",
                { opacity: [0, 1], y: [60, 0] },
                { duration: 0.2 }
              )
            );
        }
      }}
      id="contact"
    >
      <Background text="Contact Me" />
      <Header head="ContAct Me" specialLetter={4} />
      <div className="contact-data">
        <MyDetails />
        <Form />
      </div>
    </motion.div>
  );
};

export default Contact;
