import { useMemo } from "react";
import { BoxProps, SphereArgs, Triplet } from "@react-three/cannon";
import { KeyboardControlsEntry } from "@react-three/drei";


export const HELI_TAIL = {
  position: [0, 0, 1],
  geometry_args: [0.1, 0.1, 2] as BoxProps["args"],
} as const;

const SKID_GEOMETRY = [0.1, 0.05, 1.5] as BoxProps["args"];

export const SKID_RIGHT = {
  position: [0.5, -0.5, 0],
  geometry_args: SKID_GEOMETRY,
} as const;

export const SKID_LEFT = {
  position: [-0.5, -0.5, 0],
  geometry_args: SKID_GEOMETRY,
} as const;

export const BODY = {
  geometry_args: [0.66] as SphereArgs,
} as const;

export enum Controls {
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  KeyA = "KeyA",
  KeyS = "KeyS",
  KeyD = "KeyD",
  KeyW = "KeyW",
}

export const useKeysMap = () =>
  useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.ArrowUp, keys: ["ArrowUp"] },
      { name: Controls.ArrowDown, keys: ["ArrowDown"] },
      { name: Controls.ArrowLeft, keys: ["ArrowLeft"] },
      { name: Controls.ArrowRight, keys: ["ArrowRight"] },
      { name: Controls.KeyA, keys: ["KeyA"] },
      { name: Controls.KeyS, keys: ["KeyS"] },
      { name: Controls.KeyD, keys: ["KeyD"] },
      { name: Controls.KeyW, keys: ["KeyW"] },
    ],
    []
  );

export const getPitchingValue = (keyMap: any) => {
  if (keyMap["ArrowUp"]) return 1;
  if (keyMap["ArrowDown"]) return -1;
  return 0;
};

export const getBankingValue = (keyMap: any) => {
  if (keyMap["ArrowLeft"]) return -1;
  if (keyMap["ArrowRight"]) return 1;
  return 0;
};

export const getYawingValue = (keyMap: any) => {
  if (keyMap["KeyA"]) return -1;
  if (keyMap["KeyD"]) return 1;
  return 0;
};

export const getClimbingValue = (keyMap: any) => {
  if (keyMap["KeyW"]) return 1;
  if (keyMap["KeyS"]) return -1;
  return 0;
};

const updateY = (current: number, state: number, delta: number) => {
  const climbing = getClimbingValue(state);
  let y = current;
  if (climbing > 0) {
    if (y < 15) {
      y += 5 * delta;
    }
  }
  if (climbing < 0) {
    if (y > 0) {
      y -= 5 * delta;
    }
  }
  return y;
};
const updateX = (current: number, state: number, delta: number) => {
  const banking = getBankingValue(state);

  let x = current;
  if (banking === 0) {
    if (x < 0) x += 2.5 * delta;
    if (x > 0) x -= 2.5 * delta;
  } else {
    // arrow left
    if (banking < 0) {
      if (x >= -10.0) x -= 5 * delta;
    }
    // arrow right
    if (banking > 0) {
      if (x <= 10.0) x += 5 * delta;
    }
  }
  return x;
};

const updateZ = (current: number, state: number, delta: number) => {
  const pitching = getPitchingValue(state);
  let z = current;
  if (pitching === 0) {
    if (z < 0) z += 2.5 * delta;
    if (z > 0) z -= 2.5 * delta;
  } else {
    if (pitching > 0) {
      if (z >= -10.0) z -= 5 * delta;
    }
    if (pitching < 0) {
      if (z <= 10.0) z += 5 * delta;
    }
  }
  return z;
};

const getAngularVelocity = (current: number[], state: any, delta: number) => {
  let v = [...current];
  const yawing = getYawingValue(state);
  if (yawing === 0) {
    if (v[1] < 0) v[1] += delta;
    if (v[1] > 0) v[1] -= delta;
  } else {
    if (yawing < 0) {
      if (v[1] < 2.0) v[1] += 5 * delta;
    }
    if (yawing > 0) {
      if (v[1] > -2.0 && v[1] < 2.0) v[1] -= 5 * delta;
    }
  }
  return v;
};

export const getUpdates = (current: RefState, state: any, delta: number) => {
  const force = [...current.force]
  return {
    force: [
      updateX(force[0], state, delta),
      updateY(force[1], state, delta),
      updateZ(force[2], state, delta),
    ] as Triplet,
    angularVelocity: getAngularVelocity(
      current.angularVelocity,
      state,
      delta
    ) as Triplet,
  };
};

export type RefState = {
  force: Triplet;
  angularVelocity: Triplet;
};
export const INITIAL_REF: RefState = {
  force: [0, 5, 0],
  angularVelocity: [0, 0, 0],
};
