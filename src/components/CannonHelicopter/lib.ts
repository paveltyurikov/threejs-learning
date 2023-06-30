import { BoxProps, SphereArgs, Triplet } from "@react-three/cannon";
import { DualShock4 } from "webhid-ds4";


const ROTOR_Y = 0.8;
export const SCENE = {
  GRAVITY: [0, -9.8, 0] as any,
  CAMERA: { fov: 50, position: [-1, 7, 8] } as const,
  CANNON: {
    HELICOPTER: {
      ref: {
        force: [0, 5, 0],
        angularVelocity: [0, 0, 0],
      },
      bodySphere: {
        args: [0.66],
        position: [0, 1.66, 0],
        mass: 0.65,
      },
      rotorSphere: {
        args: [0.1],
        mass: 0.025,
        position: [0, ROTOR_Y, 0],
        rotation: [0, 0, 0],
        linearDamping: 0.5,
        angularDamping: 0.5,
      },
      PTPConstraintOptions: {
        pivotA: [0, ROTOR_Y, 0],
        pivotB: [0, 0, 0],
      },
    },
  },
  HELICOPTER: {
    body: {
      geometry_args: [0.66] as SphereArgs,
    },
    tail: {
      position: [0, 0, 1],
      geometry_args: [0.1, 0.1, 2] as BoxProps["args"],
    },
    skid: {
      right: {
        position: [0.5, -0.62, 0],
        geometry_args: [0.1, 0.05, 1.5] as BoxProps["args"],
      },
      left: {
        position: [-0.5, -0.62, 0],
        geometry_args: [0.1, 0.05, 1.5] as BoxProps["args"],
      },
    },
  },
} as const;

export type RefState = {
  force: Triplet;
  angularVelocity: Triplet;
};

const ENGINE_POWER = [1, 9, 1];

export type HelicopterControllerState = {
  throttle: number;
  pitch: number;
  roll: number;
  yew: number;
};

class HelicopterController {
  private state: HelicopterControllerState = {
    throttle: 0,
    pitch: 0,
    roll: 0,
    yew: 0,
  };

  constructor(state: HelicopterControllerState) {
    this.state = state;
  }

  getForce = () => {};
}

export class CannonHelicopter {
  private dsState: DualShock4["state"];
  private force: Triplet;
  private delta: number;
  private currentAngularVelocity: Triplet;

  constructor(
    dsState: DualShock4["state"],
    delta: number,
    currentAngularVelocity: Triplet
  ) {
    this.dsState = dsState;
    this.force = this.getForce();
    this.delta = delta;
    this.currentAngularVelocity = currentAngularVelocity;
  }

  hs = { pitch: [-1, 1], roll: [-1, 1], yew: [-1, 1], throttle: [-1, 1] };
  getForce = (): Triplet => {
    return [
      ENGINE_POWER[0] * this.dsState.axes.leftStickX, // roll
      ENGINE_POWER[1] * this.dsState.axes.r2, //throttle
      ENGINE_POWER[2] * this.dsState.axes.leftStickY, // pitch
    ];
  };
  getAngularVelocity = () => {
    let v = [...this.currentAngularVelocity];
    if (this.dsState.buttons.l1 || this.dsState.buttons.r1) {
      const sign = this.dsState.buttons.r1 ? -1 : 1;
      if (v[1] > -2.0 && v[1] < 2.0) v[1] = v[1] + 2 * this.delta * sign;
    } else {
      v[1] = v[1] - this.delta * Math.sign(v[1]);
    }
    return v;
  };
  getRotorSpeed = () => {
    return this.delta * (this.force[1] * 3 || 10);
  };

  getNextState = () => ({
    force: this.getForce(),
    angularVelocity: this.getAngularVelocity(),
    rotorSpeed: this.getRotorSpeed(),
  });
}
