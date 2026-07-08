import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Sparkles,
  Stars
} from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import {Spiral} from "./Spiral";
const isMobile = navigator.userAgentData.mobile; //resolves true/false

  function RotatingGroup({ targetRotation, children, ...props }) {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const [tx, ty, tz] = targetRotation;
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, tx, 4, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, ty, 4, delta);
    groupRef.current.rotation.z = THREE.MathUtils.damp(groupRef.current.rotation.z, tz, 4, delta);
  });

  return (
    <group ref={groupRef} {...props}>
      {children}
    </group>
  );
}

export default function SceneCanvas() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const targetRef = useRef([Math.PI / 6, 0, 0]);

  const handleMove = (event) => {
    let clientX, clientY;
    if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else if (event.clientX !== undefined && event.clientY !== undefined) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else if (
      event.nativeEvent &&
      event.nativeEvent.touches &&
      event.nativeEvent.touches.length > 0
    ) {
      // React synthetic event fallback
      clientX = event.nativeEvent.touches[0].clientX;
      clientY = event.nativeEvent.touches[0].clientY;
    } else {
      return;
    }

    const rect = event.currentTarget
      ? event.currentTarget.getBoundingClientRect()
      : event.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const nx = clientX / width - 0.5; // -0.5 .. 0.5
    const ny = clientY / height - 0.5; // -0.5 .. 0.5

    const xRot = THREE.MathUtils.clamp(
      nx * Math.PI * 0.5,
      -Math.PI / 4,
      Math.PI / 4,
    );
    const yRot = THREE.MathUtils.clamp(
      ny * Math.PI * 0.25 + Math.PI / 6,
      -Math.PI / 2,
      Math.PI / 2,
    );

    targetRef.current = [yRot, xRot, 0];
  };
  
  const COUNT = isMobile ? 3 : 10;
  const GAP = 3;

  const currentMenu = (() => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path.startsWith("/work")) return "Work";
    if (path === "/about") return "About";
    if (path === "/contact") return "Contact";
    return "Home";
  })();

  const bannerRot = (() => {
    switch (currentMenu) {
      case 'Home':
        return isMobile ? [0.05, 0, 0.1] : [0, 0, 0.2];
      case 'Work':
        return [1, 0, 0];
      case 'About':
        return [1, 0, 0];
      default:
        return [0, 0, 0.2];
    }
  })();

    const spiralRotationMultiplier = (() => {
    switch (currentMenu) {
      case 'Home':
        return Math.PI * 1.5;
      case 'Work':
        return Math.PI / 2;
      case 'About':
        return Math.PI / 2;
      default:
        return Math.PI * 1.5;
    }
  })();


  return (
    <div className="three-container">
      <Canvas
        className="three-canvas"
        // onPointerMove={handleMove}
        style={{ touchAction: "none" }}
        gl={{
          antialias: isHomePage, // Disable antialiasing on other pages for performance
          pixelRatio: Math.min(window.devicePixelRatio, isHomePage ? 2 : 1),
          powerPreference: "high-performance",
          alpha: false,
        }}
        dpr={isHomePage ? (isMobile ? [0.5, 1] : [1, 2]) : 0.35} // Lower pixel ratio on other pages
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 10]}
        ></PerspectiveCamera>

        <ambientLight intensity={0.5} />
        <ambientLight intensity={1} />

        {isHomePage && 
          <group>
            <Sparkles  count={200} opacity={0.9} scale={[4,3,4]} noise={2}/>  
            <Stars radius={100} depth={50} count={5000} factor={1} saturation={0} fade speed={51} />
          </group>
        }
     
        <RotatingGroup targetRotation={bannerRot} scale={isMobile ? [0.17, 0.17, 0.17] : [0.3, 0.3, 0.3]}>
          {Array.from({ length: COUNT }).map((_, index) => (
            <Spiral
              key={`billboard-${index}`}
              radius={8}
              targetRotationY={index * spiralRotationMultiplier}
              position={[0, (index - (Math.ceil(COUNT / 2) - 1)) * GAP, 0]}
            />
          ))}
        </RotatingGroup>

        <Environment
          files={
            isHomePage
              ? "https://res.cloudinary.com/dmdjguh0a/raw/upload/v1776456767/irridescent_05_t2lmrj.exr"
              : undefined
          }
          background={false}
          preset={isHomePage ? undefined : "sunset"}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={2}
          maxDistance={4}
          autoRotate={isHomePage}
          autoRotateSpeed={isHomePage ? 0.1 : 0}
          enableDamping={isHomePage}
        />
      </Canvas>
    </div>
  );
}
