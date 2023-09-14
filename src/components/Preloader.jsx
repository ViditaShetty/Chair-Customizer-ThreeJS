import React from 'react'
import { GradientTexture } from '@react-three/drei';
import { OrbitControls, VideoTexture,Html } from '@react-three/drei';
import logo from '../components/rotating_logo.svg'
const Preloader = () => {
  return (
    <mesh>
    <Html position={[-1,0.5,0]}>
      <div style={{display:"flex"}}>
      <div style={{ backgroundColor: 'transparent',color:"white",fontSize:"100px",fontFamily:"emoji",marginRight: "-18%",width:"max-content"}}>
        CHAIR 3D
      </div>

        <img src={logo} style={{marginTop:"10%",
        width:"80px",
        transition: "1s all linear",filter: "blur(0px)",
        animation: "rotate 10s linear infinite",
        animationFillMode:" both"}}/>
      </div>
    </Html>
  </mesh>
  )
}

export default Preloader