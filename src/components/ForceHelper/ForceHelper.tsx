// @ts-nocheck
// TODO remove ts-nocheck
import React from "react";
import { Triplet } from "@react-three/cannon";
import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export type ForceHelperProps = {
  size: number;
};

const ForceHelper = React.forwardRef<any, ForceHelperProps>(({ size }, ref) => {
  const lineRef = React.useRef<typeof Line>(null);
  const [state, setState] = React.useState<Triplet>([0, 1, 0]);
  useFrame((_) => {
    if (lineRef?.current && ref?.current?.force) {
      setState(ref?.current?.force);
    }
  }, []);

  return (
    <Line
      ref={lineRef}
      points={[[0, 0, 0], state]}
      color={"red"}
      lineWidth={3}
      segments
      dashed={false}
    />
  );
});

export default ForceHelper;
