import React, { createContext, useState } from "react";
import MainPage from "./MainPage";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Testimonials from "../reviews/Testimonials";
import Service from "../Services/Services";
import About from "../About/About";
import Bot from "../Bot/Bot";
import RotateText from "../widgets/Svgs/RotateText";
import Skills from "../Skills/Experience";
import { LazyLoadComponent } from "react-lazy-load-image-component";
export const MainAnimationContext = createContext<null | React.Dispatch<
  React.SetStateAction<boolean>
>>(null);
const Home = () => {
  const [isMainAnimationCompleted, setIsMainAnimationCompleted] =
    useState(false);
  return (
    <MainAnimationContext.Provider value={setIsMainAnimationCompleted}>
      <MainPage />
      {isMainAnimationCompleted && (
        <>
          <Service />
          <LazyLoadComponent>
            <About />
          </LazyLoadComponent>
          <Skills />
          <Projects />
          <Bot />
          <RotateText />
          {/* <Testimonials /> */}
          <Contact />
        </>
      )}
    </MainAnimationContext.Provider>
  );
};

export default Home;
