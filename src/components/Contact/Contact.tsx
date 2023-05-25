import React from "react";
import Header from "../widgets/Header";
import MyDetails from "./MyDetails";
import Form from "./Form";
import Background from "../widgets/Background";

const Contact = () => {
  return (
    <div id="contact">
      <Background text="Contact Me" />
      <Header head="ContAct Me" specialLetter={4} />
      <div className="contact-data">
        <MyDetails />
        <Form />
      </div>
    </div>
  );
};

export default Contact;
