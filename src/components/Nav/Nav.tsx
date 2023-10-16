import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { colorContext } from "../context/colorContext";
import { Link } from "react-scroll";
import Logo from "../widgets/Svgs/Logo";
import ThemeToggle from "../Theme/ThemeToggle";
import NavToggler from "./NavToggler";
import LinksComponent from "./Links";
import { motion } from "framer-motion";
import { opacityVariant } from "../../assets/Utils/MianVariants";
import Title from "../widgets/CustomTitle";
import { themeContext } from "../context/ThemeContext";
import useIsMobile from "../customComponents/useIsMobile";

const Nav = () => {
  const { isMobile, isMidScreen } = useIsMobile();
  const { chosenColor } = useContext(colorContext);
  const [ShowMenu, setShowMenu] = useState(false);
  const { theme } = useContext(themeContext);
  const AsideMobile = {
    start: { width: 0 },
    end: {
      width: !isMobile && isMidScreen ? "40%" : "100%",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      width: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
  };

  const parVar = {
    start: { opacity: 0 },
    end: {
      opacity: [0, 0.4, 1],
      transition: {
        when: "beforeChildren",
        staggerChildren: isMobile ? 0.4 : 0,
        delay: 1.5,
      },
    },
  };
  useEffect(() => {
    if (ShowMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [ShowMenu]);
  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = "auto";
    }
  }, [isMobile]);
  return (
    <>
      <motion.nav variants={parVar} initial="start" animate="end">
        <motion.div variants={opacityVariant} className="logo">
          <Link to="main-page" smooth spy>
            <Logo clr={chosenColor} />
          </Link>
        </motion.div>
        <span className="theme-par">
          <AnimatePresence>
            {!isMidScreen ? (
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
                    <LinksComponent setShowMenu={setShowMenu} />
                  </motion.aside>
                )}
              </AnimatePresence>
            )}
          </AnimatePresence>

          <motion.span
            className="theme-par"
            style={{
              justifyContent: "space-between",
              height: "100%",
              alignItems: "center",
            }}
            variants={opacityVariant}
          >
            <Title
              title={theme === "light" ? "apply dark mode" : "apply light mode"}
            >
              <ThemeToggle />
            </Title>

            {isMidScreen && (
              <NavToggler ShowMenu={ShowMenu} setShowMenu={setShowMenu} />
            )}
          </motion.span>
        </span>
      </motion.nav>
    </>
  );
};

export default Nav;
