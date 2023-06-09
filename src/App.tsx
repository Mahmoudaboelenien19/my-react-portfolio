import ColorContextComponent from "./components/context/colorContext";
import Nav from "./components/Nav/Nav";
import React, { useEffect, useState } from "react";
import Loading from "./components/loading/loading";
import "./styles/pages/App.scss";
import ThemContext from "./components/context/ThemeContext";
import { Toaster } from "react-hot-toast";
import AnimatedCursor from "react-animated-cursor";
import Home from "./components/Home/Home";
import useIsMobile from "./components/customComponents/useIsMobile";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile } = useIsMobile();
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
            <Home />
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

        {!isMobile && (
          <AnimatedCursor
            innerSize={5}
            outerSize={28}
            color="255,255,255"
            innerStyle={{
              background: "var(--scroll)",
            }}
            outerStyle={{
              background: "white",
              mixBlendMode: "exclusion",
            }}
            outerAlpha={0}
            innerScale={0.7}
            outerScale={1.4}
            clickables={[
              "a",
              "input",
              "textarea",
              "button",
              ".links a",
              "p",
              ".icon-parent",
              "h1",
              "h2",
              "h3",
              "h5",

              ".skill-icon",
            ]}
          />
        )}
      </ThemContext>
    </ColorContextComponent>
  );
};

export default App;
