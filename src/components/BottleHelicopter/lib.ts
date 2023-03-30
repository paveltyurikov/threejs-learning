import { useRef } from "react";
import { MeshProps } from "@react-three/fiber";
import * as CANNON from "cannon-es";


export const AWDS = ["KeyA", "KeyW", "KeyS", "KeyD"];
export const ARROW_KEYS = ["ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"];
export const AVAILABLE_KEYS = [...AWDS, ...ARROW_KEYS];

export const TOP_FAN_PROPS = {
  scale: [2.7, 2.7, 1],
  position: [-3, 0, 15],
  rotation: [0, 0, 0],
};
export const CANNON_VEC_3 = new CANNON.Vec3(0, 5, 0);
export const REAR_FAN_PROPS: Partial<MeshProps> = {
  scale: 0.64,
  position: [15, -1.5, 4.4],
  rotation: [0, 0, 0] as [x: number, y: number, z: number],
};

export const BODY_PROPS: Partial<MeshProps> = {
  position: [0, 0, 0] as [x: number, y: number, z: number],
  rotation: [0, 0, 0] as [x: number, y: number, z: number],
};

export const useHeliRef = () =>
  useRef({
    x: 0,
    y: 0,
    z: 0,
  });
