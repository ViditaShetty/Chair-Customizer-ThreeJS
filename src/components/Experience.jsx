import { Float, Html, OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Airplane } from "./Airplane";
import { Background } from "./Background";
import { Cloud } from "./Cloud";
import {Cloud2} from "./Cloud2";

import { Chair } from "./Chair";

import { Environment,Stars } from "@react-three/drei";

export const Experience = () => {


  const cameraGroup = useRef();
  const scroll = useScroll();


  const airplane = useRef();

  return (
    <>
    {/**<OrbitControls />  */}

    <pointLight position={[1,0,2]} intensity={10}/>
    <pointLight position={[1,1.5,3]} intensity={10} color={'transmission'}/>
    <pointLight position={[1,-0,3.2]} intensity={5} color={'transmission'}/>
    <pointLight position={[1,1.3,3]} intensity={1} color={'transmission'}/>


      <group ref={cameraGroup}>
        <Background />
        <PerspectiveCamera position={[0.2, 0.5, 6.9]} fov={30} makeDefault />
        <group ref={airplane}>
            <Chair
              scale={[0.1/5,0.1/5,0.1/5]}
              rotation={[-Math.PI/2.3,0,-Math.PI/1.3]}
              position={[1,-0.3,2]}
            />
        </group>
      </group>

     
  
  </>

  );
};
