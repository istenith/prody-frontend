"use client";

import React ,{Suspense} from "react";
import "./homeComponents/animation.css";
import { Canvas } from "@react-three/fiber";

import Earth from "./homeComponents/earth.jsx";

import styled from "styled-components";
import { OrbitControls, Stars } from "@react-three/drei";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh; 
`;

function App() {
  return (
    <CanvasContainer>
      <Canvas background="black" camera={{ position: [0, 0, 5], fov: 70 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 0, 5]} intensity={0.5} />
          <Earth />
          <OrbitControls /> // Allows for camera movement with mouse interaction
          <Stars /> // Adds stars to the background for a better visual effect
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
