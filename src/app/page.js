"use client";

import React ,{Suspense ,useState ,useEffect} from "react";
import "./homeComponents/animation.css";
import { Canvas } from "@react-three/fiber";
import Navbar from "./components/Navbar/Navbar"
import Earth from "./homeComponents/Earth.jsx";
import Loader from "./Loader.jsx";

import styled from "styled-components";
import { OrbitControls, Stars ,Text } from "@react-three/drei";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh; 
`;

function App() {

  const [text, setText] = useState(0.43);
  const [text2, setText2] = useState(0.11);
  const [text3, setText3] = useState(0.05);

  const [loading, setLoading] = useState(true);

  const updateTextSize = () => {
    const newSize = window.innerWidth / 5000;
    setText(Math.max(0.11, newSize));
    setText2(Math.max(0.09, newSize/2));
    setText3(Math.min(0.1, newSize/1.5));


};

useEffect(() => {
    // Simulate an asynchronous task
    const fetchData = async () => {
      // Your asynchronous task goes here
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  updateTextSize();
  window.addEventListener('resize', updateTextSize);
  return () => {
      window.removeEventListener('resize', updateTextSize);
  };
}, []);


  return (
    
    <>
     <div>
      {loading && (
        <Loader />
      )    
        
      }
    </div> 
    <Navbar isHomePage={true}/>
      <CanvasContainer>
        <Canvas background="black" camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 5]} intensity={0.5} />
            <Earth />
            <OrbitControls  enableRotate={false} />
            <Stars /> 
            <Text className="spaceFont"
              color="white"
              anchorX="center"
              anchorY="top"
            
              font="/fonts/nasa/spaceAge.ttf"
              fontSize={text3}
              position={[0, 1.18, 5]}>Click to Enter The EXOPLANET</Text>
            <Text className="prody-text"
              color="white"
              anchorX="center"
              anchorY="top"
              font="/fonts/lemonMilk/LEMONMILK-Medium.otf"
              fontSize={text2}
              position={[0, 0.65, 5]}>Announcing</Text>
              <Text
              color="whitesmoke"
              anchorX="center"
              anchorY="middle"
              fontSize={text}
              font="/fonts/beyonders/Beyonders.ttf"
              position={[0, 0.03, 5]}>Prodyogiki</Text>
              <Text
              color="white"
              anchorX="center"
              anchorY="bottom"
              fontSize={text2}
              font="/fonts/lemonMilk/LEMONMILK-Medium.otf"
              position={[0, -0.65, 5]}>ISTE NITH</Text>
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default App;
