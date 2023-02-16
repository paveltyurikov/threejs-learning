import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const BodyWithGears = () => {
  const result = useLoader(GLTFLoader, "models/HeliBody.glb");
  return <primitive object={result.scene} />;
};

export default BodyWithGears;
