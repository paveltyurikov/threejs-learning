import React from "react";
import Helicopter from "components/CannonHelicopter/Helicopter";
import DualShock4Provider from "./DualShock4Provider";
import Scene from "./Scene";


const CanonHelicopter = () => {
  return (
    <DualShock4Provider>
      <Scene>
        <Helicopter />
      </Scene>
    </DualShock4Provider>
  );
};

export default CanonHelicopter;
