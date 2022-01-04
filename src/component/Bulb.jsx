import React from 'react'

export default function Bulb(props) {
    
    return (
        <mesh {...props}>
        <pointLight castShadow />
        <sphereBufferGeometry args={[0.2, 20, 20]}></sphereBufferGeometry>
        <meshPhongMaterial emissive="yellow"></meshPhongMaterial>
      </mesh>
    )
}
