import { useEffect } from "react";
import { useThree } from "@react-three/fiber";


const deg2rad = (degrees: number) => degrees * (Math.PI / 180);
const Camera = ({ cam }: any) => {
  const camera = useThree((state) => state.camera);
  useEffect(() => {
    console.log('camera', camera)
    camera.rotation.y=deg2rad(30);
  }, [camera.rotation]);
  return <></>;
};

export default Camera;
