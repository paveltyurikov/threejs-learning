import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { ReactChildren } from "../../constants/types";


const CAMERA = { fov: 50, position: [5, 5, 5] } as const;
const Scene = ({ children }: ReactChildren) => {
  return (
    <Canvas shadows camera={CAMERA}>
      <directionalLight castShadow={true} />
      {children}
      <OrbitControls minPolarAngle={0} />
      <axesHelper args={[5]} />
    </Canvas>
  );
};

export default Scene;
