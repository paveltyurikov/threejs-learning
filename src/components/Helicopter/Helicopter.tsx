// @ts-nocheck
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// const skidGeometry = new THREE.BoxGeometry(0.1, 0.05, 1.5);
// const skidLeftMesh = new THREE.Mesh(skidGeometry, phongMaterial);
// const skidRightMesh = new THREE.Mesh(skidGeometry, phongMaterial);
// skidLeftMesh.position.set(-0.5, -0.45, 0);
// skidRightMesh.position.set(0.5, -0.45, 0);
// skidLeftMesh.castShadow = true;
// skidRightMesh.castShadow = true;
// heliBodyMesh.add(skidLeftMesh);
// heliBodyMesh.add(skidRightMesh);
const BodyMesh = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.66]} />
      <meshStandardMaterial />
    </mesh>
  );
};

const RailLeft = () => {
  return (
    <mesh position={[-0.5, -0.66, 0]}>
      <boxGeometry args={[0.1, 0.05, 1.5]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const RailRight = () => {
  return (
    <mesh position={[0.5, -0.66, 0]}>
      <boxGeometry args={[0.1, 0.05, 1.5]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const Rotor = () => {
  const ref = useRef();
  useFrame((_, delta) => {
      ref.current.rotateY(ref.current.position.y * delta * 2);
  });
  return (
    <mesh position={[0, 0.76, 0]} ref={ref}>
      <boxGeometry args={[0.1, 0.01, 5]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const Tail = () => {
  return (
    <mesh position={[0, 0, 1.66]}>
      <boxGeometry args={[0.1, 0.1, 2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const Helicopter = () => {
    const ref = useRef();
    useFrame((_, delta) => {
        //console.log(ref.current.position.y, delta)
      // ref.current.position.y += delta * 2;
  });
  return (
    <group ref={ref} position={[1, 1.66-.66, 1]}>
      <Rotor />
      <BodyMesh />
      <Tail />
      <RailLeft />
      <RailRight />
    </group>
  );
};

export default Helicopter;
