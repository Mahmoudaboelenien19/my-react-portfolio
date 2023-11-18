import svg from "@/assets/Svg/OOP.svg";
import useIsMobile from "@/components/customComponents/useIsMobile";
import { ReactSVG } from "react-svg";

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
