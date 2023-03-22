import React from "react";


const Cylinder = () => {
  return (
    <mesh position={[0, 1, 1]}>
      <cylinderGeometry args={[2, 2, .01, 8]} />
    </mesh>
  );
};

export default Cylinder;
