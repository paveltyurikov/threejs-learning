import { usePlane, PlaneProps } from "@react-three/cannon";


const Plane = (props: PlaneProps) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  return (
    // @ts-ignore
    <mesh ref={ref} receiveShadow={true}>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="black" transparent={true} opacity={0.4} />
      <meshStandardMaterial color={"darkorange"} />
    </mesh>
  );
};

export default Plane;
