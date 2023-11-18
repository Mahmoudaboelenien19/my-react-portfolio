import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";

type Props = {
  btn: string;
  Icon: IconType;

  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const MainBtn = ({ children, btn, Icon, ...props }: Props) => {
  return (
    <button className={`btn `} {...props}>
      {btn}
      {children && children}
      <Icon />
    </button>
  );
};

export default MainBtn;
