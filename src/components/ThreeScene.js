import React, { useState } from 'react';
import '../App.css';
import { Canvas } from '@react-three/fiber';

const ThreeScene = () => {
    const [rotation, setRotation] = useState([Math.PI / 4, Math.PI / 4, 0]);

    const handleMouseMove = (event) => {
        const { clientX, clientY, target } = event;
        const { width, height } = target.getBoundingClientRect();
        const x = ((clientX / width) - 0.5) * Math.PI; // Map mouse X to rotation
        const y = ((clientY / height) - 0.5) * Math.PI; // Map mouse Y to rotation
        setRotation([      
            Math.max(-Math.PI / 2, Math.min(Math.PI / 2, y)), // Limit Y rotation
            Math.max(-Math.PI / 2, Math.min(Math.PI / 2, x)), // Limit X rotation
            0
        ]);
    };

    return (
        <Canvas className='three-canvas' onMouseMove={handleMouseMove}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh position={[0, 0, 0]} rotation={rotation} scale={[1, 1, 1]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </Canvas>
    );
};

export default ThreeScene;