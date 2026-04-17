import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  OrbitControls,
  GradientTexture,
  MeshWobbleMaterial,
  MeshTransmissionMaterial,
  MeshRefractionMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader";
import { createNoise3D } from "simplex-noise";

export default function IridescentBlob() {
  const meshRef = useRef();
  const isMobile = window.innerWidth < window.innerHeight;
  const sphereSize = isMobile ? 1 : 2;

  const envTexture = useLoader(
    EXRLoader,
    "https://res.cloudinary.com/dmdjguh0a/raw/upload/v1776456767/irridescent_05_t2lmrj.exr",
  );

  const lastPointer = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const movingTimeout = useRef(null);

  const noise3D = createNoise3D();

  // In your component, add this ref:
  const originalPositions = useRef(null);

  useFrame((state) => {
    const { x, y } = state.pointer;
    const time = state.clock.getElapsedTime();

    // Detect pointer movement
    if (x !== lastPointer.current.x || y !== lastPointer.current.y) {
      lastPointer.current = { x, y };
      isMoving.current = true;

      // Reset after 150ms of no movement
      clearTimeout(movingTimeout.current);
      movingTimeout.current = setTimeout(() => {
        isMoving.current = false;
      }, 150);
    }

    if (isMoving.current) {
      // Smoothly follow pointer
      // meshRef.current.rotation.x = THREE.MathUtils.lerp(
      //   meshRef.current.rotation.x,
      //   y / 50,
      //   0.1,
      // );
      // meshRef.current.rotation.y = THREE.MathUtils.lerp(
      //   meshRef.current.rotation.y,
      //   x / 50,
      //   0.1,
      // );
    } else {
      // // Auto animate
      // meshRef.current.rotation.x = THREE.MathUtils.lerp(
      //   meshRef.current.rotation.x,
      //   time * 0.04,
      //   0.05,
      // );
      // meshRef.current.rotation.y = THREE.MathUtils.lerp(
      //   meshRef.current.rotation.y,
      //   time * 0.04,
      //   0.05,
      // );
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[sphereSize, 50]} />
      {/* <sphereGeometry args={[1, 256, 256]} /> */}

      <MeshRefractionMaterial
        color={"#fff3d6"}
        ior={2}
        envMap={envTexture}
        aberrationStrength={0.5}
      />
    </mesh>
  );
}
