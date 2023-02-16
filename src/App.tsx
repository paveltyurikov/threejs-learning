// @ts-nocheck
import { Environment, Sky } from "@react-three/drei";
import BottleHelicopter from "./components/BottleHelicopter/BottleHelicopter";
import Scene from "./components/Scene/Scene";
import Layout from "./Layout/Layout";


function App() {
  return (
    <Layout>
      <Scene
          isAxesHelperEnabled
          isOrbitControlsEnabled
        camera={{ fov: 45, near: 0.2, far: 200, position: [-30, 35, -50] }}
      >
        <BottleHelicopter position={[5, 5, 5]} />

      </Scene>
    </Layout>
  );
}

export default App;
