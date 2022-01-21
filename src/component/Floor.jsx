import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function FLoor(props) {

    console.log(props)
    const floor = useLoader(
        GLTFLoader,
        props.path
    )
    // console.log(model)
    return (
        
        <primitive object={floor.scene}  {...props}></primitive>
        
        
    )
}
