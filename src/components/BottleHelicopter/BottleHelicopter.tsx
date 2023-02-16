import { forwardRef } from "react";
import BackFan from "./BackFan";
import BodyWithGears from "./BodyWithGears";
import TopFan from "./TopFan";


const BottleHelicopter = forwardRef<any, { started?: boolean; speed?: number }>(
  ({ started = false, speed = 0 }, ref) => {
    return (
      // @ts-ignore
      <mesh ref={ref} position={[0, 0, 0]}>
        <TopFan />
        <BackFan />
        <BodyWithGears />
      </mesh>
    );
  }
);

export default BottleHelicopter;
