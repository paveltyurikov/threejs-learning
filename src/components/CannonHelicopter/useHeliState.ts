// @ts-nocheck
import { useEffect, useRef } from "react";
import {
  Triplet,
  usePointToPointConstraint,
  useSphere,
} from "@react-three/cannon";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { getAngularVelocity, INITIAL_REF, RefState, updateForce } from "./lib";


const ROTOR_Y = 0.8;

const LOCAL_POINT: Triplet = [0, 0, 0];

const BODY_SPHERE = {
  args: [0.66],
  position: [0, 1.66, 0],
  mass: 0.5,
};

const ROTOR_SPHERE = {
  args: [0.1],
  mass: 1,
  position: [0, ROTOR_Y, 0],
  rotation: [0, 0, 0],
  linearDamping: 0.5,
  angularDamping: 0.5,
};

const useHeliState = () => {
  const pointRef = useRef<RefState>(INITIAL_REF);
  const rotorMeshRef = useRef();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, state] = useKeyboardControls();
  const [bodyRef, { angularVelocity: bodyAngularVelocity }] = useSphere(
    () => BODY_SPHERE
  );
  const [rotorRef, { applyLocalForce, angularVelocity: rotorAngularVelocity }] =
    useSphere(() => ROTOR_SPHERE);

  useEffect(() => {
    return rotorAngularVelocity.subscribe((v) => bodyAngularVelocity.set(...v));
  }, [bodyAngularVelocity, rotorAngularVelocity]);

  usePointToPointConstraint(bodyRef, rotorRef, {
    pivotA: [0, ROTOR_Y, 0],
    pivotB: [0, 0, 0],
  });

  useFrame(({ camera }, delta) => {
    if (bodyRef.current && rotorRef.current && rotorMeshRef.current) {
      // @ts-ignore
      rotorMeshRef.current.rotateY(delta * pointRef.current.force[1] * 2);

      pointRef.current.force = updateForce(
        pointRef.current.force,
        state(),
        delta
      );
      pointRef.current.angularVelocity = getAngularVelocity(
        pointRef.current.angularVelocity,
        state(),
        delta
      );
      rotorAngularVelocity.set(...pointRef.current.angularVelocity);
      applyLocalForce(pointRef.current.force, LOCAL_POINT);
    }
  });
  return [bodyRef, rotorRef, rotorMeshRef];
};

export default useHeliState;
