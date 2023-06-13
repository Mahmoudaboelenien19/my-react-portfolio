import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { colorContext } from "../context/colorContext";
import { Link } from "react-scroll";
import Logo from "../widgets/Svgs/Logo";
import ThemeToggle from "../Theme/ThemeToggle";
import NavToggler from "./NavToggler";
import useMeasure from "react-use-measure";
import LinksComponent from "./Links";
import { motion } from "framer-motion";
import { opacityVariant } from "../../assets/Utils/MianVariants";
import Title from "../widgets/CustomTitle";
import { themeContext } from "../context/ThemeContext";

const Nav = () => {
  const { chosenColor } = useContext(colorContext);
  const [ref, { width }] = useMeasure();
  const [ShowMenu, setShowMenu] = useState(false);
  const { theme } = useContext(themeContext);
  const AsideMobile = {
    start: { width: 0 },
    end: {
      width: width >= 600 ? "40%" : "100%",
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
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true);
    }, 4200);
  });
  const parVar = {
    start: {},
    end: {
      transition: { when: "beforeChildren", staggerChildren: 0.4 },
    },
  };
  return (
    <>
      {showNav && (
        <motion.nav
          variants={parVar}
          initial="start"
          animate="end"
          ref={ref}
          transition={{ when: "beforeChildren", staggerChildren: 0.8 }}
        >
          <motion.div variants={opacityVariant} className="logo">
            <Link to="main-page" smooth spy>
              <Logo clr={chosenColor} />
            </Link>
          </motion.div>
          <span className="theme-par">
            <AnimatePresence>
              {!(width <= 850) ? (
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
                alignItems: "center",
              }}
            >
              <Title
                title={
                  theme === "light" ? "apply dark mode" : "apply light mode"
                }
              >
                <ThemeToggle />
              </Title>

              {width <= 850 && (
                <NavToggler ShowMenu={ShowMenu} setShowMenu={setShowMenu} />
              )}
            </span>
          </span>
        </motion.nav>
      )}
    </>
  );
};

export default Nav;
