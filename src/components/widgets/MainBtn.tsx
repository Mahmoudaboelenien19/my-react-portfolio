import { IconType } from "react-icons/lib";

interface Props {
  btn: string;
  Icon: IconType;
  type?: "button" | "submit";
  children?: React.ReactNode;
}

const MainBtn = ({ children, btn, Icon, type = "button" }: Props) => {
  return (
    <button className={`btn `} type={type}>
      {btn}
      {children}
      <Icon />
    </button>
  );
};

export default MainBtn;
