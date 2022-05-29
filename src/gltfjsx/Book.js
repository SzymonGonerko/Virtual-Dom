/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import url from "../objects/Book.glb"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(url)
  return (
    <group rotation={[0, Math.PI / 1.5,0]} scale={[0.24, 0.5, 0.24]} ref={group} {...props} dispose={null}>
      <group position={[-0.39, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Architexture_0.geometry} material={materials.Architexture} />
        <mesh geometry={nodes.Architexture_1.geometry} material={materials.Bookpage} />
      </group>
    </group>
  )
}

useGLTF.preload('/Book.glb')
