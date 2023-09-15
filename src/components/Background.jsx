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
          transmission={50}
          side={THREE.BackSide}
        >
          {/*<Gradient
            colorA={"#6cc4d7"}
            colorB={"#9e4cd0"}
            axes={"y"}
  />*/}
        </LayerMaterial>
      </Sphere>
    </>
  );
};
