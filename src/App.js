import { Suspense } from 'react';
import './App.css';
import Model from './VersantHealth';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });


const CameraControls = () => {  
  const {
    camera,
    gl: { domElement },
  } = useThree();
  
  const controls = useRef();
  useFrame((state) =>{ controls.current.update()});

  return <orbitControls  ref={controls}  args={[camera, domElement]}  target={[3,1,7]}
  // maxAzimuthAngle={Math.PI / 4}
  // maxPolarAngle={Math.PI}
  // minAzimuthAngle={-Math.PI / 4}
  // minPolarAngle={0}
  />;
};

function App() {

  
  return (
    <div className="content" id="content">
      <Canvas>
        <CameraControls  />
        <ambientLight />
        <Suspense fallback={null}>
          <Model></Model>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
