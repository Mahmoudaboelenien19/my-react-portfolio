import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import MainPage from "../Home/MainPage";
import Projects from "../Projects/Projects";
import React from "react";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="#main-page" element={<MainPage />} /> */}

      <Route path="/about" element={<About />} />
      {/* <Route path="#projects-home" element={<Projects />} /> */}
    </Routes>
  );
};

export default Router;
