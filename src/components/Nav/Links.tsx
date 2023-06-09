import React, { useState } from "react";
import { linkArr } from "../../assets/Utils/Arr.js";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { RiPaletteFill } from "react-icons/ri";
import ColorPicker from "../Theme/ColorPicker.js";
import { opacityVariant } from "../../assets/Utils/MianVariants.js";
import useIsMobile from "../customComponents/useIsMobile.js";

const LinksComponent = () => {
  const [showClrPicker, setShowClrPicker] = useState(false);
  const { isMidScreen } = useIsMobile();
  const check = showClrPicker || isMidScreen;
  return (
    <div className="links">
      {linkArr.map(({ id, link }, i) => {
        return (
          <motion.span key={i} variants={opacityVariant}>
            <Link
              // spyThrottle={400}
              to={id}
              smooth
              spy
              offset={-100}
              activeClass="active"
            >
              {link}
            </Link>
          </motion.span>
        );
      })}

      <motion.div className="clr-icon-parent" variants={opacityVariant}>
        <RiPaletteFill
          title="pick a color"
          color="var(--third)"
          onClick={() => {
            setShowClrPicker(!showClrPicker);
            console.log("clicked");
          }}
        />
        <AnimatePresence mode="wait">
          {check && <ColorPicker setShowClrPicker={setShowClrPicker} />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LinksComponent;
