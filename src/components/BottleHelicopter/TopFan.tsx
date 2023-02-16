// @ts-nocheck
import { forwardRef, useRef } from "react";
import {
  SphereProps,
  usePointToPointConstraint,
  useSphere,
} from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { TOP_FAN_PROPS } from "./lib";


useGLTF.preload("models/HeliTopFan.glb");

const TopFan = forwardRef<Mesh, SphereProps>((_, fwdRef) => {
  const { nodes, materials } = useGLTF("models/HeliTopFan.glb");
  const [sphereRef, { applyLocalForce }] = useSphere(
    () => ({
      radius: 0.01,
      mass: 0.1,
      linearDamping: 0.9,
      angularDamping: 0,
      position: TOP_FAN_PROPS.position,
      rotation: TOP_FAN_PROPS.rotation,
    }),
    fwdRef
  );
  const rotorRef = useRef();

  useFrame((_, delta) => {
    if (sphereRef.current) {
      //console.log(rotorRef.current)
      rotorRef.current.rotateY(rotorRef.current.position.Y * delta * 0.02);
      applyLocalForce([10, 10, 10], [0, 0, 0]);
    }
  });

  usePointToPointConstraint(
    sphereRef,
    rotorRef,
    { pivotA: sphereRef.current?.position, pivotB: rotorRef.current?.position },
    []
  );

  return (
    <mesh ref={sphereRef}>
      <mesh
        ref={rotorRef}
        // rotation={TOP_FAN_PROPS.rotation}
        geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
        material={materials["lambert2SG.001"]}
      />
    </mesh>
  );

  // <primitive
  //   scale={TOP_FAN_PROPS.scale}
  //   position={TOP_FAN_PROPS.position}
  //   ref={ref}
  //   object={result.scene}
  // />
});

export const Rotor = forwardRef<Mesh, SphereProps>((_, fwdRef) => {
  //const ref = useRef();
  const [ref, { applyLocalForce }] = useSphere(
    () => ({
      radius: 0.1,
      mass: 0,
      linearDamping: 0.9,
      position: [-5, 9, 0], //TOP_FAN_PROPS.position,
      rotation: TOP_FAN_PROPS.rotation,
    }),
    fwdRef
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotateY(ref.current.position.y * delta);
      // applyLocalForce(
      //     [0, 3, 0],
      //   [
      //     ref.current.position.x,
      //     ref.current.position.y-5,
      //     ref.current.position.z,
      //   ]
      // );
    }
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[30, 0.5, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
});

export default TopFan;
