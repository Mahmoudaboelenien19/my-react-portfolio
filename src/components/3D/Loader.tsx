import React from "react";
import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <div
        style={{
          color: "var(--third)",
          fontSize: 20,
          display: "flex",
        }}
      >
        {" "}
        {progress.toFixed(2)}%{" "}
      </div>
    </Html>
  );
};

export default Loader;
