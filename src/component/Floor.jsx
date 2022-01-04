import React from 'react'
import { useBox } from 'use-cannon'
export default function Floor(props) {

    console.log(props);
    const [ref,api] = useBox(()=>({
        args:[5,0.5,5],
        ...props

    }))
    return (
        <mesh ref={ref} {...props} receiveShadow>
        <boxBufferGeometry args={[10, 0.5, 10]} />
        <meshPhysicalMaterial ></meshPhysicalMaterial>
      </mesh>
    )
}
