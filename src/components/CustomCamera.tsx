import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const CustomOrbitControls = (props: any) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef<any>(null!);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.minPolarAngle = Math.PI / 6; // Set the minimum polar angle
      controlsRef.current.maxPolarAngle = Math.PI - Math.PI / 6; // Set the maximum polar angle
      controlsRef.current.minAzimuthAngle = -Math.PI / 6; // Set the minimum azimuth angle
      controlsRef.current.maxAzimuthAngle = Math.PI / 6; // Set the maximum azimuth angle
      controlsRef.current.enablePan = false; // Disable panning
    }
  }, []);

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};

export default CustomOrbitControls;
