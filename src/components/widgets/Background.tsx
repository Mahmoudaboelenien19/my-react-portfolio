import React from "react";

const Background = ({ text, pos = "left" }: { text: string; pos?: string }) => {
  return (
    <div className="main-background">
      <p>{text}</p>
      {/* <div className="shape" style={{ [pos]: "2%" }}>
        <div className="div-1"></div>
        <div className="div-2"></div>
        <div className="div-3"></div>
      </div> */}
    </div>
  );
};

export default Background;
