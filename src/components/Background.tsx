/**
 * Background Component
 *
 * Purpose: Provides an immersive, animated 3D background with gradient mesh and parallax effects.
 * Features:
 * - Animated gradient mesh using Three.js with smooth color transitions
 * - Parallax scrolling effect that responds to page scroll position
 * - Noise texture overlay for visual depth and sophistication
 * - Performance optimized with requestAnimationFrame and proper cleanup
 * - Responsive design that adapts to viewport changes
 */

import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Animated gradient mesh sphere that morphs and changes colors
 */
const GradientMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Custom shader material for animated gradient
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#0f172a') }, // slate-900
        uColor2: { value: new THREE.Color('#1e293b') }, // slate-800
        uColor3: { value: new THREE.Color('#334155') }, // slate-700
        uColor4: { value: new THREE.Color('#06b6d4') }, // cyan-500
        uColor5: { value: new THREE.Color('#14b8a6') }, // teal-500
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float uTime;

        // Smooth noise function for vertex displacement
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);

          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;

          i = mod289(i);
          vec4 p = permute(permute(permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0));

          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;

          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);

          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);

          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);

          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));

          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);

          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;

          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }

        void main() {
          vUv = uv;
          vPosition = position;

          // Create organic movement with multiple noise octaves
          vec3 pos = position;
          float noise = snoise(pos * 0.5 + uTime * 0.1);
          noise += snoise(pos * 1.0 + uTime * 0.15) * 0.5;

          // Subtle vertex displacement for organic feel
          pos += normal * noise * 0.3;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform vec3 uColor4;
        uniform vec3 uColor5;

        varying vec2 vUv;
        varying vec3 vPosition;

        void main() {
          // Create dynamic gradients based on position and time
          float mixValue1 = sin(vPosition.y * 0.5 + uTime * 0.3) * 0.5 + 0.5;
          float mixValue2 = cos(vPosition.x * 0.5 + uTime * 0.2) * 0.5 + 0.5;
          float mixValue3 = sin(length(vPosition.xz) * 0.3 + uTime * 0.4) * 0.5 + 0.5;

          // Mix base dark colors
          vec3 color = mix(uColor1, uColor2, mixValue1);
          color = mix(color, uColor3, mixValue2 * 0.3);

          // Add accent color highlights
          float accentMix = smoothstep(0.4, 0.6, mixValue3);
          vec3 accentColor = mix(uColor4, uColor5, sin(uTime * 0.5) * 0.5 + 0.5);
          color = mix(color, accentColor, accentMix * 0.15);

          // Add subtle vignette effect
          float vignette = 1.0 - length(vUv - 0.5) * 0.8;
          color *= vignette;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.DoubleSide,
    });
  }, []);

  // Animate the mesh
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }

    if (meshRef.current) {
      // Gentle rotation for dynamic feel
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} material={shaderMaterial}>
      <icosahedronGeometry args={[20, 64]} />
      <primitive object={shaderMaterial} ref={materialRef} attach="material" />
    </mesh>
  );
};

/**
 * Main Background component with Canvas and noise overlay
 */
const Background: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxSpeed = 0.5;

      if (canvasRef.current) {
        canvasRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animate noise overlay opacity for subtle breathing effect
  useEffect(() => {
    let animationFrame: number;
    let startTime = Date.now();

    const animateNoise = () => {
      if (noiseRef.current) {
        const elapsed = (Date.now() - startTime) / 1000;
        const opacity = 0.03 + Math.sin(elapsed * 0.5) * 0.02;
        noiseRef.current.style.opacity = opacity.toString();
      }
      animationFrame = requestAnimationFrame(animateNoise);
    };

    animateNoise();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      {/* Three.js Canvas with gradient mesh */}
      <div
        ref={canvasRef}
        className="fixed inset-0 -z-20"
        style={{ willChange: 'transform' }}
      >
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          dpr={[1, 2]} // Limit pixel ratio for performance
          performance={{ min: 0.5 }} // Allow frame rate to drop if needed
        >
          <GradientMesh />
        </Canvas>
      </div>

      {/* Noise texture overlay for visual depth */}
      <div
        ref={noiseRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.05,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Subtle gradient overlay for depth */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)',
        }}
      />
    </>
  );
};

export default Background;
