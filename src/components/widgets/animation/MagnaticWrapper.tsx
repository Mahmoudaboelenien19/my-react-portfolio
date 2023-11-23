import { useRef, useState } from "react";
import CursorDimensionWhenHover from "./CursorDimensionWhenHover";

export default function MagnaticWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <CursorDimensionWhenHover
      scale={0.2}
      Element="div"
      style={{ position: "relative" }}
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        if (ref.current) {
          const { height, width, left, top } =
            ref.current.getBoundingClientRect();
          const middleX = clientX - (left + width / 2);
          const middleY = clientY - (top + height / 2);
          setPosition({ x: middleX, y: middleY });
        }
      }}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 250,
        mass: 0.8,
        damping: 18,
        ease: [7, 1.9, 0.5],
      }}
    >
      <span ref={ref}>{children}</span>
    </CursorDimensionWhenHover>
  );
}
