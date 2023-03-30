import { forwardRef } from "react";
import { Edges } from "@react-three/drei";
import HeliSkids from "./HeliSkids";
import { BODY, HELI_TAIL } from "./lib";


const HeliBody = forwardRef<any>((props, fwdRef) => {
  return (
    <mesh
      // @ts-ignore
      ref={fwdRef}
      castShadow={true}
    >
      <sphereGeometry args={BODY.geometry_args} />
      <meshPhongMaterial attach="material" color="orange" />
      <HeliTail />
      <HeliSkids />
      <Edges />
    </mesh>
  );
});

function HeliTail() {
  return (
    <mesh castShadow={true} position={HELI_TAIL.position}>
      <boxGeometry args={HELI_TAIL.geometry_args} />
      <meshPhongMaterial attach="material" color="#eeeeee" />
    </mesh>
  );
}

export default HeliBody;
