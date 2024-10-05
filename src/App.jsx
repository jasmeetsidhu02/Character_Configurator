
import { Canvas } from "@react-three/fiber";
import UI from "./components/UI";

import Experience from "./Experience";

function App() {
  return (
    <>
    <UI></UI>
      <Canvas
        camera={{
          position: [-1, 1, 5],
          fov:65
        }}
      >
        <color attach="background" args={["#555"]} />
        <group position-y={-1}>

       <Experience></Experience>
        </group>
      </Canvas>
    </>
  );
}

export default App;
