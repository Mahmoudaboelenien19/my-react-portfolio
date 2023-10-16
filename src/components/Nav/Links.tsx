import React, { useState } from "react";
import { linkArr } from "@/assets/Utils/Arr.js";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { RiPaletteFill } from "react-icons/ri";
import ColorPicker from "../Theme/ColorPicker.js";
import { opacityVariant } from "@/assets/Utils/MianVariants.js";
import useIsMobile from "../customComponents/useIsMobile.js";

interface Props {
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}
const LinksComponent = ({ setShowMenu }: Props) => {
  const [showClrPicker, setShowClrPicker] = useState(false);
  const { isMidScreen } = useIsMobile();
  const check = showClrPicker || isMidScreen;
  return (
    <div className="links">
      {linkArr.map(({ id, link }, i) => {
        return (
          <motion.span key={i} variants={opacityVariant}>
            <Link
              to={id}
              smooth
              spy
              offset={-55}
              activeClass="active"
              onClick={() => {
                if (isMidScreen && setShowMenu) {
                  setShowMenu(false);
                }
              }}
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
