import React, { useState } from "react";
import { linkArr } from "../../assets/Arr.js";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { RiPaletteFill } from "react-icons/ri";
import ColorPicker from "../Theme/ColorPicker.js";
import { opacityVariant } from "../../assets/MianVariants.js";

const LinksComponent = ({ width = 1000 }: { width?: number }) => {
  const [showClrPicker, setShowClrPicker] = useState(false);
  const check = showClrPicker || width <= 600;
  console.log({ showClrPicker });
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
