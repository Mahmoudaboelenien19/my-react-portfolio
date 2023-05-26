import React from "react";
import MainPage from "./MainPage";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Testimonials from "../reviews/Testimonials";
import Service from "../Services/Services";
import About from "../About/About";
import Bot from "../Bot/Bot";

const Home = () => {
  return (
    <>
      <MainPage />
      <Service />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Bot />
    </>
  );
};

export default Home;
