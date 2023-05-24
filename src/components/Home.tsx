import React from "react";
import MainPage from "./MainPage";
import Projects from "./Projects";
import Contact from "./Contact/Contact";
import Testimonials from "./reviews/Testimonials";

const Home = () => {
  return (
    <>
      <MainPage />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
