import { updateCursorScale } from "@/redux/cursorSlice";
import { useAppDispatch } from "@/redux/reduxType";
import { MotionProps, motion } from "framer-motion";
import { HTMLAttributes } from "react";
type Props = {
  children: React.ReactNode;
  scale?: number;
  Element: "p" | "div" | "span" | "li" | "h3";
} & HTMLAttributes<HTMLElement> &
  MotionProps;

const CursorDimensionWhenHover = ({
  Element,
  children,
  scale,
  ...props
}: Props) => {
  const dispatch = useAppDispatch();
  const MotionElement = motion[Element];
  return (
    <MotionElement
      {...props}
      onHoverStart={() => dispatch(updateCursorScale(scale || 3))}
      onHoverEnd={() => dispatch(updateCursorScale(1))}
    >
      {children}
    </MotionElement>
  );
};

export default CursorDimensionWhenHover;
