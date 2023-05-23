import ColorContextComponent from "./components/context/colorContext";
import Nav from "./components/Nav";
import React, { useState } from "react";
import Loading from "./components/loading";
import Home from "./components/Home";
import "./App.scss";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ColorContextComponent>
          <Nav />
        </ColorContextComponent>
      )}
    </>
  );
};

export default App;
