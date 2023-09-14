import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import {ambientLight} from '@react-three/drei'


import * as THREE from "three";

export const Background = () => {
  return (
    <>
    {/**<Environment preset="dawn"/> */}
    <ambientLight/>
    <ambientLight/>
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial
          color={"#ffffff"}
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={"black"}
            colorB={"#AB47BC"}
            axes={"y"}
            start={0.8}
            end={-1.5}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
