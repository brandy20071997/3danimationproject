import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {

    console.log(props)
    const model = useLoader(
        GLTFLoader,
        props.path
    )
    console.log(model)
    return (
        
        <primitive object={model.scene}  {...props}></primitive>
        
        
    )
}
