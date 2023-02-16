// @ts-nocheck
import { useBox } from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";


const Model: React.FC<{ position: [number, number, number] }> = ({
  position = [0, 0, 0],
}) => {
  const [ref, {angularVelocity, applyLocalForce}] = useBox(() => ({
    mass: .1,
    rotation: [0.4, 0.2, 0.5],
    position:[...position],
  }));

  useFrame((_, delta)=>{
  // console.log(ref, rest)
    // @ts-ignore
    //angularVelocity.set(20,0,0)
    //console.log(angularVelocity)
  })
  //console.log(ref, {rest})


  return (

    <mesh
        // @ts-ignore
        ref={ref}
        position={position} receiveShadow={true} castShadow={true}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Model;
