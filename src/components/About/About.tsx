import MacCom from "../3D/MacCom";
import Header from "../widgets/shared/Header";
import Container from "../widgets/shared/Container";
import { parVariant } from "@/assets/Utils/MainVariants";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";
import AboutContent from "./AboutContent";
import { motion } from "framer-motion";

const macVariant = {
  start: { opacity: 0 },
  view: { opacity: [0, 0.2, 0.5, 1] },
};
const About = () => (
  <Container id="about">
    <Header head="About Me" title="let me introduce myself" />
    <motion.div
      className="about"
      viewport={{ once: false, amount: 0.2 }}
      variants={parVariant}
      initial="start"
      whileInView={"view"}
      transition={{ staggerChildren: 0.9, delay: 0.6 }}
    >
      <CursorDimensionWhenHover
        scale={0.2}
        Element="div"
        className="mac"
        variants={macVariant}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <MacCom />
      </CursorDimensionWhenHover>
      <AboutContent />
    </motion.div>
  </Container>
);

export default About;
