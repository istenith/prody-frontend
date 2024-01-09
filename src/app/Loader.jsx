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
        
           <div className={`bg-black fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
           flex items-center justify-center bg-indigo-50
           ${started?"opacity-0":"opacity-100"}`}
           >

        <div className="text-4xl md:text-9xl font-bold text-white relative">
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