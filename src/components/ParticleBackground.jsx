import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function Particles() {
  const { theme } = useTheme();
  const particlesRef = useRef();
  const count = 2000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    // Brighter colors for better visibility in both themes
    const techColors = theme === 'dark' 
      ? [
          [0, 0.85, 1], // bright cyan for dark
          [0.66, 0.33, 0.97], // bright purple
          [0.93, 0.28, 0.6], // bright pink
          [0.06, 0.73, 0.51], // bright green
        ]
      : [
          [0, 0.6, 0.8], // darker cyan for light mode
          [0.5, 0.2, 0.75], // darker purple
          [0.7, 0.15, 0.4], // darker pink
          [0.04, 0.5, 0.35], // darker green
        ];
    
    for (let i = 0; i < count; i++) {
      const color = techColors[Math.floor(Math.random() * techColors.length)];
      cols[i * 3] = color[0];
      cols[i * 3 + 1] = color[1];
      cols[i * 3 + 2] = color[2];
    }
    return cols;
  }, [theme]);

  useFrame((state) => {
    if (!particlesRef.current) return;
    
    particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    
    const positions = particlesRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] = Math.sin(state.clock.elapsedTime * 0.5 + positions[i]) * 2;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={theme === 'dark' ? 0.12 : 0.15}
        vertexColors
        transparent
        opacity={theme === 'dark' ? 0.8 : 0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ConnectionLines() {
  const { theme } = useTheme();
  const linesRef = useRef();
  
  useFrame((state) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const points = [];
    const lineCount = 50;
    
    for (let i = 0; i < lineCount; i++) {
      const angle = (i / lineCount) * Math.PI * 2;
      const radius = 10;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle * 2) * 5,
          Math.sin(angle) * radius
        )
      );
    }
    
    geometry.setFromPoints(points);
    return geometry;
  }, []);

  return (
    <line ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial
        color={theme === 'dark' ? '#00d9ff' : '#0284c7'}
        transparent
        opacity={theme === 'dark' ? 0.2 : 0.25}
        linewidth={1}
      />
    </line>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
