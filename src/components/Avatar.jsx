import React, { Suspense, useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { pb, useConfiguratorStore } from '../store'
import Assets from './Assets'
import { GLTFExporter } from 'three-stdlib'


export function Avatar(props) {
  const group = useRef()
  const { nodes } = useGLTF('./models/Armature.glb')
  const { animations } = useFBX('./models/Idle.fbx')
  const customization = useConfiguratorStore((state)=>state.customization)
  const {actions} = useAnimations(animations, group);
  useEffect(()=>{
    actions["mixamo.com"]?.play();
  },[actions])

  const setDownload =  useConfiguratorStore((state)=>state.setDownload)
  useEffect(() => {
   function download() {
    const exporter = new GLTFExporter();
    exporter.parse(group.current, function (result) {
      save(
        new Blob([result], { type: 'application/octet-stream' }),
        `avatar_${new Date().toLocaleString()}.glb`
      )
    },function (error) {
      console.error(error);
    },{binary:true})
   }
   const link = document.createElement('a');
   link.style.display = 'none';
   document.body.appendChild(link);
   function save(blob, filename) {
     link.href = URL.createObjectURL(blob);
     link.download = filename;
     link.click();
 
   }
   setDownload(download);
  }, [])
 
  return (
    <group  ref={group} {...props} scale={0.2} position={[0,1,0]} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          
          <primitive object={nodes.mixamorigHips} />

          {Object.keys(customization).map((key, index) => (
             customization[key]?.asset?.url &&(
                <Suspense key ={customization[key].asset.id}  >
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