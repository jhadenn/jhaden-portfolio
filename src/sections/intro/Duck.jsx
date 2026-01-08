/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

import { useRef, forwardRef, useEffect, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Outlines } from '@react-three/drei';
import * as THREE from 'three';
import variables from '../../style/variables.module.scss';

export const Duck = forwardRef(({ onToggleLight, ...props }, ref) => {
  const { nodes, materials } = useGLTF('/assets/3d-models/Computer Generic 2000s.glb');
  const duck = useRef();
  const [useToon, setUseToon] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { cursor, pointer } = variables;

  useEffect(() => {
    document.body.style.cursor = hovered ? pointer : cursor;
  }, [hovered]);

  // Smooth camera-follow rotation
  useFrame((state, delta) => {
    const targetY = -(state.pointer.x * Math.PI) / 10;
    const targetX = (state.pointer.y * Math.PI) / 10;
    const lambda = 2;
    duck.current.rotation.y = THREE.MathUtils.damp(
      duck.current.rotation.y,
      targetY,
      lambda,
      delta
    );
    duck.current.rotation.x = THREE.MathUtils.damp(
      duck.current.rotation.x,
      targetX,
      lambda / 2,
      delta
    );
  });

  // Create gradient map
  const gradientMap = useMemo(() => {
    const size = 6;
    const data = new Uint8Array(size * 4);
    for (let i = 0; i < size; i++) {
      const shade = Math.round((i / (size - 1)) * 255);
      data[i * 4 + 0] = shade;
      data[i * 4 + 1] = shade;
      data[i * 4 + 2] = shade;
      data[i * 4 + 3] = 255;
    }
    const texture = new THREE.DataTexture(data, size, 1, THREE.RGBAFormat);
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, []);

   // Get first material for toon shader (using M_plastic_bone as default)
  // Build toon materials per original material (keeps each mesh's own look)
const toonMaterials = useMemo(() => {
  const map = new Map();

  const makeToon = (mat) => {
    if (!mat) return null;

    // Reuse if already created for this material
    if (map.has(mat.uuid)) return map.get(mat.uuid);

    const toon = new THREE.MeshToonMaterial({
      color: mat.color?.clone?.() ?? new THREE.Color(0xffffff),
      map: mat.map ?? null,
      gradientMap,
    });

    // Keep transparency behavior consistent
    toon.transparent = !!mat.transparent;
    toon.opacity = mat.opacity ?? 1;

    // If the original uses alpha test / cutout textures
    toon.alphaTest = mat.alphaTest ?? 0;

    // Helps avoid "too dark/too flat" depending on your lighting setup
    toon.side = mat.side ?? THREE.FrontSide;

    map.set(mat.uuid, toon);
    return toon;
  };

  // Create toon version for every loaded material
  for (const mat of Object.values(materials)) {
    makeToon(mat);
  }

  return { get: makeToon, cache: map };
}, [materials, gradientMap]);
 

  const handleClick = (e) => {
    e.stopPropagation();

    // Toggle materials
    setUseToon((prev) => !prev);

    // Toggle ambient light
    if (onToggleLight) onToggleLight();

    // Play sound
    const squeak = new Audio('/assets/sounds/squeak.mp3');
    squeak.playbackRate = 1.35;
    squeak.play().catch((err) => {
      console.warn('Autoplay prevented or error playing sound:', err);
    });

    // Dispatch a custom event
    window.dispatchEvent(new CustomEvent('duckClicked'));
  };

  // Render all nodes from the model
  return (
    <group {...props} ref={duck} dispose={null} onClick={handleClick}>
      {Object.entries(nodes).map(([name, node]) => {
        // Skip root/scene nodes that don't have geometry
        if (!node.geometry || name === 'Root_Scene' || name === 'RootNode') {
          return null;
        }
        
        return (
          <mesh
            key={name}
            ref={name === 'era_Gateway_2000_PC_from_1995' ? ref : undefined}
            geometry={node.geometry}
            position={node.position}
            rotation={node.rotation}
            scale={node.scale}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered(true);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHovered(false);
            }}
            material={
  useToon
    ? (Array.isArray(node.material)
        ? node.material.map((m) => toonMaterials.get(m))
        : toonMaterials.get(node.material))
    : node.material
}
          >
            {useToon && <Outlines thickness={1.5} color={0x000000} />}
          </mesh>
        );
      })}
    </group>
  );
});

useGLTF.preload('/assets/3d-models/Computer Generic 2000s.glb');
