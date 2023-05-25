import React from "react";
import MainPage from "./MainPage";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Testimonials from "../reviews/Testimonials";
import Service from "../Services/Services";

const Home = () => {
  return (
    <>
      <MainPage />
      <Service />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
