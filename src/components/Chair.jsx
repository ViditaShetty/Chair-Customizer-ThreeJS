/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber';


import React from "react";
import {OrbitControls, PivotControls, Sphere, pointLight} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { BufferGeometry, MeshStandardMaterial } from 'three';

export function Chair({ opacity, ...props }) {

  
  const helix = useRef();
  useFrame((_state, delta) => {
     helix.current.rotation.z += delta * 0;
  });


  const obj = useLoader(OBJLoader, './models/cloud/chair (2).obj')
  console.log(obj)



  return (
    <group {...props} dispose={null} ref={helix}>
      <Sphere color={'yellow'}/>
      <PivotControls  
        lineWidth={4}
        activeAxes={[true, true, false]}
        rotation={[0,0,0]}
        offset={[0,0,0]}
        anchor={[0,1,0]}
        scale={15.4}
        >
        <mesh
        // rotation={[1, 0, 1]}
        receiveShadow
        geometry={obj.children[0].geometry}
        material={obj.children[0].material}
      >
        <meshStandardMaterial  color={'black'} roughness={20} reflectivity={1} refractionRatio= {0.98} shininess={30} />
      </mesh>



      <mesh
        receiveShadow
        geometry={obj.children[1].geometry}
        material={obj.children[1].material}
        >
           <meshStandardMaterial  color={'brown'} roughness={0} />
        </mesh>
      
      <mesh
        receiveShadow
        geometry={obj.children[2].geometry}
        material={obj.children[2].material}
        >
         <meshStandardMaterial  color={'brown'} roughness={0}  />
      </mesh>

</PivotControls>
      
    </group>
  );
}

