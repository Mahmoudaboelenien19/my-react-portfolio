import { useGLTF } from "@react-three/drei";
import React from "react";

const Mac = () => {
  const gltf = useGLTF("/mac-draco.glb", true);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        castShadow={true}
        shadow-mapSize={1024}
        angle={0.12}
      />
      <primitive
        position={[0, -2, -1.5]}
        object={gltf.scene}
        dispose={null}
        scale={0.85}
      />
      ;
    </mesh>
  );
};
export default Mac;
