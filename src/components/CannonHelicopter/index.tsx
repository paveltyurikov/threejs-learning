import React, { Suspense } from "react";
import { Debug, Physics } from "@react-three/cannon";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "components/CannonHelicopter/Ground";
import Helicopter from "components/CannonHelicopter/Helicopter";
import DirectionalLight from "./DirectionalLight";
import { useKeysMap } from "./lib";


const CAMERA = { fov: 50, position: [5, 5, 5] } as const;
const CanonHelicopter = () => {
  const map = useKeysMap();
  return (
    <Canvas shadows camera={CAMERA}>
      <DirectionalLight />
      <KeyboardControls map={map}>
        <Suspense fallback={null}>
          <Physics gravity={[0, -9.8, 0]}>
            <Debug>
              <Helicopter />
              <Ground />
            </Debug>
          </Physics>
        </Suspense>
      </KeyboardControls>
      <OrbitControls />
    </Canvas>
  );
};

export default CanonHelicopter;
