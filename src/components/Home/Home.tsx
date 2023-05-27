import React from "react";
import MainPage from "./MainPage";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Testimonials from "../reviews/Testimonials";
import Service from "../Services/Services";
import About from "../About/About";
import Bot from "../Bot/Bot";
import Nav from "../Nav/Nav";
import RotateText from "../widgets/RotateText";
import Skills from "../Skills/Experience";

const Home = () => {
  return (
    <>
      {/* <Nav /> */}
      <MainPage />
      <Service />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Bot />
      <RotateText />
      <Skills />
    </>
  );
};

export default Home;
