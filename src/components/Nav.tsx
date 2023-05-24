import { BrowserRouter, NavLink } from "react-router-dom";
import { RiPaletteFill } from "react-icons/ri";
import Router from "./routes";
import React, { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ColorPicker from "./Theme/ColorPicker";
import { colorContext } from "./context/colorContext";
import { Link } from "react-scroll";
import Logo from "./widgets/Logo";
import ThemeToggle from "./Theme/ThemeToggle";

const Nav = () => {
  const [showClrPicker, setShowClrPicker] = useState(false);
  const { chosenColor } = useContext(colorContext);
  return (
    <BrowserRouter>
      <nav>
        <div className="logo">
          <Logo clr={chosenColor} />
        </div>

        <div className="links">
          <NavLink to="/">home</NavLink>
          <Link smooth to="projects-home">
            portfolio
          </Link>
          <Link smooth to="contact">
            contact
          </Link>
          <NavLink to={"/about"}>about</NavLink>
          <div className="clr-icon-parent">
            <RiPaletteFill
              title="pick a color"
              color="var(--third)"
              style={{ marginLeft: 10 }}
              onClick={() => setShowClrPicker(!showClrPicker)}
            />
            <AnimatePresence mode="wait">
              {showClrPicker && (
                <ColorPicker setShowClrPicker={setShowClrPicker} />
              )}
            </AnimatePresence>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <Router />
    </BrowserRouter>
  );
};

export default Nav;
