import { useState } from "react";
import { linkArr } from "@/assets/Utils/Arr.js";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { opacityVariant } from "@/assets/Utils/MianVariants.js";
import useIsMobile from "../customComponents/useIsMobile.js";

interface Props {
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}
const LinksComponent = ({ setShowMenu }: Props) => {
  const [activeLink, setActiveLink] = useState("home");

  const { isMidScreen } = useIsMobile();
  return (
    <ul className="links">
      {linkArr.map(({ id, link }, i) => {
        return (
          <motion.li className="link-par" key={i} variants={opacityVariant}>
            <Link
              to={id}
              smooth
              spy
              // offset={-55}
              activeClass="active"
              onClick={() => {
                if (isMidScreen && setShowMenu) {
                  setShowMenu(false);
                }
              }}
              onSetActive={() => setActiveLink(link)}
            >
              {link}
            </Link>
            {link === activeLink && (
              <motion.div layoutId="active-link" className="active-link" />
            )}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default LinksComponent;
