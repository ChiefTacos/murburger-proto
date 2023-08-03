/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/64c078bd21bbda362c9a9db4.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/64c078bd21bbda362c9a9db4.glb')
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Wolf3D_Avatar.skeleton} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
    </group>
  )
}

useGLTF.preload('/64c078bd21bbda362c9a9db4.glb')