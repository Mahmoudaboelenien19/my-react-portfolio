import ColorContextComponent from "./components/context/colorContext";
import Nav from "./components/Nav/Nav";
import React, { useState } from "react";
import Loading from "./components/loading";
import Home from "./components/Home/Home";
import "./styles/pages/App.scss";
import ThemContext from "./components/context/ThemeContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ThemContext>
      {isLoading ? (
        <Loading />
      ) : (
        <ColorContextComponent>
          <Nav />
          <Toaster
            position="bottom-left"
            reverseOrder={false}
            containerClassName=""
            toastOptions={{
              style: {
                background: "var(--main)",
                color: "var(--third)",
                width: "fit-content",
                padding: "10px",
                whiteSpace: "nowrap",
                fontSize: 10,
              },
            }}
          />
        </ColorContextComponent>
      )}
    </ThemContext>
  );
};

export default App;
