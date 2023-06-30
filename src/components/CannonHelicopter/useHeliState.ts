// @ts-nocheck
import { useEffect, useRef } from "react";
import { usePointToPointConstraint, useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { Object3D } from "three";
import { useDualShock4HIDContext } from "./DualShock4Provider/context";
import { CannonHelicopter, SCENE } from "./lib";


const useHeliState = () => {
  const ds4 = useDualShock4HIDContext();

  const refState = useRef(SCENE.CANNON.HELICOPTER.ref);

  const pivotRef = useRef<typeof Object3D>(new Object3D());

  const rotorMeshRef = useRef();

  const [
    bodyRef,
    { angularVelocity: bodyAngularVelocity, position: bodyPosition },
  ] = useSphere(() => SCENE.CANNON.HELICOPTER.bodySphere);

  const [
    rotorRef,
    {
      applyLocalForce,
      angularVelocity: rotorAngularVelocity,
      quaternion: rotorQuaternion,
    },
  ] = useSphere(() => SCENE.CANNON.HELICOPTER.rotorSphere);

  useEffect(() => {
    return rotorAngularVelocity.subscribe((v) => bodyAngularVelocity.set(...v));
  }, [bodyAngularVelocity, rotorAngularVelocity]);

  useEffect(() => {
    return bodyPosition.subscribe((v) => pivotRef.current?.position.set(...v));
  }, [bodyPosition]);

  useEffect(() => {
    return rotorQuaternion.subscribe((q) =>
      pivotRef.current?.quaternion.set(...q)
    );
  }, [rotorQuaternion]);

  usePointToPointConstraint(
    bodyRef,
    rotorRef,
    SCENE.CANNON.HELICOPTER.PTPConstraintOptions
  );

  useFrame(({ camera, ...rest }, delta) => {
    //console.log({camera, ...rest})
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
      const cp = [...pivotRef.current.position];

      cp[1] += 7;
      cp[2] += 8;
      // camera.quaternion.set(...pivotRef.current.quaternion);
      camera.position.lerp({ x: cp[0], y: cp[1], z: cp[2] }, 0.05);

      camera.lookAt(
        bodyRef.current?.getWorldPosition(bodyRef.current?.position)
      );
      applyLocalForce(nextState.force, [0, 0, 0]);
    }
  });
  return [bodyRef, rotorRef, rotorMeshRef, refState];
};

export default useHeliState;
