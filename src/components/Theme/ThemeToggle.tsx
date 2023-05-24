import React, { useContext, useEffect } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { themeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(themeContext);
  const [ref, animate] = useAnimate();
  useEffect(() => {
    console.log("userr");
    animate(
      ".theme-toggle",
      {
        width: "50%",
        right: theme === "dark" ? 0 : "initial",
        left: theme === "light" ? 0 : "initial",
        background: theme === "dark" ? "#111" : "#fff",
      },
      { duration: 0.3 }
    );
  }, []);
  return (
    <div
      className="theme-toggle-par"
      ref={ref}
      style={{
        background:
          theme === "light" ? "rgba(0,0,0,.6)" : "rgba(255,255,255,.6)",
      }}
      onClick={() => {
        toggleTheme();
        animate(".theme-toggle", { width: "100%" }, { duration: 0.3 })
          .then(() => {
            animate(
              ".theme-toggle",
              { background: theme === "light" ? "#111" : "#fff" },
              { delay: 0.6, duration: 0.3 }
            );
          })
          .then(() =>
            animate(".theme-toggle", {
              right: theme === "light" ? 0 : "initial",
              left: theme === "dark" ? 0 : "initial",
            })
          )
          .then(() => {
            animate(".theme-toggle", { width: "50%" }, { duration: 0.3 });
          });
      }}
    >
      <motion.div
        className="theme-toggle"
        style={
          {
            //   right: theme === "light" ? 0 : "initial",
            //   left: theme === "dark" ? 0 : "initial",
            //   width: "50%",
            //   background: theme === "dark" ? "#111" : "#fff",
          }
        }
      ></motion.div>
    </div>
  );
};

export default ThemeToggle;
