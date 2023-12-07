import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function Earth(props) {
    const earthTexture = useLoader(THREE.TextureLoader, '/images/earth.png');
    const earthRef = useRef();
    const [sphereSize, setSphereSize] = useState(4);

    const updateSphereSize = () => {
        const newSize = window.innerWidth / 700;
        setSphereSize(Math.max(1.3, newSize)); // Ensure the size is never less than 1
    };

    useEffect(() => {
        updateSphereSize();
        
        window.addEventListener('resize', updateSphereSize);

        return () => {
            window.removeEventListener('resize', updateSphereSize);
        };
    }, []);

    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.001; // Adjust rotation speed here
        }
    });

    return (
        <>
            <ambientLight intensity={1.0} color={"#ffffff"} />
            <mesh ref={earthRef}>
                <sphereGeometry args={[sphereSize, 32, 32]} />
                <meshPhongMaterial specular={"#555555"} shininess={30} map={earthTexture} />
            </mesh>
        </>
    );
}

export default Earth;
