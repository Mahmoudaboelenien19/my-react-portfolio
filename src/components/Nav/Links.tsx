import { useRef, useState } from "react";
import { linkArr } from "@/assets/Utils/Arr.js";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { opacityVariant } from "@/assets/Utils/MainVariants.js";
import useIsMobile from "../customComponents/useIsMobile.js";

interface Props {
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}
const smallScreenVariant = {
  start: { x: 20, opacity: 0 },
  end: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
};
const LinksComponent = ({ setShowMenu }: Props) => {
  const [activeLink, setActiveLink] = useState("home");
  const { isMidScreen } = useIsMobile();
  const initialRender = useRef(true);
  return (
    <ul className="links">
      {linkArr.map(({ id, link }, i) => {
        return (
          <motion.li
            className="link-par"
            key={i}
            variants={isMidScreen ? smallScreenVariant : opacityVariant}
          >
            <Link
              to={id}
              smooth
              offset={-40}
              spy
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
              <motion.div
                //this color animation  is a temporay  solution  to fix mixBlendMode  bug  till i get the right solution
                initial={
                  initialRender.current ? { background: "#00000000" } : {}
                }
                animate={initialRender.current ? { background: "#fff" } : {}}
                transition={{ background: { duration: 0.6, delay: 1.5 } }}
                onAnimationComplete={() => (initialRender.current = false)}
                layoutId="active-link"
                className="active-link"
              />
            )}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default LinksComponent;
