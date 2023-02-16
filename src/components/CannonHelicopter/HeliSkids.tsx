import { SKID_LEFT, SKID_RIGHT } from "./lib";


function SkidRight() {
  return (
    <mesh castShadow={true} position={SKID_RIGHT.position}>
      <boxGeometry args={SKID_RIGHT.geometry_args} />
      <meshPhongMaterial attach="material" color="#eeeeee" />
    </mesh>
  );
}

function SkidLeft() {
  return (
    <mesh castShadow={true} position={SKID_LEFT.position}>
      <boxGeometry args={SKID_LEFT.geometry_args} />
      <meshPhongMaterial attach="material" color="#eeeeee" />
    </mesh>
  );
}
const HeliSkids = () => {
  return (
    <>
      <SkidLeft />
      <SkidRight />
    </>
  );
};

export default HeliSkids;
