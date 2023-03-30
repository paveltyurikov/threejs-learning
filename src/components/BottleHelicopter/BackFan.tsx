import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { REAR_FAN_PROPS } from "./lib";


const BackFan = () => {
  const result = useLoader(GLTFLoader, "models/HeliBackFan.glb");
  const ref = useRef<any>({});
  useFrame((_, delta) => {
    ref.current.rotateY(ref.current.position.y * delta);
  });
  return (
    <primitive
      ref={ref}
      scale={REAR_FAN_PROPS.scale}
      object={result.scene}
      position={REAR_FAN_PROPS.position}
      rotation={REAR_FAN_PROPS.rotation}
    />
  );
};

export default BackFan;
