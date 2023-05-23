import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import CustomOrbitControls from "./components/CustomCamera";
import Mac from "./Mac";

const MacCom = () => {
  const [reverse, setReverse] = useState(false);
  const controls = useRef<any>(null!);

  const handleUpdate = () => {
    const rotation = controls?.current?.getAzimuthalAngle();

    if (!reverse && rotation >= 0.5) {
      setReverse(true);
    } else if (reverse && rotation <= -0.5) {
      setReverse(false);
    }

    if (reverse) {
      controls?.current?.rotateLeft(-0.005);
    } else {
      controls?.current?.rotateLeft(0.005);
    }
  };

  return (
    <Canvas>
      <Mac />
      <Stage environment={"city"} intensity={0.5}>
        {/* <Lights /> */}
        <OrbitControls
          ref={controls}
          onUpdate={handleUpdate}
          autoRotate
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2 - 0.5235}
          // minPolarAngle={-Math.PI / 2 + 0.5235}
        />
      </Stage>
    </Canvas>
  );
};

export default MacCom;
