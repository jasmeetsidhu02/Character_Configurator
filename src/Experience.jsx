import React from 'react'
import { Avatar } from './components/Avatar'
import { Backdrop, Environment, OrbitControls } from '@react-three/drei'

function Experience() {
  return (
    <>
    <Environment preset="sunset" ></Environment>
     <OrbitControls />
     <Backdrop scale={10} receiveShadow={true} ></Backdrop>
     <directionalLight position={[5,5,5]} intensity={2}  castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-bias={-0.0001} />
     {/* <directionalLight position={[-5,5,5]} intensity={0.7}></directionalLight> */}
     {/* <directionalLight position={[1,0.1,-5]} intensity={3} color={"red"}></directionalLight> */}
     <Avatar></Avatar>

    </>
  )
}

export default Experience