import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { parVar } from "../../assets/Utils/MianVariants";
import CloseToggler from "./CloseToggler";
import Aside from "./Aside";
import Title from "../widgets/CustomTitle";
interface Props {
  ShowMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavToggler = ({ ShowMenu, setShowMenu }: Props) => {
  const lineVar = {
    start: { width: 0 },
    end: (i: number) => ({
      width: i === 1 ? 14 : 20,
      transition: { type: "spring" },
    }),
    exit: { width: 0 },
  };

  //   const [ShowMenu, setShowMenu] = useState(false);
  return (
    <Title title={ShowMenu ? "hide nav" : "show nav"}>
      <div className="menu-togglar" onClick={() => setShowMenu(!ShowMenu)}>
        <AnimatePresence mode="wait">
          {!ShowMenu ? (
            <motion.div
              key="show-toggler"
              className="nav-toggle"
              variants={parVar}
              initial={"start"}
              animate="end"
              exit="exit"
            >
              {[...Array(3)].map((_, i) => {
                return (
                  <motion.div
                    variants={lineVar}
                    className="toggle-line"
                    key={i}
                    custom={i}
                  ></motion.div>
                );
              })}
            </motion.div>
          ) : (
            <CloseToggler key={"close"} />
          )}
        </AnimatePresence>
      </div>
    </Title>
  );
};

export default NavToggler;
