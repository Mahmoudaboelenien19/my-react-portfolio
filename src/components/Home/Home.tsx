import React, { createContext, useState } from "react";
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

export const MainAnimationContext = createContext<null | React.Dispatch<
  React.SetStateAction<boolean>
>>(null);
const Home = () => {
  const [isMainAnimationCompleted, setIsMainAnimationCompleted] =
    useState(false);
  return (
    <MainAnimationContext.Provider value={setIsMainAnimationCompleted}>
      {/* <Nav /> */}
      <MainPage />
      {isMainAnimationCompleted && (
        <>
          <Service />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
          <Bot />
          <RotateText />
          <Skills />
        </>
      )}
    </MainAnimationContext.Provider>
  );
};

export default Home;
