import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TOP_FAN_PROPS } from "./lib";


const TopFan = () => {
  const result = useLoader(GLTFLoader, "models/HeliTopFan.glb");
  const ref = useRef<any>({});
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotateY(ref.current.position.y * delta * 0.2);
    }
  });
  return (
    <primitive
      scale={TOP_FAN_PROPS.scale}
      position={TOP_FAN_PROPS.position}
      ref={ref}
      object={result.scene}
    />
  );
};

export default TopFan;
