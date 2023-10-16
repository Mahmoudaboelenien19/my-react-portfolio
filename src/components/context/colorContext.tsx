import React, { useEffect, createContext, useState } from "react";
import { useFavicon } from "react-usefavicon";
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
    localStorage.getItem("color-portfolio") || "grey"
  );
  const [, { jsxToFavicon }] = useFavicon();

  useEffect(() => {
    let switchColor;
    switch (chosenColor) {
      case "grey":
        switchColor = "#5c6e7d";
        break;
      case "blue":
        switchColor = "#1d546a";
        break;
      case "aqua":
        switchColor = "#359399";
        break;
      case "red":
        switchColor = "#a53737";
        break;
      case "lavender":
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
