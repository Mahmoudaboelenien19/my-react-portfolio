import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import React, { useContext, useState } from "react";
import { AnimatePresence, stagger, useAnimate } from "framer-motion";
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
  const [scope, animate] = useAnimate();
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
      <motion.span ref={scope}>
        <motion.nav
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 4.2 }}
          onAnimationComplete={() => {
            animate(
              "nav , a , .theme-par div",
              { x: [5, 0], opacity: [0, 1], scale: [0.8, 1] },
              { delay: stagger(0.18), duration: 0.18 }
            );
          }}
        >
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
        </motion.nav>
      </motion.span>

      <Router />
    </BrowserRouter>
  );
};

export default Nav;
