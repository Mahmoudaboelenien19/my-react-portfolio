import ColorContextComponent from "./components/context/colorContext";
import Nav from "./components/Nav/Nav";
import React, { useEffect, useState } from "react";
import Loading from "./components/loading/loading";
import Home from "./components/Home/Home";
import "./styles/pages/App.scss";
import ThemContext from "./components/context/ThemeContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <ColorContextComponent>
      <ThemContext>
        {isLoading ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </ThemContext>
    </ColorContextComponent>
  );
};

export default App;
