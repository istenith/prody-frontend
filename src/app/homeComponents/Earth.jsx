import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRouter } from 'next/navigation';
import { useSpring } from '@react-spring/three';

function Earth(props) {
    // Load the texture for the Earth model
    const earthTexture = useLoader(THREE.TextureLoader, '/images/earth.png');

    // Reference to the Earth mesh
    const earthRef = useRef();

    // Reference for the Animation Mixer
    const mixerRef = useRef();

    // State to manage the size of the sphere based on the viewport width
    const [sphereSize, setSphereSize] = useState(4);

    // Access the Three.js scene and camera from react-three/fiber
    const {scene, camera } = useThree();

    // Spring for camera position animation
    const [cameraSpring, setCameraSpring] = useSpring(() => ({ position: [0, 0, 5], config: { duration: 4000 } })); // Adjust duration for speed

    // Router from Next.js for navigation
    const router = useRouter();

    // Update the size of the sphere based on the viewport width
    const updateSphereSize = () => {
        const newSize = window.innerWidth / 700;
        setSphereSize(Math.max(1.3, newSize));
    };

    // Handle window resize
    useEffect(() => {
        updateSphereSize();
        window.addEventListener('resize', updateSphereSize);
        return () => {
            window.removeEventListener('resize', updateSphereSize);
        };
    }, []);

    // Rotate the Earth model and update the camera position on each frame
    useFrame((state,delta) => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.001;
        }
        if (mixerRef.current) {
            mixerRef.current.update(delta);
        }

        // Update camera position smoothly
        camera.position.lerp(new THREE.Vector3(...cameraSpring.position.get()), 0.1);
    });

    // Function to set up the animation
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
                router.push('/events');
            });
        };
    };

    // Load the animation and assign the start function
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
    }, [scene, router]);

    // Handle Earth click to start the animation and zoom into the Earth
    const onEarthClick = () => {
        if (earthRef.current && typeof earthRef.current.userData.startAnimation === 'function') {
            earthRef.current.userData.startAnimation();
        } else {
            console.error('Start animation function is not ready.');
        }

        // Update camera spring to zoom in
        setCameraSpring({ position: [0, 0, -10] }); // Adjust these values for desired zoom level
    };

    return (
        <>
            <ambientLight intensity={1.0} color={"#ffffff"} />
            <mesh ref={earthRef} onClick={onEarthClick}>
                <sphereGeometry args={[sphereSize, 32, 32]} />
                <meshPhongMaterial specular={"#555555"} shininess={30} map={earthTexture} />
            </mesh>
        </>
    );
}

export default Earth;
