import React from "react";
interface Props {
  text: string;
}
const Background = ({ text }: Props) => {
  return (
    <div className="main-background">
      <p>{text}</p>
    </div>
  );
};

export default Background;
