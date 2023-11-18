import Header from "../widgets/Header";
import MyDetails from "./MyDetails";
import Form from "./Form";
import Container from "../widgets/Container";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "0px", once: false });
  return (
    <Container id="contact">
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
  );
};

export default Contact;
