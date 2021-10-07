import './App.css';
import Shoe from './components/Shoe'
import Picker from './components/Picker'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import React, { useRef, useState, useEffect } from 'react';


function App() {
  return (
    <>
    <header>3D Shoe Configurator</header>
      <Picker />
      <Canvas className="canvas" shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          <Shoe />
          <Environment preset="city" />
          <ContactShadows 
            rotation-x={Math.PI / 2} 
            position={[0, -0.8, 0]} 
            opacity={0.25} 
            width={10} 
            height={10} 
            blur={1.5} 
            far={0.8} 
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
