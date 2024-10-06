import React from 'react'
import { Avatar } from './components/Avatar'
import { Backdrop, Environment, OrbitControls } from '@react-three/drei'

function Experience() {
  return (
    <>
    <Environment preset="sunset" ></Environment>
     <OrbitControls minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4} ></OrbitControls>
     <Backdrop  floor={0.25}  segments={20} scale={10}  >
     <meshStandardMaterial color="#555" />
     </Backdrop>
     <directionalLight position={[5,10,5]} intensity={2}  castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} shadow-bias={-0.0001} />
     {/* <directionalLight position={[-5,5,5]} intensity={0.7}></directionalLight> */}
     {/* <directionalLight position={[1,0.1,-5]} intensity={3} color={"red"}></directionalLight> */}
     <Avatar></Avatar>

    </>
  )
}

export default Experience