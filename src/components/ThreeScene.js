import React, { useRef } from "react";
import { Stage, OrbitControls } from "@react-three/drei";
import { ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Canvas, useFrame } from "@react-three/fiber";
import { Abstract } from "./abstract";
import * as THREE from "three";

export default function SceneCanvas() {
  const targetRef = useRef([Math.PI / 6, 0, 0]);

  // Unified handler for mouse, touch, and pointer events
  const handleMove = (event) => {
    // Extract clientX/clientY from mouse/pointer events or from touch lists
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
      Math.PI / 4
    );
    const yRot = THREE.MathUtils.clamp(
      ny * Math.PI * 0.25 + Math.PI / 6,
      -Math.PI / 2,
      Math.PI / 2
    );

    targetRef.current = [yRot, xRot, 0];
  };

  function ModelWrapper() {
    const ref = useRef();
    useFrame(() => {
      if (!ref.current) return;
      const [tx, ty] = targetRef.current;

      const isMoving =
        targetRef.current[0] !== Math.PI / 6 || targetRef.current[1] !== 0;

      if (isMoving) {
        ref.current.rotation.x = THREE.MathUtils.lerp(
          ref.current.rotation.x,
          tx,
          0.08
        );
        ref.current.rotation.y = THREE.MathUtils.lerp(
          ref.current.rotation.y,
          ty,
          0.08
        );
      } else {
        ref.current.rotation.x += 0.005;
        ref.current.rotation.y += 0.005;
      }
    });

    return (
      <group ref={ref}>
        <Abstract />
      </group>
    );
  }

  return (
    <div className="three-container">
      <div className="home-text">
        <h1 className="home-title">Irina Fawcett</h1>
        <h2 className="home-subtitle">Creative Technologist | Developer </h2>
      </div>
      <Canvas
        className="three-canvas"
        onPointerMove={handleMove}
        style={{ touchAction: "none" }}
      >
        <EffectComposer>
          <Bloom luminanceThreshold={5} luminanceSmoothing={0.9} height={1} />
          <Noise opacity={0.2} />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.002, 0.002]}
          />
        </EffectComposer>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} enableRotate={false} />
        <Stage environment="sunset" intensity={0.5}>
          <ModelWrapper />
        </Stage>
      </Canvas>
    </div>
  );
}

// import React, { useState } from "react";
// import "../App.css";
// import { useLoader } from "@react-three/fiber";
// import { Canvas } from "@react-three/fiber";
// import { Abstract } from "./abstract";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// const ThreeScene = () => {
//   const [rotation, setRotation] = useState([Math.PI / 4, Math.PI / 4, 0]);

//   const handleMouseMove = (event) => {
//     const { clientX, clientY, target } = event;
//     const { width, height } = target.getBoundingClientRect();
//     const x = (clientX / width - 0.5) * Math.PI; // Map mouse X to rotation
//     const y = (clientY / height - 0.5) * Math.PI; // Map mouse Y to rotation
//     setRotation([
//       Math.max(-Math.PI / 2, Math.min(Math.PI / 2, y)), // Limit Y rotation
//       Math.max(-Math.PI / 2, Math.min(Math.PI / 2, x)), // Limit X rotation
//       0,
//     ]);
//   };

//   const gltf = useLoader(GLTFLoader, "/Poimandres.gltf");

//   return (
//     <Canvas className="three-canvas" onMouseMove={handleMouseMove}>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />

//       <primitive object={gltf.scene} />
//     </Canvas>
//   );
// };

// export default ThreeScene;
