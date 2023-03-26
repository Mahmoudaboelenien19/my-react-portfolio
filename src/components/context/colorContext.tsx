import { useEffect, createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface colorInterface {
  chosenColor: string;
  setChosenColor: React.Dispatch<React.SetStateAction<string>>;
}

export const colorContext = createContext({} as colorInterface);

const ColorContextComponent = ({ children }: Props) => {
  const [chosenColor, setChosenColor] = useState("var(--grey)");

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--scroll", chosenColor);
  }, [chosenColor]);

  return (
    <colorContext.Provider value={{ chosenColor, setChosenColor }}>
      {children}
    </colorContext.Provider>
  );
};

export default ColorContextComponent;
