import { useGLTF } from "@react-three/drei";
import React from "react";

const Mac = () => {
  const gltf = useGLTF("/mac-draco.glb", true);

  return (
    <group scale={[0.3, 0.3, 0.3]}>
      <primitive object={gltf.scene} dispose={null} />;
    </group>
  );
};
export default Mac;
