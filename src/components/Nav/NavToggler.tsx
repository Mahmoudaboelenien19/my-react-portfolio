import { Squash as Hamburger } from "hamburger-react";
import Title from "../widgets/shared/CustomTitle";
import { motion, AnimatePresence } from "framer-motion";
import LinksComponent from "./Links";
import { Fragment, useState } from "react";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";
const AsideMobile = {
  start: { width: 20, boxShadow: "0 0 0 #000" },
  end: {
    width: 300,
    height: "100%",
    boxShadow: "2px 2px 5px #000",
    transition: {
      boxShadow: { duration: 0.4 },
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.05,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    width: 0,
    boxShadow: "0 0 0 #000",
    transition: {
      duration: 0.7,
      boxShadow: {
        duration: 0.4,
      },
      ease: [0.76, 0, 0.24, 1],
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const NavToggler = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <Fragment>
      <CursorDimensionWhenHover Element="span" scale={1.5} className="menu">
        <Title title={ShowMenu ? "hide nav" : "show nav"}>
          <Hamburger
            color="var(--third)"
            size={20}
            toggled={ShowMenu}
            toggle={setShowMenu}
          />
        </Title>
      </CursorDimensionWhenHover>
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
    </Fragment>
  );
};

export default NavToggler;
