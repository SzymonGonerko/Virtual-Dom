/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import url from "../objects/Chair.glb"
import { useBox } from "@react-three/cannon";

export default function Model({ ...props }) {
  const [firstChair] = useBox(() => ({
    mass: 10,
    args: [0.45, 1, 0.45],
    material: {
      friction: 2,
      restitution: 10
    },
    ...props
  }));



  const { nodes, materials } = useGLTF(url)
  return (<>
    <group ref={firstChair} {...props} dispose={null}>
      <group position={[0, -0.4, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.007}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['01_-_Default']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['01_-_Default']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['01_-_Default']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['01_-_Default']} />
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/Chair.glb')
