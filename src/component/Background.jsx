import React from 'react'
import * as THREE from 'three'
import { useMemo } from 'react';
import { Canvas, useFrame, extend, useThree, useLoader } from "react-three-fiber"


export default function Background(props) {
    const texture = useLoader(THREE.TextureLoader,"/wall-grid.png");
    const {gl} = useThree()
    
const formated = useMemo(()=>

    new THREE.WebGLCubeRenderTarget(
        texture.image.height
        
        ).fromEquirectangularTexture(gl,texture)
        
,[])
    return (
<primitive attach='background' object={formated}></primitive>
 )
}
