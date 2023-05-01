import React, { Suspense } from "react";
import { Debug, Physics, usePlane } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { isDevEnv } from "../../lib/isEnv";
import { SCENE } from "./lib";


const PLANE_PROPS = () => ({
  mass: 0,
  rotation: [-Math.PI / 2, 0, 0],
  material: "groundMaterial",
});

const PLANE_GEOMETRY_ARGS = [100, 100] as const;
const Ground = () => {
  // @ts-ignore
  const [ref] = usePlane(PLANE_PROPS);

  return (
    // @ts-ignore
    <mesh ref={ref} receiveShadow={true}>
      <planeGeometry
        attach="geometry"
        // @ts-ignore
        args={PLANE_GEOMETRY_ARGS}
      />
      <meshPhongMaterial attach="material" color="#eeeeee" />
    </mesh>
  );
};

export type SceneProps = {
  children: React.ReactNode;
};
const Scene = ({ children }: SceneProps) => {
  return (
    <Canvas shadows camera={SCENE.CAMERA}>
      <directionalLight castShadow={true} shadow-mapSize={[6384, 16384]} />
      <Suspense fallback={null}>
        <Physics gravity={SCENE.GRAVITY}>
          <Debug>
            {children}
            <Ground />
          </Debug>
        </Physics>
      </Suspense>
      {isDevEnv() ? <OrbitControls /> : null}
    </Canvas>
  );
};

export default Scene;
