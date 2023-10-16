import React from "react";

type Props = {
  children: React.ReactNode;
  id: string;
};
const Container = ({ children, id }: Props) => {
  return (
    <div className="container" id={id}>
      {children}
    </div>
  );
};

export default Container;
