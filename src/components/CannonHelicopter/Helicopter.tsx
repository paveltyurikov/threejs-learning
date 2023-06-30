import React from "react";
import { Edges, Text } from "@react-three/drei";
import { Group, Mesh } from "three";
import { isDevEnv } from "../../lib/isEnv";
import ForceHelper from "../ForceHelper";
import { TEXT_Y_ROTATION } from "../ProfileLedStrip120Cut/lib";
import { SCENE } from "./lib";
import useHeliState from "./useHeliState";


const Helicopter = () => {
  const [bodyRef, rotorRef, rotorMeshRef, pointRef] = useHeliState();

  return (
    <>
      <directionalLight
        castShadow={true}
        shadow-mapSize={[6384, 16384]}
        shadow-camera-far={100}
        shadow-camera-near={0.5}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        shadow-camera-left={100}
        shadow-camera-right={100}
      />

      <mesh ref={rotorRef as React.RefObject<Mesh>}>
        <Text
          position={[2, 2, 2]}
          color="red"
          anchorX="center"
          anchorY="middle"
          rotation={TEXT_Y_ROTATION}
        >
          {rotorRef.current?.position}mm
        </Text>
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
