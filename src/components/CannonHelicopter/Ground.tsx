import { usePlane } from "@react-three/cannon";


const PLANE_PROPS = () => ({
  mass: 0,
  rotation: [-Math.PI / 2, 0, 0],
  material: "groundMaterial",
});

const PLANE_GEOMETRY_ARGS = [100, 100] as const;
const Ground = () => {
  // @ts-ignore
  const [ref] = usePlane(PLANE_PROPS);

  return (
    // @ts-ignore
    <mesh ref={ref} receiveShadow={true}>
      <planeGeometry
        attach="geometry"
        // @ts-ignore
        args={PLANE_GEOMETRY_ARGS}
      />
      <meshPhongMaterial attach="material" color="#eeeeee" />
    </mesh>
  );
};

export default Ground;
