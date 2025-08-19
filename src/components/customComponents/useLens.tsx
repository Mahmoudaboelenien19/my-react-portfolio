import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import useIsMobile from "./useIsMobile";

const useLens = () => {
  const { isMobile } = useIsMobile();
  useEffect(() => {
    if (isMobile) return;
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
};

export default useLens;
