import "@/styles/pages/App.scss";
import ThemContext from "@/components/context/ThemeContext";
import { Toaster } from "react-hot-toast";
import AnimatedCursor from "react-animated-cursor";
import Home from "@/components/Home/Home";

const App = () => {
  return (
    <ThemContext>
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

      {/* <AnimatedCursor
        innerSize={5}
        outerSize={28}
        color="255,255,255"
        innerStyle={{
          background: "var(--main-clr)",
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
      /> */}
    </ThemContext>
  );
};

export default App;
