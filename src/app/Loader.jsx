import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
export const LoadingScreen=(props)=>{

    const [started,setStarted]=useState(false)
    const {progress,total,loaded,item}=useProgress();

useEffect(()=>{
    if(progress===100){
        setTimeout (()=>{
            setStarted(true);
        },2000);
        
    }
},[progress,total,loaded,item])
    return(
        
           <div className={`bg-blue-800 fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
           flex items-center justify-center bg-indigo-50
           ${started?"opacity-0":"opacity-100"}`}
           >

        <div className="text-4xl md:text-9xl font-bold text-black relative">
            <div 
            className="absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
            style={{
                width:`${progress}%`,
            }}>
            PRODYOGIKI
            </div>
            <div className="opacity-20">PRODYOGIKI</div>
        </div>
        </div>
    )
};

export default LoadingScreen


// import React from 'react';

// const Loader = () => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div className="rocket" style={{ fontSize: '50px' }}>🚀</div>
//       Loading<span className="dots">
//         <span>.</span><span>.</span><span>.</span>
//       </span>
//       <style>
//         {`
//           .dots span {
//             animation: blink 1.4s infinite both;
//           }
//           .dots span:nth-child(2) {
//             animation-delay: 0.2s;
//           }
//           .dots span:nth-child(3) {
//             animation-delay: 0.4s;
//           }
//           @keyframes blink {
//             0% { opacity: 0; }
//             50% { opacity: 1; }
//             100% { opacity: 0; }
//           }
//           .rocket {
//             animation: fly 2s infinite linear;
//           }
//           @keyframes fly {
//             0% { transform: translateY(0); }
//             50% { transform: translateY(-20px); }
//             100% { transform: translateY(0); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Loader;
