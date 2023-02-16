// @ts-nocheck
import React from "react";
import HeliBody from "./HeliBody";

import useHeliState from "./useHeliState";


const Helicopter = () => {
  const [bodyRef, rotorRef, rotorMeshRef] = useHeliState();

  return (
    <>
      <mesh ref={rotorRef}>
        <mesh ref={rotorMeshRef} position={[0, 0.01, 0]}>
          <boxGeometry args={[0.1, 0.01, 5]} />
        </mesh>

        <meshPhongMaterial attach="material" color="#eeeeee" />
      </mesh>
      <HeliBody ref={bodyRef} />
    </>
  );
};

export default Helicopter;
