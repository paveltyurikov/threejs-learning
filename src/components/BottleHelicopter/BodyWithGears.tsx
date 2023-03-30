// @ts-nocheck
import { forwardRef } from "react";
import { BoxProps, useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import BackFan from "./BackFan";
import { BODY_PROPS } from "./lib";


useGLTF.preload("models/HeliBody.glb");

const BodyWithGears = forwardRef<Mesh, BoxProps>((_, fwdRef) => {
  // @ts-ignore
  const { nodes, materials } = useGLTF("models/HeliBody.glb");

  const [ref] = useBox(
    () => ({
      args: [1, 1, 1],
      linearDamping: 0.9,
      mass: 0,
      position: BODY_PROPS.position,
      rotation: BODY_PROPS.rotation,
    }),
    fwdRef
  );

  return (
    <mesh
      // @ts-ignore
      ref={ref}
      // position={BODY_PROPS.position}
      // rotation={BODY_PROPS.rotation}
      material={materials["lambert2SG.001"]}
      geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
    >
      <BackFan />
    </mesh>

    // <primitive receiveShadows={true} object={result.scene} />
  );
});

export default BodyWithGears;
