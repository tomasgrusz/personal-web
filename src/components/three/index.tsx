import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Logo from './Logo';
import { Euler, Group, SpotLight } from 'three';

const Model = () => {

    const logo = useRef<Group>(new Group());
    const lightHelper = useRef<SpotLight>(null!);

    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    const [rotationVector, setRotationVector] = useState<Euler>(new Euler( 0, 0, 0, 'XYZ' ));

    const bgColor = '#10002b';

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {window.removeEventListener('mousemove', handleMouseMove);};
    }, []);

    useFrame(() => {
        setRotationVector(new Euler(- Math.PI / 8 + (Math.PI / 4 * mousePos.y / window.innerHeight), - Math.PI / 6 + (Math.PI / 3 * mousePos.x / window.innerWidth), 0));
    })

    return (
        <>
                <Logo ref={logo} castShadow rotation={rotationVector}/>
                <spotLight ref={lightHelper} position={[0, 5, 2]} color={'#fff'} intensity={5} distance={8} angle={Math.PI / 10} castShadow decay={1.5} penumbra={0.25} shadow-mapSize-height={4096} shadow-mapSize-width={4096} shadow-bias={-0.0005} />
                <ambientLight color={'#159'} intensity={0.5}/>
                <mesh position={[0,-2,0]} receiveShadow>
                    <boxGeometry args={[16, 1, 16]} />
                    <meshStandardMaterial color={bgColor} emissive={bgColor} emissiveIntensity={1.5}/>
                </mesh>
                <mesh position={[0, 8 ,0]} receiveShadow>
                    <boxGeometry args={[16, 1, 16]} />
                    <meshStandardMaterial color={bgColor} emissive={bgColor} emissiveIntensity={1.5}/>
                </mesh>
                <mesh position={[0, 0 , -8]} receiveShadow>
                    <boxGeometry args={[16, 16, 1]} />
                    <meshStandardMaterial color={bgColor} emissive={bgColor} emissiveIntensity={1.5}/>
                </mesh>
                <mesh position={[0, 0 , 8]} receiveShadow>
                    <boxGeometry args={[16, 16, 1]} />
                    <meshStandardMaterial color={bgColor} emissive={bgColor} emissiveIntensity={1.5}/>
                </mesh>
                <mesh position={[8, 0 , 0]} receiveShadow>
                    <boxGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color={bgColor} emissive={bgColor} emissiveIntensity={1.5}/>
                </mesh>
                <mesh position={[-8, 0 , 0]} receiveShadow>
                    <boxGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color={bgColor} emissive={bgColor} emissiveIntensity={1.5}/>
                </mesh>
                <OrbitControls enableZoom={false} enablePan={false} minAzimuthAngle={-Math.PI / 2} maxAzimuthAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} minPolarAngle={0} enableRotate={false}/>
        </>
    )
}

const Three = () => {
    return (
        <Canvas shadows>
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    )
}

export default Three;