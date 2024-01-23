import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRouter } from 'next/navigation';

function Earth(props) {
    const earthTexture = useLoader(THREE.TextureLoader, "/images/testTexture.png");
    const earthRef = useRef();
    const mixerRef = useRef();
    const [sphereSize, setSphereSize] = useState(4);
    const { scene, camera } = useThree();
    const router = useRouter();

    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, 5));
    const [animateCamera, setAnimateCamera] = useState(false);

    const updateSphereSize = () => {
        const newSize = window.innerWidth / 700;
        setSphereSize(Math.max(1.3, newSize));
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
            earthRef.current.rotation.y += 0.001;
        }
        if (mixerRef.current) {
            mixerRef.current.update();
        }
        if (animateCamera) {
            camera.position.lerp(cameraTarget, 0.011);
            if (camera.position.distanceTo(cameraTarget) < 0.1) {
                setAnimateCamera(false); // Stop the animation when close enough to target
            }
        }
    });

    const setupAnimation = (gltf, animationClip) => {
        gltf.scene.visible = false;
        scene.add(gltf.scene);
        mixerRef.current = new THREE.AnimationMixer(gltf.scene);
        const action = mixerRef.current.clipAction(animationClip);
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;

        return () => {
            gltf.scene.visible = true;
            action.play();

            mixerRef.current.addEventListener('finished', () => {
                console.log('Animation finished');
                gltf.scene.visible = false;
                
            });
            
        };
    };

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load('/animation/animation.gltf', (gltf) => {
            const cameraActionClip = gltf.animations.find(anim => anim.name === 'CameraAction');
            if (cameraActionClip) {
                const startAnimation = setupAnimation(gltf, cameraActionClip);
                if (earthRef.current) { 
                    earthRef.current.userData.startAnimation = startAnimation;
                }
            } else {
                console.error('CameraAction animation not found in GLTF');
            }
        });
    }, [scene, router]);

    const onEarthClick = () => {
        if (earthRef.current && typeof earthRef.current.userData.startAnimation === 'function') {
            earthRef.current.userData.startAnimation();
            setTimeout(() => {
                router.push('/home');
            }, 1300);        }
         else {
            console.error('not ready.');
        }

        setCameraTarget(new THREE.Vector3(0, 0, -1)); 
        setAnimateCamera(true);
        
    };

    return (
        <>
            <ambientLight intensity={0.7} color={"#0000000"} />
            <mesh ref={earthRef} onClick={onEarthClick}>
                <sphereGeometry args={[sphereSize, 32, 32]} />
                <meshPhongMaterial specular={"#555555"} shininess={30} map={earthTexture} />
            </mesh>
        </>
    );
}

export default Earth
