import { BrowserRouter, NavLink } from "react-router-dom";
import { RiPaletteFill } from "react-icons/ri";
import Router from "./routes";
import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ColorPicker from "../Theme/ColorPicker";
import { colorContext } from "../context/colorContext";
import { Link } from "react-scroll";
import Logo from "../widgets/Logo";
import ThemeToggle from "../Theme/ThemeToggle";
import NavToggler from "./NavToggler";
import useMeasure from "react-use-measure";
import LinksComponent from "./Links";
import { motion } from "framer-motion";
const Nav = () => {
  const { chosenColor } = useContext(colorContext);
  const [ref, { width }] = useMeasure();
  const [ShowMenu, setShowMenu] = useState(false);

  const AsideMobile = {
    start: { width: 0 },
    end: {
      width: "40%",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      width: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.15,
        staggerDirection: -1,
      },
    },
  };

  return (
    <BrowserRouter>
      <nav ref={ref}>
        <div className="logo">
          <Link to="main-page" smooth spy>
            <Logo clr={chosenColor} />
          </Link>
        </div>
        <span className="theme-par">
          <AnimatePresence initial={false}>
            {!(width <= 600) ? (
              <>
                <LinksComponent />
              </>
            ) : (
              <AnimatePresence mode="wait">
                {ShowMenu && (
                  <motion.aside
                    key="aside-mobile"
                    variants={AsideMobile}
                    initial="start"
                    animate="end"
                    exit="exit"
                  >
                    <LinksComponent width={width} />
                  </motion.aside>
                )}
              </AnimatePresence>
            )}
          </AnimatePresence>
          <span
            className="theme-par"
            style={{
              justifyContent: "space-between",
              height: "100%",
              width: 60,
              alignItems: "center",
            }}
          >
            <ThemeToggle />

            {width <= 600 && (
              <NavToggler ShowMenu={ShowMenu} setShowMenu={setShowMenu} />
            )}
          </span>
        </span>
      </nav>

      <Router />
    </BrowserRouter>
  );
};

export default Nav;
