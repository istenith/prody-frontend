import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Add this line
import { useRouter } from 'next/navigation';
import { useSpring } from '@react-spring/three';

function Earth(props) {
    const earthTexture = useLoader(THREE.TextureLoader, '/images/earth.png');
    const earthRef = useRef();
    const mixerRef = useRef();
    const [sphereSize, setSphereSize] = useState(4);
    const {scene, camera } = useThree();
    const [cameraSpring, setCameraSpring] = useSpring(() => ({ position: [0, 0, 6], config: { duration: 500 } })); // Adjust duration for speed
    const router = useRouter();
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
    useFrame((state,delta) => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.001;
        }
        if (mixerRef.current) {
            mixerRef.current.update(delta);
        }
        camera.position.lerp(new THREE.Vector3(...cameraSpring.position.get()), 0.1);
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
            action.reset().play();
            mixerRef.current.addEventListener('finished', () => {
                gltf.scene.visible = false;
                router.push('/home');
            });

        };
    };

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load('./animation/animation.gltf', (gltf) => {
            const cameraActionClip = gltf.animations.find(anim => anim.name === 'CameraAction');
            if (cameraActionClip) {
                const startAnimation = setupAnimation(gltf, cameraActionClip);
                if (earthRef.current) {
                    earthRef.current.userData.startAnimation = startAnimation;
                }
            } else {
                console.error('CameraAction animation not found in GLTF file.');
            }
        });
    }, [scene, router, setupAnimation]);

    const onEarthClick = () => {
        if (earthRef.current && typeof earthRef.current.userData.startAnimation === 'function') {
            earthRef.current.userData.startAnimation();
        } else {
            console.error('Start animation function is not ready.');
        }

        setCameraSpring({ position: [0, 0, 2] }); 
    };

    return (
        <>
            <ambientLight intensity={1.0} color={"#ffffff"} />
            <mesh ref={earthRef} onClick={onEarthClick}>
                <sphereGeometry args={[sphereSize, 32, 32]} />
                <meshPhongMaterial specular={"#555555"} shininess={10} map={earthTexture} />
            </mesh>
        </>
    );
}

export default Earth;
