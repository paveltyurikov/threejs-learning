// @ts-nocheck
import { useEffect, useRef } from "react";
import { usePointToPointConstraint, useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useDualShock4HIDContext } from "./DualShock4Provider/context";
import { CannonHelicopter, SCENE } from "./lib";


const useHeliState = () => {
  const ds4 = useDualShock4HIDContext();

  const refState = useRef(SCENE.CANNON.HELICOPTER.ref);

  const rotorMeshRef = useRef();

  const [bodyRef, { angularVelocity: bodyAngularVelocity }] = useSphere(
    () => SCENE.CANNON.HELICOPTER.bodySphere
  );
  const [rotorRef, { applyLocalForce, angularVelocity: rotorAngularVelocity }] =
    useSphere(() => SCENE.CANNON.HELICOPTER.rotorSphere);

  useEffect(() => {
    return rotorAngularVelocity.subscribe((v) => bodyAngularVelocity.set(...v));
  }, [bodyAngularVelocity, rotorAngularVelocity]);

  usePointToPointConstraint(
    bodyRef,
    rotorRef,
    SCENE.CANNON.HELICOPTER.PTPConstraintOptions
  );

  useFrame((_, delta) => {
    const canAnimate =
      bodyRef.current &&
      rotorRef.current &&
      rotorMeshRef.current &&
      ds4.length &&
      ds4[0].state;

    if (canAnimate) {
      const nextState = new CannonHelicopter(
        ds4[0].state,
        delta,
        refState.current.angularVelocity
      ).getNextState();

      refState.current = {
        force: nextState.force,
        angularVelocity: nextState.angularVelocity,
      };

      rotorMeshRef.current.rotateY(nextState.rotorSpeed);

      rotorAngularVelocity.set(...nextState.angularVelocity);

      applyLocalForce(nextState.force, [0, 0, 0]);
    }
  });
  return [bodyRef, rotorRef, rotorMeshRef, refState];
};

export default useHeliState;
