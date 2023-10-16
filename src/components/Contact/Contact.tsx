import React from "react";
import Header from "../widgets/Header";
import MyDetails from "./MyDetails";
import Form from "./Form";
import { motion } from "framer-motion";
import Container from "../widgets/Container";

const Contact = () => {
  return (
    <Container id="contact">
      <Header head="Contact Me" title="how to reach me" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1] }}
        transition={{ delay: 0.1 }}
        className="contact-data"
      >
        <MyDetails />
        <Form />
      </motion.div>
    </Container>
  );
};

export default Contact;
