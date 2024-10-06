import { useGLTF } from "@react-three/drei";
import React, { useMemo } from "react";

const Assets = ({ url, skeleton }) => {
  const { scene } = useGLTF(url);
  const attachedItems = useMemo(() => {
    const items = [];
    scene.traverse((child) => {
      if (child.isMesh) {
        items.push({
          geometry: child.geometry,
          material: child.material,
        });
      }
    });
    return items;
  }, [scene]);
  return (
    <>
      {attachedItems.map((item, index) => (
        <skinnedMesh
      
          key={index}
          skeleton={skeleton}
          geometry={item.geometry}
          material={item.material}
        ></skinnedMesh>
      ))}
    </>
  );
};

export default Assets;
