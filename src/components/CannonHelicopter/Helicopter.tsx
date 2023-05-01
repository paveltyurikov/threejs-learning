import React from "react";
import { Edges } from "@react-three/drei";
import { Group, Mesh } from "three";
import { isDevEnv } from "../../lib/isEnv";
import ForceHelper from "../ForceHelper";
import { SCENE } from "./lib";
import useHeliState from "./useHeliState";


const Helicopter = () => {
  const [bodyRef, rotorRef, rotorMeshRef, pointRef] = useHeliState();

  return (
    <>
      <mesh ref={rotorRef as React.RefObject<Mesh>}>
        <mesh
          // @ts-ignore
          className="id-heli-rotor"
          ref={rotorMeshRef as React.RefObject<Mesh>}
          position={[0, 0.01, 0]}
        >
          {/*<cylinderGeometry args={[2, 2, .01, 8]} />*/}
          <boxGeometry args={[0.1, 0.01, 5]} />
          <meshNormalMaterial attach="material" transparent={true} />
        </mesh>
      </mesh>
      <group ref={bodyRef as React.RefObject<Group>}>
        <mesh
          // @ts-ignore
          className="id-heli-body"
          castShadow={true}
        >
          <sphereGeometry args={SCENE.HELICOPTER.body.geometry_args} />
          <meshPhongMaterial attach="material" color="orange" />
        </mesh>
        <mesh
          // @ts-ignore
          className="id-heli-tail"
          castShadow={true}
          position={SCENE.HELICOPTER.tail.position}
        >
          <boxGeometry args={SCENE.HELICOPTER.tail.geometry_args} />
          <meshPhongMaterial attach="material" color="#eeeeee" />
        </mesh>
        <mesh
          // @ts-ignore
          className="id-heli-skid-right"
          castShadow={true}
          position={SCENE.HELICOPTER.skid.right.position}
        >
          <boxGeometry args={SCENE.HELICOPTER.skid.right.geometry_args} />
          <meshPhongMaterial attach="material" color="#eeeeee" />
        </mesh>

        <mesh
          // @ts-ignore
          className="id-heli-skid-left"
          castShadow={true}
          position={SCENE.HELICOPTER.skid.left.position}
        >
          <boxGeometry args={SCENE.HELICOPTER.skid.left.geometry_args} />
          <meshPhongMaterial attach="material" color="#eeeeee" />
        </mesh>
        {isDevEnv() ? (
          <>
            <ForceHelper ref={pointRef} size={3} />
            <Edges />
          </>
        ) : null}
      </group>
    </>
  );
};

export default Helicopter;
