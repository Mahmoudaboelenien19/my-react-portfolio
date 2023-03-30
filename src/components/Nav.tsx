import { BrowserRouter, NavLink } from "react-router-dom";
import { RiPaletteFill } from "react-icons/ri";
import Router from "./routes";
import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ColorPicker from "./ColorPicker";
import { colorContext } from "./context/colorContext";
const Nav = () => {
  const [showClrPicker, setShowClrPicker] = useState(false);
  const { chosenColor } = useContext(colorContext);

  return (
    <BrowserRouter>
      <nav>
        <div className="logo">
          <svg
            width="78"
            height="30"
            viewBox="0 0 78 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.76 29C6.09333 29 5.12 29 3.84 29C2.58667 29 1.73333 28.9067 1.28 28.72C0.826667 28.5333 0.6 28.24 0.6 27.84V2.6C0.6 1.98667 1.41333 1.50667 3.04 1.16C4.69333 0.786665 6.45333 0.599998 8.32 0.599998C10.1867 0.599998 11.52 0.839999 12.32 1.32C13.12 1.8 13.5867 2.30667 13.72 2.84L16.44 13.4H16.8L19.36 3.32C19.5467 2.6 20.4133 1.97333 21.96 1.44C23.5333 0.879999 25.2533 0.599998 27.12 0.599998C28.9867 0.599998 30.36 0.746665 31.24 1.04C32.1467 1.33333 32.6 1.70667 32.6 2.16V27.84C32.6 28.1867 31.84 28.4667 30.32 28.68C28.8 28.8933 26.9467 29 24.76 29C22.5733 29 21.48 28.6133 21.48 27.84C21.48 25.7333 21.7067 21.9867 22.16 16.6H21.8L19.72 27.04C19.64 27.44 19.3067 27.7333 18.72 27.92C18.16 28.1067 17.3067 28.2 16.16 28.2C15.0133 28.2 14.3067 28.12 14.04 27.96C13.8 27.8 13.64 27.4933 13.56 27.04L11.4 16.6H11.04C11.52 22.0933 11.76 25.84 11.76 27.84C11.76 28.5333 10.0933 28.92 6.76 29Z"
              fill="url(#paint0_linear_1_3)"
              strokeWidth={0.1}
              stroke="white"
            />
            <path
              d="M50.7153 28.04C50.7153 28.3333 49.902 28.5733 48.2753 28.76C46.6486 28.92 45.022 29 43.3953 29C41.7686 29 40.7153 28.9333 40.2353 28.8C39.782 28.64 39.5553 28.3867 39.5553 28.04V10.76H35.4753C35.022 10.76 34.7953 9.78667 34.7953 7.84C34.7953 5.89333 35.022 4.13333 35.4753 2.56C35.6086 2.05333 37.022 1.58667 39.7153 1.16C42.4086 0.733332 44.4753 0.52 45.9153 0.52C47.3553 0.52 48.3153 0.573333 48.7953 0.68C49.2753 0.786665 49.6353 0.919998 49.8753 1.08C50.1153 1.21333 50.302 1.37333 50.4353 1.56C50.622 1.85333 50.7153 2.13333 50.7153 2.4V28.04ZM60.5203 18.92C58.227 18.92 56.4803 18.0933 55.2803 16.44C54.107 14.76 53.5203 12.56 53.5203 9.84C53.5203 7.54667 54.267 5.45333 55.7603 3.56C56.5603 2.52 57.747 1.69333 59.3203 1.08C60.8936 0.439998 62.7603 0.119998 64.9203 0.119998C69.1603 0.119998 72.3336 1.21333 74.4403 3.4C76.547 5.58667 77.6003 9.33333 77.6003 14.64C77.6003 19.9467 76.6136 23.7333 74.6403 26C72.667 28.24 69.6136 29.36 65.4803 29.36C62.6003 29.36 60.147 29.1867 58.1203 28.84C56.0936 28.4667 55.0803 28 55.0803 27.44C55.0803 26.7733 55.3336 25.5733 55.8403 23.84C56.3736 22.1067 56.8536 21.24 57.2803 21.24C57.4136 21.24 57.8136 21.2933 58.4803 21.4C60.427 21.6667 62.107 21.8 63.5203 21.8C64.9603 21.8 65.8936 21.4267 66.3203 20.68C66.747 19.9067 66.9603 18.8933 66.9603 17.64C66.587 17.9333 65.7603 18.2267 64.4803 18.52C63.227 18.7867 61.907 18.92 60.5203 18.92ZM65.5603 13.96C66.3336 13.96 66.7203 12.6 66.7203 9.88C66.7203 7.13333 66.3336 5.76 65.5603 5.76C64.7336 5.76 64.3203 7.13333 64.3203 9.88C64.3203 12.6 64.7336 13.96 65.5603 13.96Z"
              fill="var(--svg)"
              strokeWidth={0.1}
              stroke="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_3"
                x1="41.5"
                y1="-10"
                x2="41.5"
                y2="35"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.325581" stopColor={chosenColor} />
                <stop offset="0.976744" stopColor="#010E00" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="links">
          <NavLink to={"/"}>home</NavLink>
          <NavLink to={"/about"}>about</NavLink>
          <NavLink to={"/about"}>about</NavLink>
          <NavLink to={"/about"}>about</NavLink>
          <div className="clr-icon-parent">
            <RiPaletteFill
              title="pick a color"
              color="var(--main)"
              style={{ marginLeft: 10 }}
              onClick={() => setShowClrPicker(!showClrPicker)}
            />
            <AnimatePresence mode="wait">
              {showClrPicker && (
                <ColorPicker setShowClrPicker={setShowClrPicker} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <Router />
    </BrowserRouter>
  );
};

export default Nav;
