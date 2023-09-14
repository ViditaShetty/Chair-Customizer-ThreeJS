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
const LINE_NB_POINTS = 12000;

export const Experience = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );
    const curPoint = linePoints[curPointIndex];
    const pointAhead =
      linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

    const xDisplacement = (pointAhead.x - curPoint.x) * 80;

    // Math.PI / 2 -> LEFT
    // -Math.PI / 2 -> RIGHT

    const angleRotation =
      (xDisplacement < 0 ? 1 : -1) *
      Math.min(Math.abs(xDisplacement), Math.PI / 3);

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angleRotation
      )
    );
    const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        cameraGroup.current.rotation.x,
        angleRotation,
        cameraGroup.current.rotation.z
      )
    );

    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
    cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);

    cameraGroup.current.position.lerp(curPoint, delta * 24);
  });

  const airplane = useRef();

  return (
    <>
    {/**<OrbitControls enableZoom={false}  /> */} 
     <Stars radius={10} depth={70} count={800} factor={4} saturation={10} fade speed={4} />

     <pointLight position={[0,0,0]} intensity={1}/>
      <pointLight position= {[-10, 10, -3]}  intensity={20} color={'orange'}/>
      <pointLight position= {[2.5, -0.5, -2]}  intensity={20} color={'orange'} />
      <pointLight position= {[0, -2.5,-0.5]}  intensity={20} color={'red'}/>
      <pointLight position= {[0, -4.5,-0.5]}  intensity={500} color={'red'}/>
      <pointLight position= {[3, 4, -5]} intensity={100} color={'orange'}/>


      <group ref={cameraGroup}>
        <Background />
        <PerspectiveCamera position={[0.2, 0.5, 6.9]} fov={30} makeDefault />
        <group ref={airplane}>
      
            <Chair
              scale={[2.3,2.3,2.3]}
              rotation={[0,-Math.PI/2,0]}
              position-y={-2}
              position-x={1.6}
              position-z={-2}
            />
        </group>
      </group>

     
  
  </>

  );
};
