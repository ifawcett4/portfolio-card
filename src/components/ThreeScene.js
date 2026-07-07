import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Stage,
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Float,
  Sparkles,
  Stars
} from "@react-three/drei";
import { ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
  SMAA,
} from "@react-three/postprocessing";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import IridescentBlob from "./blob";
import {Spiral} from "./Spiral";
const isMobile = navigator.userAgentData.mobile; //resolves true/false

export default function SceneCanvas() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const targetRef = useRef([Math.PI / 6, 0, 0]);

  // Home | Work | About
  const [currentMenu, setCurrentMenu] = useState("Home"); 


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
  
const COUNT = 10;
const GAP = 3;



  const spiralRotation = (index) => {

    switch (currentMenu) {
      case 'Home':
        return index * Math.PI * 1.5;
      case 'Work':
        return index * Math.PI * 1.5;
      case 'About':
        return 90;
      default:
        return  index * Math.PI * 1.5;
    }
  };

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
        dpr={isHomePage ? (isMobile ? [0.5, 1] : [1, 2]) : [0.5, 1]} // Lower pixel ratio on other pages
        // frameloop={isHomePage ? "always" : "demand"}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 10]}
        ></PerspectiveCamera>

        {isHomePage && (
          <EffectComposer>
            <SMAA />
            {/* <Bloom luminanceThreshold={5} luminanceSmoothing={0.9} height={1} /> */}
            <Noise opacity={0.05} />
            {/* <ChromaticAberration
              blendFunction={BlendFunction.NORMAL}
              offset={[0.002, 0.002]}
            /> */}
          </EffectComposer>
        )}
        <ambientLight intensity={0.5} />
        <ambientLight intensity={1} />

        {/* <Float autoInvalidate speed={1} floatingRange={[-0.2, 0.2]}> */}
        {/* <IridescentBlob isHomePage={isHomePage} /> */}
       
      {/* <Stars/> */}
        <Sparkles  count={200} opacity={0.9} scale={[4,3,4]} noise={2}/>  
        <Stars radius={100} depth={50} count={5000} factor={1} saturation={0} fade speed={51} />
     
        <group rotation={[0.1, 0, 0.2]} scale={[0.3, 0.3, 0.3]}>
            {Array.from({ length: COUNT }).map((_, index) => [
                <Spiral
                    key={`billboard-${index}`}
                    radius={8}
                    rotation={[0, spiralRotation(index), 0]}
                    position={[0, (index - (Math.ceil(COUNT / 2) - 1)) * GAP, 0]}
                />,
            ])}
        </group>

        {/* </Float> */}
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
