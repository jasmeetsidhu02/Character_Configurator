import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { pb, useConfiguratorStore } from '../store'
import Assets from '../Assets'

export function Avatar(props) {
  const group = useRef()
  const { nodes } = useGLTF('./models/Armature.glb')
  const customization = useConfiguratorStore((state)=>state.customization)
  return (
    <group castShadow ref={group} {...props} scale={0.2} position={[0,1,0]} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          
          <primitive object={nodes.mixamorigHips} />

          {Object.keys(customization).map((key, index) => (
             customization[key]?.asset?.url &&(
                <Suspense key ={customization[key].asset.id} >
                    <Assets url={pb.files.getUrl(customization[key].asset,customization[key].asset.url)} skeleton={nodes.Plane.skeleton}></Assets>
                </Suspense>
             )
          ))}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Armature.glb')