// import ReactDOM from 'react-dom'
// import { Canvas, useThree } from '@react-three/fiber'
import { render } from 'react-three-fiber';
import { Physics } from 'use-cannon';
import * as THREE from 'three'
import { Canvas, useFrame, extend, useThree, useLoader } from "react-three-fiber"
import { Suspense, useRef } from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Points } from 'three';
import { BoxBufferGeometry } from 'three';
import Bulb from './component/Bulb';
import Background from './component/Background';
import Floor from './component/Floor';
import { useBox } from 'use-cannon';


import Dragable from './component/Dragable';

// import { useThree } from '@react-three/fiber'


// import logo from './logo.svg';
import './App.css';
import Model from './component/Model';
// import { useRef } from 'react';

extend({ OrbitControls })
const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <orbitControls attach="orbitControls" args={[camera, gl.domElement]} />
  )

}

function App() {


  
  // const Floor = (props) => {
  //   return (
     
  //   )
  // }

  const Box = (props) => {
    const [ref,api] = useBox(()=>({
     mass:1, ...props
    }))
    console.log(props)
    // const ref = useRef();
    const texture = useLoader(THREE.TextureLoader,'/wall.jpg');
    // useFrame(state => {
    //   // console.log(state)
    //   ref.current.rotation.x += 0.01;
    //   ref.current.rotation.y += 0.05;
    //   ref.current.rotation.z  += 0.01;

    // })

    const handlepointerdown=(e)=>{
console.log(e);
e.object.active=true;
if(window.activeMesh){
  scaleDown(window.activeMesh)
  window.activeMesh.active= false;
}
window.activeMesh = e.object
    }

    const handerpointerenter=(e)=>{
      console.log(e);
      e.object.scale.x= 1.5;
      e.object.scale.y= 1.5;
      e.object.scale.z= 1.5;

    }
    const handerpointerleave=(e)=>{
      if(!e.object.active){
      e.object.scale.x= 1;
      e.object.scale.y= 1;
      e.object.scale.z= 1;

    }
  }
   const scaleDown = object => {
    object.scale.x= 1;
    object.scale.y= 1;
    object.scale.z= 1;
   }

    return (
      <mesh ref={ref} api={api} {...props} castShadow 
      receiveShadow 
      onPointerDown={handlepointerdown}
      onPointerEnter={handerpointerenter}
      onPointerLeave={handerpointerleave}
      >
        {/* <sphereBufferGeometry args={[1,100,100]}/> */}
        <boxBufferGeometry args={[1,1,1]}></boxBufferGeometry>
        <meshPhysicalMaterial
        map={texture}
          // opacity={0.6} 
          // visible={true} 
          // wireframe 
          // transparent 
          // metalness={0.5}
          // roughness={1}
          // transmission={1}
          // reflectivity={1}
          // fog={false} 
          // color="white" 
          />

      </mesh>
    )
  }

  // const Bulb = (props) => {
  //   return (
  //     <mesh {...props}>
  //       <pointLight castShadow />
  //       <sphereBufferGeometry args={[0.2, 20, 20]}></sphereBufferGeometry>
  //       <meshPhongMaterial emissive="yellow"></meshPhongMaterial>
  //     </mesh>
  //   )
  // }



  return (
    <div style={{width:"100vh",height:"100vh"}}>
<div style={{position:"absolute",zIndex:1}}>
<div style={{background:"blue",height:50,width:50}}></div>
<div style={{background:"yellow",height:50,width:50}}></div>
<div style={{background:"blue",height:50,width:50}}></div>
</div>
      
      <Canvas camera={{ position: [3,3,3] }} style={{ background: "black", width: "100vh", height: "100vh" }}>
        {/* <shadowMap></shadowMap> */}
        <Physics>
        <Dragable>
        {/* <Suspense fallback={null}>
        <Box position={[2, 2, 0]} />
        </Suspense> */}
        {/* <Suspense fallback={null}>
        <Box position={[-2, 1, 0]} />
        </Suspense> */}
        </Dragable>
        <Suspense fallback={null}>
        <Background />
        </Suspense>
        <Dragable transformGroup>
        <Suspense fallback={null}>
        {/* <ambientLight></ambientLight> */}
        <Model 
        scale={new Array(3).fill(0.5)} 
        path="/logo.gltf"
        position={[0,-1.7,0]}
        />
        </Suspense>
        </Dragable>
       
        <Floor position={[0, -0.3, 0]} />
        </Physics>
        <Orbit />
        <Bulb position={[0, 5, 0]} />
        {/* <fog attach='fog' args={['white', 1, 20]}></fog> */}
        <ambientLight intensity={0.4} />
        <axesHelper args={[2]} />
      </Canvas>

    </div>

  )
};



export default App;

