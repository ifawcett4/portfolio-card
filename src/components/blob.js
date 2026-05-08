import React, { useRef, useEffect, useCallback } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MeshRefractionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader";

export default function IridescentBlob({ isHomePage }) {
  const meshRef = useRef();
  const isMobile = window.innerWidth < window.innerHeight;

  // Base sphere geometry size — fixed, no need to change with page
  const sphereSize = isMobile ? 1 : 1.25;

  const HOME_SCALE = 1;
  const NON_HOME_SCALE = isMobile ? 1.6 : 2.1;

  // ✅ Initialize target from actual starting state, not hardcoded 1
  const initialScale = isHomePage ? HOME_SCALE : NON_HOME_SCALE;
  const targetScale = useRef(
    new THREE.Vector3(initialScale, initialScale, initialScale),
  );

  // Apply to mesh as soon as ref is available
  const meshRefCallback = useCallback((node) => {
    if (node) {
      node.scale.setScalar(initialScale);
      meshRef.current = node;
    }
  }, []); // empty deps — only needs to run on mount

  useEffect(() => {
    const s = isHomePage ? HOME_SCALE : NON_HOME_SCALE;
    targetScale.current.set(s, s, s);
  }, [isHomePage]);

  // Smooth lerp driven by R3F's render loop — no manual rAF needed
  // Smooth lerp driven by R3F's render loop — no manual rAF needed
  useFrame((_, delta) => {
    if (meshRef.current) {
      const current = meshRef.current.scale;
      const target = targetScale.current;

      // Fixed-speed approach: moves at constant units/sec regardless of distance
      const speed = 2; // units per second — tweak this
      const step = speed * delta;

      current.x = THREE.MathUtils.lerp(current.x, target.x, Math.min(step, 1));
      current.y = THREE.MathUtils.lerp(current.y, target.y, Math.min(step, 1));
      current.z = THREE.MathUtils.lerp(current.z, target.z, Math.min(step, 1));
    }
  });

  const envTexture = useLoader(
    EXRLoader,
    "https://res.cloudinary.com/dmdjguh0a/raw/upload/v1776456767/irridescent_05_t2lmrj.exr",
  );

  const lastPointer = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const movingTimeout = useRef(null);

  useFrame((state) => {
    const { x, y } = state.pointer;
    if (x !== lastPointer.current.x || y !== lastPointer.current.y) {
      lastPointer.current = { x, y };
      isMoving.current = true;
      clearTimeout(movingTimeout.current);
      movingTimeout.current = setTimeout(() => {
        isMoving.current = false;
      }, 150);
    }
  });

  return (
    <mesh ref={meshRefCallback}>
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
