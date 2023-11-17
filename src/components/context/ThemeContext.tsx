import { createContext, useEffect, useState } from "react";

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
      localStorage.setItem("portfolio-theme", "light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");

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
