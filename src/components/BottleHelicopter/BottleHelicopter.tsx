// @ts-nocheck
import { forwardRef, useRef } from "react";
import { BufferGeometry, Material, Mesh } from "three";
import { Position } from "three/examples/jsm/utils/ShadowMapViewer";

import BodyWithGears from "./BodyWithGears";
import { useHeliRef } from "./lib";
import TopFan from "./TopFan";


const BottleHelicopter = forwardRef<
  any,
  { started?: boolean; speed?: number; position?: Position }
>(({ started = false, speed = 0, position }, ref) => {
  const heliRef = useHeliRef();

  const bodyRef = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(
    null
  );
  const fanRef = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(
    null
  );

  // usePointToPointConstraint(
  //   bodyRef,
  //   fanRef,
  //   { pivotA: [0,0,0], pivotB: [0,3,0] },
  //   []
  // );

  return (
    // @ts-ignore
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={position}>
      <mesh scale={0.5}>
        <TopFan ref={fanRef} />
        <BodyWithGears ref={bodyRef} />
      </mesh>
    </mesh>
  );
});

export default BottleHelicopter;
