import { useMediaQuery } from "react-responsive";

const useIsMobile = () => {
  const isMidScreen = useMediaQuery({ query: "(max-width: 850px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 370px)" });

  return { isMobile, isMidScreen };
};

export default useIsMobile;
