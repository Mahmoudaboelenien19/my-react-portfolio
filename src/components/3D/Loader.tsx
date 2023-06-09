import React from "react";
import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div
        style={{
          color: "var(--scroll)",
          fontSize: 20,
          display: "flex",
        }}
      >
        {progress.toFixed(2)}%{" "}
      </div>
    </Html>
  );
};

export default Loader;
