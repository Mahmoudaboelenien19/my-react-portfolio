import React, { createContext, useContext, useState } from "react";
import About from "../About/About";
import Bot from "../Bot/Bot";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Experience";
import RotateText from "../widgets/Svgs/RotateText";
import MainPage from "./MainPage";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { colorContext } from "../context/colorContext";
import Nav from "../Nav/Nav";

export const MainAnimationContext = createContext<null | React.Dispatch<
  React.SetStateAction<boolean>
>>(null);
const Home = () => {
  const { chosenColor } = useContext(colorContext);
  const [isMainAnimationCompleted, setIsMainAnimationCompleted] =
    useState(false);
  return (
    <MainAnimationContext.Provider value={setIsMainAnimationCompleted}>
      <span className={chosenColor} id="home">
        <Nav />

        <MainPage />
        {isMainAnimationCompleted && (
          <>
            <Services />
            <Projects />
            <LazyLoadComponent>
              <About />
            </LazyLoadComponent>
            <Skills />
            <Bot />
            <RotateText />
            {/* <Testimonials /> */}
            <Contact />
          </>
        )}
      </span>
    </MainAnimationContext.Provider>
  );
};

export default Home;
