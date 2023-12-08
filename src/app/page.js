"use client";

import React ,{Suspense} from "react";
import "./homeComponents/animation.css";
import { Canvas } from "@react-three/fiber";
import Navbar from "./components/Navbar/Navbar"
import Earth from "./homeComponents/earth.jsx";

import styled from "styled-components";
import { OrbitControls, Stars ,Text } from "@react-three/drei";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh; 
`;

function App() {
  return (
    <>
      <Navbar />   
      <CanvasContainer>
        <Canvas background="black" camera={{ position: [0, 0, 5], fov: 70 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 5]} intensity={0.5} />
            <Earth />
            <OrbitControls enableZoom={false}/>
            <Stars /> 
            <Text
              color="white"
              anchorX="center"
              anchorY="top"
              font="/fonts/lemonMilk/LEMONMILK-Medium.otf"
              fontSize={0.1}
              position={[0, 0.65, 3]}>Announcing</Text>
              <Text
              color="whitesmoke"
              anchorX="center"
              anchorY="middle"
              fontSize={0.5}
              font="/fonts/beyonders/Beyonders.ttf"
              position={[0, 0.03, 3]}>Prodyogiki</Text>
              <Text
              color="white"
              anchorX="center"
              anchorY="bottom"
              fontSize={0.11}
              font="/fonts/lemonMilk/LEMONMILK-Medium.otf"
              position={[0, -0.65, 3]}>by ISTE@NITH</Text>
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default App;
