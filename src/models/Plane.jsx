/* eslint-disable react/no-unknown-property */
import React from 'react'
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({isRotating, ...props}) => {
    const { scene ,aniamtions } = useGLTF(planeScene);
    const { actions } = useAnimations
  return (
    <mesh {...props}>
        <primitive object={scene} /> 
    </mesh>
  )
}

export default Plane