// @ts-nocheck
import { Physics } from "@react-three/cannon";
import { Environment, OrbitControls, Sky,  } from "@react-three/drei";
import { Canvas, Camera } from "@react-three/fiber";
import Plane from "./Plane";


const Scene: React.FC<{
  camera: typeof Camera;
  orbitControlsEnabled?: boolean;
  axesHelperEnabled?: boolean;
  children: React.ReactNode;
}> = ({
  camera ,
  children,
  orbitControlsEnabled=true,
  axesHelperEnabled=true,
}) => {
  return (
    <Canvas shadows="soft" dpr={[1, 2]} gl={{ alpha: false }} camera={camera}>
      <ambientLight />
      <directionalLight
        position={[10, 10, 10]}
        castShadow={true}
        shadow-mapSize={[2048, 2048]}
      />
      <Sky />
      <Environment preset="city" />
      <Physics axisIndex={2}>
        <Plane position={[0, 0, 0]} />
        {children}
        {orbitControlsEnabled ? <OrbitControls minPolarAngle={0} /> : null}
        {axesHelperEnabled ? <axesHelper args={[25]} /> : null}
      </Physics>
    </Canvas>
  );
};

export default Scene;
