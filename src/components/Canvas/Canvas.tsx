import { ReactNode } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas as RealCanvas } from "@react-three/fiber";


const Canvas: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
  return (
    <RealCanvas {...props}>
      {children}
      <OrbitControls minPolarAngle={0} />
      <axesHelper args={[5]} />
    </RealCanvas>
  );
};

export default Canvas;
