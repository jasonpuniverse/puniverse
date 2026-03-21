import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Grid, Float } from '@react-three/drei'
import * as THREE from 'three'

function EnergyBeam() {
  const meshRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.scale.y = 1.0 + Math.sin(time * 2) * 0.05
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2
  })

  return (
    <group>
      {/* The Core Beam */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 12, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
      </mesh>
      
      {/* Outer Glow */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 12, 32]} />
        <meshBasicMaterial color="#37b9ff" transparent opacity={0.15} />
      </mesh>
      
      {/* Moving Light Rings */}
      {[0, 1, 2].map((i) => (
        <RotatingRing key={i} delay={i * 2} />
      ))}
    </group>
  )
}

function RotatingRing({ delay }) {
  const ringRef = useRef()
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + delay
    ringRef.current.position.y = ((time * 2) % 12) - 6
    ringRef.current.rotation.x = Math.PI / 2
    ringRef.current.scale.setScalar(1 + Math.sin(time) * 0.2)
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[0.6, 0.01, 16, 100]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
    </mesh>
  )
}

function MatrixGrid() {
  return (
    <Grid
      position={[0, -2, 0]}
      args={[100, 100]}
      cellColor="#ffffff"
      sectionColor="#37b9ff"
      cellOpacity={0.03}
      sectionOpacity={0.1}
      infiniteGrid
      fadeDistance={30}
    />
  )
}

function FloatingParticles({ count = 100 }) {
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        p[i * 3] = (Math.random() - 0.5) * 10
        p[i * 3 + 1] = (Math.random() - 0.5) * 15
        p[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return p
  }, [count])

  const ref = useRef()
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    ref.current.position.y = Math.sin(time * 0.2) * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.2} />
    </points>
  )
}

export default function SceneAura() {
  return (
    <div className="absolute inset-0 z-0 bg-[#000103]">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <color attach="background" args={['#000103']} />
        <ambientLight intensity={0.5} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <EnergyBeam />
        </Float>
        
        <MatrixGrid />
        <FloatingParticles count={200} />
      </Canvas>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#000103] to-transparent" />
    </div>
  )
}
