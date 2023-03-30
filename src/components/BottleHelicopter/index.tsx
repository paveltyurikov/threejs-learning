import React from "react";
import { Debug, Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import BottleHelicopterMesh from "./BottleHelicopter";
import DirectionalLight from "./DirectionalLight";


const CAMERA = { fov: 50, position: [5, 5, 5] } as const;

const BottleHelicopter = () => {
  return (
    <Canvas shadows camera={CAMERA}>
      <DirectionalLight />
      <Physics gravity={[0, -9.8, 0]}>
        <Debug>
          <BottleHelicopterMesh />
        </Debug>
      </Physics>
    </Canvas>
  );
};

export default BottleHelicopter
