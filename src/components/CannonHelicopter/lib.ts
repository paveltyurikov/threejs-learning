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
  StrafeForward = "StrafeForward",
  StrafeBackward = "StrafeBackward",
  StrafeLeft = "StrafeLeft",
  StrafeRight = "StrafeRight",
  TurnLeft = "TurnLeft",
  ThrottleDown = "ThrottleDown",
  TurnRight = "TurnRight",
  ThrottleUp = "ThrottleUp",
}

export const useKeysMap = () =>
  useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.StrafeForward, keys: ["ArrowUp"] },
      { name: Controls.StrafeBackward, keys: ["ArrowDown"] },
      { name: Controls.StrafeLeft, keys: ["ArrowLeft"] },
      { name: Controls.StrafeRight, keys: ["ArrowRight"] },
      { name: Controls.ThrottleUp, keys: ["KeyW"] },
      { name: Controls.ThrottleDown, keys: ["KeyS"] },
      { name: Controls.TurnLeft, keys: ["KeyA"] },
      { name: Controls.TurnRight, keys: ["KeyD"] },
    ],
    []
  );


const throttle = {
  max: 15,
  min: 0,
  step: 5,
};

const strafe = {
  horizontal: {
    max: 10,
    min: -10,
    step: 5,
  },
  vertical: {
    max: 10,
    min: -10,
    step: 5,
  },
};

export const updateForce = (
  current: [number, number, number],
  state: any,
  delta: number
): Triplet => {
  let v: Triplet = [...current];
  // update X banking
  if (!state[Controls.StrafeLeft] && !state[Controls.StrafeRight]) {
    if (v[0] < 0) v[0] += (strafe.horizontal.step / 2) * delta;
    if (v[0] > 0) v[0] -= (strafe.horizontal.step / 2) * delta;
  } else {
    // arrow left
    if (state[Controls.StrafeLeft]) {
      if (v[0] >= strafe.horizontal.min) v[0] -= strafe.horizontal.step * delta;
    }
    // arrow right
    if (state[Controls.StrafeRight]) {
      if (v[0] <= strafe.horizontal.max) v[0] += strafe.horizontal.step * delta;
    }
  }
  // update Y
  if (state[Controls.ThrottleUp]) {
    if (v[1] < throttle.max) {
      v[1] += throttle.step * delta;
    }
  }
  if (state[Controls.ThrottleDown]) {
    if (v[1] > 0) {
      v[1] -= throttle.step * delta;
    }
  }
  // update z pitching

  if (!state[Controls.StrafeForward] && !state[Controls.StrafeBackward]) {
    if (v[2] < 0) v[2] += (strafe.vertical.step / 2) * delta;
    if (v[2] > 0) v[2] -= (strafe.vertical.step / 2) * delta;
  } else {
    // arrow up
    if (state[Controls.StrafeForward]) {
      if (v[2] >= strafe.vertical.min) v[2] -= strafe.vertical.step * delta;
    }
    // arrow down
    if (state[Controls.StrafeBackward]) {
      if (v[2] <= strafe.vertical.max) v[2] += strafe.horizontal.step * delta;
    }
  }
  return v;
};


export const getAngularVelocity = (current: number[], state: any, delta: number) => {
  let v = [...current];
  if (!state[Controls.TurnLeft] && !state[Controls.TurnRight]) {
    if (v[1] < 0) v[1] += delta;
    if (v[1] > 0) v[1] -= delta;
  } else {
    if (state[Controls.TurnLeft]) {
      if (v[1] < 2.0) v[1] += 5 * delta;
    }
    if (state[Controls.TurnRight]) {
      if (v[1] > -2.0 && v[1] < 2.0) v[1] -= 5 * delta;
    }
  }
  return v;
};

export type RefState = {
  force: Triplet;
  angularVelocity: Triplet;
};
export const INITIAL_REF: RefState = {
  force: [0, 5, 0],
  angularVelocity: [0, 0, 0],
};
