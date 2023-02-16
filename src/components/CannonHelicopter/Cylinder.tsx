import React from "react";


const Cylinder = () => {
  return (
    <mesh position={[0, 1, 1]}>
      <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
      <meshPhongMaterial attach="material" color="#eeeeee" />
    </mesh>
  );
};

export default Cylinder;
