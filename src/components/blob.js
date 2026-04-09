import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  OrbitControls,
  GradientTexture,
  MeshWobbleMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";

export default function IridescentBlob() {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate the blob
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.1;

    // Animate the color for iridescent effect
    if (materialRef.current) {
      const hue = (time * 0.1) % 1;
      materialRef.current.color.setHSL(hue, 0.8, 0.6);
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 20]} />
      <MeshDistortMaterial
        ref={materialRef}
        distort={0.3}
        speed={0.01}
        metalness={1}
        roughness={0}
        color="#2f00ff"
        clearcoat={1}
      ></MeshDistortMaterial>
    </mesh>
  );
}
