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

  const linkArr = [
    { link: "home", id: "main-page" },
    { link: "portfolio", id: "projects-home" },
    { link: "contact", id: "contact" },
    { link: "reviews", id: "testimonials" },
  ];

  return (
    <BrowserRouter>
      <nav>
        <div className="logo">
          <Link to="main-page" smooth spy>
            <Logo clr={chosenColor} />
          </Link>
        </div>

        <div className="links">
          {linkArr.map(({ id, link }, i) => {
            return (
              <Link
                key={i}
                // spyThrottle={400}
                to={id}
                smooth
                spy
                offset={-100}
                activeClass="active"
              >
                {link}
              </Link>
            );
          })}

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
