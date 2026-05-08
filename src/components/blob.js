import React, { useRef, useMemo, useEffect } from "react";
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

export default function IridescentBlob({ isHomePage }) {
  const meshRef = useRef();
  const isMobile = window.innerWidth < window.innerHeight;
  let sphereSize = isMobile ? 1 : 1.25;

  const smoothingFactor = 0.05;

  // function animate(targetScale) {
  //   requestAnimationFrame(animate);
  //   meshRef.current.scale.lerp(targetScale, smoothingFactor);
  // }

  // useEffect(() => {
  //   if (!isHomePage) {
  //     meshRef.current.scale = 2;
  //     // sphereSize = sphereSize * 2;
  //     // animate(meshRef.current.scale * 2);
  //   } else {
  //     meshRef.current.scale = meshRef.current.scale / 2;
  //     // animate(meshRef.current.scale / 2);
  //   }
  // }, [sphereSize]);

  const envTexture = useLoader(
    EXRLoader,
    "https://res.cloudinary.com/dmdjguh0a/raw/upload/v1776456767/irridescent_05_t2lmrj.exr",
  );

  const lastPointer = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const movingTimeout = useRef(null);

  useFrame((state) => {
    const { x, y } = state.pointer;

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
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[sphereSize, 50]} />

      <MeshRefractionMaterial
        color={"#fff3d6"}
        ior={2}
        envMap={envTexture}
        aberrationStrength={0.5}
      />
    </mesh>
  );
}
