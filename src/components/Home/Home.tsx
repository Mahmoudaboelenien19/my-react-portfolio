import About from "../About/About";
import Bot from "../Bot/Bot";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Journey from "../Skills/Journey";
import RotateText from "../widgets/Svgs/RotateText";
import MainPage from "../Hero/MainPage";
import Nav from "../Nav/Nav";
import Testimonials from "../reviews/Testimonials";
import { Fragment, useEffect, useState } from "react";
import Loading from "../loading/loading";
import Experience from "../experience/Experience";
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <MainPage />

          <Services />
          <Projects />

          <About />
          <Experience />
          <Journey />
          <Bot />
          <RotateText />
          {/* <Testimonials /> */}
          <Contact />
        </>
      )}
    </Fragment>
  );
};

export default Home;
