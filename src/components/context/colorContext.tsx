import React, {
  useEffect,
  createContext,
  useState,
  ReactSVGElement,
} from "react";
import { ReactSVG } from "react-svg";
import { useFavicon } from "react-usefavicon";
import svg from "../../assets/Svg/icon.svg";
import MyFavIcon from "../widgets/Svgs/FavIcon";
interface Props {
  children: React.ReactNode;
}

interface colorInterface {
  chosenColor: string;
  setChosenColor: React.Dispatch<React.SetStateAction<string>>;
}

export const colorContext = createContext({} as colorInterface);

const ColorContextComponent = ({ children }: Props) => {
  const [chosenColor, setChosenColor] = useState(
    localStorage.getItem("color-portfolio") || "var(--grey)"
  );
  const [, { jsxToFavicon }] = useFavicon();

  // const svg = useMyFavIcon(chosenColor);
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--scroll", chosenColor);
    let switchColor;
    switch (chosenColor) {
      case "var(--grey)":
        switchColor = "#5c6e7d";
        break;
      case "var(--blue)":
        switchColor = "#1d546a";
        break;
      case "var(--aqua)":
        switchColor = "#359399";
        break;
      case "var(--red)":
        switchColor = "#a53737";
        break;
      case "var(--lavender)":
        switchColor = "rgb(69, 69, 147)";
        break;
      default:
        switchColor = "#5c6e7d";
    }

    jsxToFavicon(MyFavIcon(switchColor) as React.ReactSVGElement);
  }, [chosenColor]);

  useEffect(() => {
    localStorage.setItem("color-portfolio", chosenColor);
  }, [chosenColor]);
  return (
    <colorContext.Provider value={{ chosenColor, setChosenColor }}>
      {children}
    </colorContext.Provider>
  );
};

export default ColorContextComponent;
