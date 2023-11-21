import { useContext, useRef } from "react";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import Logo from "../widgets/Svgs/Logo";
import ThemeToggle from "./Theme/ThemeToggle";
import NavToggler from "./NavToggler";
import LinksComponent from "./Links";
import { motion } from "framer-motion";
import { opacityVariant } from "../../assets/Utils/MainVariants";
import Title from "../widgets/shared/CustomTitle";
import { themeContext } from "../context/ThemeContext";
import useIsMobile from "../customComponents/useIsMobile";
const parVar = {
  start: { opacity: 0 },
  end: {
    opacity: [0, 1],
    transition: {
      when: "beforeChildren",
    },
  },
};
const Nav = () => {
  const { isMidScreen } = useIsMobile();
  const { isDark } = useContext(themeContext);
  const navRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navRef,
    offset: ["start start", "end start"],
  });
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.5],
    [" 0 0 0 000", "1px .5px 1px #000"]
  );
  const background = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["var(--secondary)", "var(--main)"]
  );
  return (
    <motion.nav
      style={{ boxShadow, background }}
      variants={parVar}
      initial="start"
      animate="end"
      ref={navRef}
    >
      <motion.div variants={opacityVariant} className="logo">
        <Link to="main-page" smooth spy className="logo-link">
          <Logo />
        </Link>
      </motion.div>
      <span className="theme-par">
        <AnimatePresence>{!isMidScreen && <LinksComponent />}</AnimatePresence>

        <motion.span
          className="theme-par"
          style={{
            justifyContent: "space-between",
            height: "100%",
            alignItems: "center",
            padding: "0 20px",
          }}
          variants={opacityVariant}
        >
          <Title title={!isDark ? "apply dark mode" : "apply light mode"}>
            <ThemeToggle />
          </Title>

          {isMidScreen && <NavToggler />}
        </motion.span>
      </span>
    </motion.nav>
  );
};

export default Nav;
