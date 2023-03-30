import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import MainPage from "./MainPage";
import Projects from "./Projects";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="#main-page" element={<MainPage />} />

      <Route path="/about" element={<About />} />
      <Route path="#projects-home" element={<Projects />} />
    </Routes>
  );
};

export default Router;
