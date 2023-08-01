import React, { useState } from "react";
import Header from "../widgets/Header";
import MyDetails from "./MyDetails";
import Form from "./Form";
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
                " .send-btn",
                { opacity: [0, 1], y: [60, 0] },
                { duration: 0.2 }
              )
            );
        }
      }}
      id="contact"
    >
      <Header head="Contact Me"  />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1] }}
        transition={{ delay: 0.1 }}
        className="contact-data"
      >
        <MyDetails />
        <Form />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
