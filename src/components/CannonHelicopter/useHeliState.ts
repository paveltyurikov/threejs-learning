// ts-nocheck
import { useEffect, useRef } from "react";
import {
  Triplet,
  usePointToPointConstraint,
  useSphere,
} from "@react-three/cannon";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { getUpdates, INITIAL_REF, RefState } from "./lib";


const STABLE_LEFT = 14.7;

const ROTOR_Y = 0.8;

const useHeliState = () => {
  const pointRef = useRef<RefState>(INITIAL_REF);
  const rotorMeshRef = useRef();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, state] = useKeyboardControls();

  const [rotorRef, { applyLocalForce, angularVelocity: rotorAngularVelocity }] =
    useSphere(() => ({
      args: [0.1],
      mass: 1,
      position: [0, ROTOR_Y, 0],
      rotation: [0, 0, 0],
      linearDamping: 0.5,
      angularDamping: 0.5,
    }));
  useEffect(() => {
    return rotorAngularVelocity.subscribe(
      (v) => (pointRef.current.angularVelocity = v)
    );
  }, [rotorAngularVelocity]);

  const [bodyRef, { angularVelocity: bodyAngularVelocity }] = useSphere(() => ({
    args: [0.66],
    position: [0, 1.66, 0],
    mass: 0.5,
  }));

  usePointToPointConstraint(bodyRef, rotorRef, {
    pivotA: [0, ROTOR_Y, 0],
    pivotB: [0, 0, 0],
  });

  useFrame((s, delta) => {
    if (bodyRef.current && rotorRef.current && rotorMeshRef.current) {
      // @ts-ignore
      rotorMeshRef.current.rotateY(
        // @ts-ignore
        (rotorMeshRef.current.position.y + 1) *
          delta *
          pointRef.current.force[1] *
          2
      );

      const LOCAL_POINT: Triplet = [0, 0, 0];

      pointRef.current = getUpdates({ ...pointRef.current }, state(), delta);
      rotorAngularVelocity.set(...pointRef.current.angularVelocity);
      bodyAngularVelocity.set(...pointRef.current.angularVelocity);
      applyLocalForce(pointRef.current.force, LOCAL_POINT);
    }
  });
  return [bodyRef, rotorRef, rotorMeshRef];
};

export default useHeliState;
