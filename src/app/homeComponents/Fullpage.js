"use client";

import React ,{Suspense ,useState ,useEffect} from "react";
import "./animation.css";
import dynamic from 'next/dynamic';
// import { Canvas } from "@react-three/fiber";
import Loader from "../LoaderEvent.jsx";
import styled from "styled-components";
// import { OrbitControls, Stars ,Text } from "@react-three/drei";

const Canvas = dynamic(
    () => import('@react-three/fiber').then((mod) => mod.Canvas),
    { ssr: false }
  );
  
  // Dynamically import the necessary components from @react-three/drei
  const OrbitControls = dynamic(
    () => import('@react-three/drei').then((mod) => mod.OrbitControls),
    { ssr: false }
  );
  
  const Stars = dynamic(
    () => import('@react-three/drei').then((mod) => mod.Stars),
    { ssr: false }
  );
  
  const Text = dynamic(
    () => import('@react-three/drei').then((mod) => mod.Text),
    { ssr: false }
  );    

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh; 
`;


const   Earth = dynamic(
  () => import('./Earth'),
  { ssr: false } 
);

function App() {

  const [text, setText] = useState(0.43);
  const [text2, setText2] = useState(0.11);
  const [text3, setText3] = useState(0.05);

  const [loading, setLoading] = useState(true);

  const overlayTextStyle = {
    zIndex: "1",
    fontFamily: "nasa",
    position: 'fixed',
    top: window.innerWidth > 768 ? "50%" : "54%",  
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: window.innerWidth > 768 ? "4rem" : "1.5rem"  
};



useEffect(() => {
  const fetchData = async () => {
    await new Promise(resolve => setTimeout(resolve, 4500));
    setLoading(false);
  };

  fetchData();

  if (typeof window !== "undefined") {
      const updateTextSize = () => {
          const newSize = window.innerWidth / 5000;
          setText(Math.max(0.11, newSize));
          setText2(Math.max(0.09, newSize/2));
          setText3(Math.min(0.1, newSize/1.5));
      };

      updateTextSize();
      window.addEventListener('resize', updateTextSize);
      return () => {
          window.removeEventListener('resize', updateTextSize);
      };
  }
}, []);




  return (
    
    <>
     <div>
      {loading && (
        <Loader />
      )    
        
      }
    </div> 
    
      <CanvasContainer>

      <div>
      {!loading && (
        <>

        <h1 className="" style={{
              fontFamily: "nasa",
              position: 'fixed',
              top: '10%',
              textAlign:'center',
              left: window.innerWidth > 768 ? "50%" : "53%",
              transform: 'translate(-50%, -50%)',
              fontSize: window.innerWidth > 768 ? "19px" : "10px"  
            }}>
              Click to Enter The EXOPLANET
          </h1>
         <br />
         <div className="overlay-text" style={overlayTextStyle}>
              PRODYOGIKI        
          </div>
            </>
        )       
      }
    </div> 
                            
        <Canvas background="black" camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 5]} intensity={0.5} />
           
            <Earth />
            <OrbitControls  enableRotate={false} />
            <Stars /> 
            
            {/* <Text className="spaceFont"
              color="white"
              anchorX="center"
              anchorY="top"
            
              font="/fonts/lemonMilk/LEMONMILK-Medium.otf"
              fontSize={text3}
              position={[0, 1.18, 5]}>Click to Enter The EXOPLANET</Text> */}
            {/* <Text className="prody-text"
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
              position={[0, -0.65, 5]}>ISTE NITH</Text> */}
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default App;
