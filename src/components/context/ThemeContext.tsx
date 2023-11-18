import { createContext, useEffect, useState } from "react";

interface themeContextInterface {
  isDark: boolean;
  toggleTheme: (checked: boolean) => void;
}

interface Props {
  children: React.ReactNode;
}
export const themeContext = createContext({} as themeContextInterface);

const ThemContext = ({ children }: Props) => {
  const localstorageTheme =
    localStorage.getItem("portfolio-theme") === "light" ? false : true;
  const [isDark, setiIDark] = useState(localstorageTheme || false);

  useEffect(() => {
    if (!isDark) {
      localStorage.setItem("portfolio-theme", "light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");

      localStorage.setItem("portfolio-theme", "dark");
    }
  }, [isDark]);
  const toggleTheme = (checked: boolean) => {
    setiIDark(checked);
  };

  return (
    <themeContext.Provider value={{ toggleTheme, isDark }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemContext;
