//inspired from https://github.com/DGFX/codrops-kinetic-images

'use client';

import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame, extend } from '@react-three/fiber';
import { useRef, useState, useCallback, useEffect } from 'react';
import { getCanvasTexture } from '../getCanvasTexture';


const images = [    
    { url: "https://res.cloudinary.com/dmdjguh0a/image/upload/v1777934677/zoo_w6qtlx.jpg" },
    { url: "https://res.cloudinary.com/dmdjguh0a/image/upload/v1781663044/arcover-100_rgfegi.jpg"},
    { url: "https://res.cloudinary.com/dmdjguh0a/image/upload/v1777933916/elmocover-100_vw82vj.jpg"},
    { url: "https://res.cloudinary.com/dmdjguh0a/image/upload/v1777933680/Adidas_cover_udhakm.png"},
    { url: "https://res.cloudinary.com/dmdjguh0a/image/upload/v1777933799/TitleSequence_Full_gd2d3y.jpg"},
    { url: "https://res.cloudinary.com/dmdjguh0a/image/upload/v1777933874/Thumbnail2_kbvk0y.png"},
    { url: "https://res.cloudinary.com/dmdjguh0a/image/upload/v1777933896/RD_Cover_emgela.jpg"},
    { url: "/images/2024-05-23 18_48_03.477-0500.jpg" },
    { url: "/images/20260319_103947.jpg"},
     { url: "/images/Screenshot 2026-07-06 212027.png" },
    { url: "/images/Screenshot 2026-07-06 212315.png"},
    { url: "/images/VideoCapture_20250102-223221.jpg" },
    { url: "/images/VideoCapture_20251105-232337.jpg" },
]


 class MeshBannerMaterial extends THREE.MeshBasicMaterial {
    constructor(parameters = {}) {
        super(parameters);
        this.setValues(parameters);

        this.backfaceRepeatX = 1.0;

        if (parameters.backfaceRepeatX !== undefined)
            this.backfaceRepeatX = parameters.backfaceRepeatX;
    }

    onBeforeCompile = (shader) => {
        shader.uniforms.repeatX = { value: this.backfaceRepeatX };
        shader.fragmentShader = shader.fragmentShader
            .replace(
                '#include <common>',
                /* glsl */ `#include <common>
                uniform float repeatX;

                vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
                    return a + b*cos( 6.28318*(c*t+d) );
                }
            `
            )
            .replace(
                '#include <color_fragment>',
                /* glsl */ `#include <color_fragment>
                if (!gl_FrontFacing) {
                    diffuseColor.rgb = pal( vMapUv.x * repeatX, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(1.0,1.0,1.0),vec3(0.0,0.10,0.20) );
                }
            `
            );
    };
}
extend({ MeshBannerMaterial });



 class MeshImageMaterial extends THREE.MeshBasicMaterial {
    constructor(parameters = {}) {
        super(parameters);
        this.setValues(parameters);
    }
    onBeforeCompile = (shader) => {
        shader.fragmentShader = shader.fragmentShader.replace(
            '#include <color_fragment>',
            /* glsl */ `#include <color_fragment>
                if (!gl_FrontFacing) {
                    vec3 blackCol = vec3(0.0);
                    diffuseColor.rgb = mix(diffuseColor.rgb, blackCol, 0.7);
                }
            `
        );
    };
}

extend({ MeshImageMaterial });



function setupCylinderTextureMapping(texture, dimensions, radius, height) {
    if (!texture || !dimensions) {
        return;
    }

    const cylinderCircumference = 2 * Math.PI * radius;
    const cylinderHeight = height;
    const cylinderAspectRatio = cylinderCircumference / cylinderHeight;

    if (dimensions.aspectRatio > cylinderAspectRatio) {
        // Canvas is wider than cylinder proportionally
        texture.repeat.x = cylinderAspectRatio / dimensions.aspectRatio;
        texture.repeat.y = 1;
        texture.offset.x = (1 - texture.repeat.x) / 2;
    } else {
        // Canvas is taller than cylinder proportionally
        texture.repeat.x = 1;
        texture.repeat.y = dimensions.aspectRatio / cylinderAspectRatio;
    }

    texture.offset.y = (1 - texture.repeat.y) / 2;
}

function useCollageTexture(imgs, options = {}) {
    const [textureResults, setTextureResults] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("useCollageTexture")

    const { gap = 0, canvasHeight = 512, canvasWidth = 512, axis = 'x' } = options;

    const createTexture = useCallback(async () => {
        try {
            console.log("try create texture")
            setIsLoading(true);
            setError(null);
            const result = await getCanvasTexture({
                images: imgs,
                gap,
                canvasHeight,
                canvasWidth,
                axis,
            });
            setTextureResults(result);
            console.log("result", result)

        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to create texture'));

        } finally {
            setIsLoading(false);
        }
    }, [imgs, gap, canvasHeight, canvasWidth, axis]);

    useEffect(() => {
        if (imgs.length > 0){ 
            console.log("images length", imgs.length)
            createTexture()
        } else {
             console.log("no images!")
        }
    }, [imgs.length, createTexture]);

    return {
        texture: textureResults?.texture || null,
        dimensions: textureResults?.dimensions || null,
        isLoading,
        error,
    };
}



function Spiral({ radius = 1.6, targetRotationY = 0, ...props }) {
    const { texture, dimensions, isLoading, error } = useCollageTexture(images);
    const ref = useRef(null);
    const bannerRef = useRef(null);
    const groupRef = useRef(null);

    const bannerTexture = useTexture('/banner_irina.jpg');
    bannerTexture.wrapS = bannerTexture.wrapT = THREE.RepeatWrapping;

    useEffect(() => {
        if (!texture || !dimensions || isLoading) return;
        setupCylinderTextureMapping(texture, dimensions, radius, 2);
    }, [texture, dimensions, radius, isLoading]);

    useFrame((state, delta) => {
        if (texture) texture.offset.x += delta * 0.005;

        if (bannerRef.current) {
            const bannerMat = bannerRef.current.material;
            if (bannerMat.map) bannerMat.map.offset.x += delta / 45;
        }

        if (groupRef.current) {
            groupRef.current.rotation.y = THREE.MathUtils.damp(
                groupRef.current.rotation.y,
                targetRotationY,
                4,
                delta
            );
        }
    });

    if (isLoading || error || !texture || !dimensions) {
        return null;
    }

    const bannerRadius = radius + 0.01


    return (
        <group ref={groupRef} {...props}>
            <mesh ref={ref}>
                <cylinderGeometry args={[radius, radius, 2, 100, 1, true]} />
                <meshImageMaterial map={texture} side={THREE.DoubleSide} toneMapped={false} />
            </mesh>
            <mesh ref={bannerRef} position={[0, 1.5, 0]} rotation={[0.01 ,0, 0.01]}>
                <cylinderGeometry
                    args={[bannerRadius, bannerRadius, bannerRadius * 0.05, bannerRadius * 80, bannerRadius * 10, true]}
                />
                <meshBannerMaterial
                    map={bannerTexture}
                    map-anisotropy={16}
                    map-repeat={[15, 1]}
                    // side={THREE.DoubleSide}
                    // toneMapped={false}
                    // backfaceRepeatX={0.6}
                />
            </mesh>
        </group>

    );
}

export {Spiral};
