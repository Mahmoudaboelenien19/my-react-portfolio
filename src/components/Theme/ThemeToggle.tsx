import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useContext(themeContext);

  return <DarkModeSwitch checked={isDark} onChange={toggleTheme} size={20} />;
};

export default ThemeToggle;
