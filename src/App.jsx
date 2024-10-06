
import { Canvas } from "@react-three/fiber";
import UI from "./components/UI";

import Experience from "./Experience";

function App() {
  return (
    <>
    <UI></UI>
      <Canvas
        camera={{
          position: [0, 1, 5],
          fov:15
        }}
        
        
      >
      {/* <fog attach="fog" args={["#555", 0, 10]} /> */}
        <color attach="background" args={["#555"]} />
        <group position-y={-1}>

       <Experience></Experience>
        </group>
      </Canvas>
    </>
  );
}

export default App;
