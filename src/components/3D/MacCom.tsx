import { OrbitControls, Stage, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useState, Suspense } from "react";
import Mac from "./Mac";
import Loader from "./Loader";

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
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <Mac />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      {/* </Stage> */}
      <Preload all />
    </Canvas>
  );
};

export default MacCom;
