import About from "../About/About";
import Bot from "../Bot/Bot";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Experience";
import RotateText from "../widgets/Svgs/RotateText";
import MainPage from "./MainPage";
import Nav from "../Nav/Nav";
import Testimonials from "../reviews/Testimonials";
import { Suspense } from "react";
import Loading from "../loading/loading";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Nav />
      <MainPage />
      <Services />
      <Projects />

      <About />

      <Skills />
      <Bot />
      <RotateText />
      {/* <Testimonials /> */}
      <Contact />
    </Suspense>
  );
};

export default Home;

// {/* {isMainAnimationCompleted && ( */}
// // )}
