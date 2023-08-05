import React from "react";
import svg from "../../../assets/Svg/OOP.svg";
import { ReactSVG } from "react-svg";
import useIsMobile from "../../customComponents/useIsMobile";

const OOPSVG = () => {
  const { isMobile, isMidScreen } = useIsMobile();
  return (
    <ReactSVG
      src={svg}
      style={{
        transform: `scale( ${isMobile || isMidScreen ? 0.7 : 1})`,
        transformOrigin: "50% 50%",
      }}
    />
  );
};

export default OOPSVG;
