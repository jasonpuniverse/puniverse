import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Points, PointMaterial, MeshDistortMaterial, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

function GeodesicSphere() {
  const meshRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.y = time * 0.1
    meshRef.current.rotation.z = time * 0.05
  })

  return (
    <group>
      {/* Central Mesh */}
      <Icosahedron ref={meshRef} args={[1, 1]} scale={1.8}>
        <meshBasicMaterial 
          color="#4f46e5" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </Icosahedron>
      
      {/* Internal Glow Orbs */}
      <mesh position={[0.5, -0.5, 0.5]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} blur={10} />
      </mesh>
      
      <mesh position={[-0.8, 0.5, -0.2]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

function DigitalDust({ count = 100 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10
      p[i * 3 + 1] = (Math.random() - 0.5) * 10
      p[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return p
  }, [count])

  const ref = useRef()
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      ref.current.rotation.y = time * 0.02
      ref.current.rotation.x = time * 0.01
    }
  })

  return (
    <Points ref={ref} positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#37b9ff"
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

function StarField({ count = 1500 }) {
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20
      p[i * 3 + 1] = (Math.random() - 0.5) * 20
      p[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return p
  }, [count])

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.2}
      />
    </Points>
  )
}

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 0.5, mouse.y * 0.5, 5), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <GeodesicSphere />
        <DigitalDust count={150} />
        <StarField count={2000} />
        
        <Rig />
      </Canvas>
      
      {/* Gradient Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  )
}
