import React, { createContext, useEffect, useState } from "react";

interface themeContextInterface {
  theme: string;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}
export const themeContext = createContext({} as themeContextInterface);

const ThemContext = ({ children }: Props) => {
  const localstorageTheme = localStorage.getItem("portfolio-theme");
  const [theme, setTheme] = useState(localstorageTheme || "light");

  useEffect(() => {
    if (theme == "light") {
      document.documentElement.style.setProperty(
        "--main",
        "rgb(247, 246, 246)"
      );

      document.documentElement.style.setProperty("--third", "#000");
      document.documentElement.style.setProperty("--secondary", "#f4ece6");
      document.documentElement.style.setProperty("--forth", "#F4F9FC");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      document.documentElement.style.setProperty("--forth", "#1D2226");
      document.documentElement.style.setProperty("--main", "#222222");
      document.documentElement.style.setProperty("--secondary", "#111110");
      document.documentElement.style.setProperty(
        "--third",
        "rgb(247, 246, 246)"
      );
      localStorage.setItem("portfolio-theme", "dark");
    }
  }, [theme]);
  const toggleTheme = () =>
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  return (
    <themeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemContext;
