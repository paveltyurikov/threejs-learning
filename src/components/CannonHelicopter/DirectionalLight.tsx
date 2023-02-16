import React from "react";


const DirectionalLight = () => {
  return (
    <directionalLight castShadow={true} shadow-mapSize={[6384, 16384]}>
      <perspectiveCamera
        attach="shadow-camera"
        far={100}
        near={0.5}
        args={[-100, 100, 100, -100]}
      />
    </directionalLight>
  );
};

export default DirectionalLight;
