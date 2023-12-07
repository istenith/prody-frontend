import React, { useRef } from "react";
import { useFrame , useLoader} from "@react-three/fiber";
import * as THREE from "three";

function Earth(props) {
    const earthTexture = useLoader(THREE.TextureLoader, '/images/earth.png');
    const earthRef = useRef();

    useFrame(() => {
        if (earthRef.current) {
            // Rotate the sphere around its Y axis
            earthRef.current.rotation.y += 0.001; // Adjust rotation speed here
        }
    });

    return (
        <>
            <ambientLight intensity={1.0} color={"#ffffff"} />
            <mesh ref={earthRef}>
                <sphereGeometry args={[2.6, 32, 32]} />
                <meshPhongMaterial specular={"#555555"} shininess={30} map={earthTexture} />
            </mesh>
        </>
    );
}

export default Earth;
