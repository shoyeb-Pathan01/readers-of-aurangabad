"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

function Particles() {
  const meshRef = useRef<THREE.Points>(null)
  const [geom] = useState(() => {
    const geo = new THREE.BufferGeometry()
    const count = 40
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3 - 2
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    return geo
  })

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.01) * 0.05
    }
  })

  return (
    <points ref={meshRef} geometry={geom}>
      <pointsMaterial
        size={0.015}
        color="#C89B4A"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function BookStack() {
  const groupRef = useRef<THREE.Group>(null)

  const books = useMemo(
    () => [
      { color: "#7A2E2E", w: 0.5, h: 0.08, d: 0.35, y: 0 },
      { color: "#3F4D2A", w: 0.45, h: 0.07, d: 0.3, y: 0.09 },
      { color: "#4B2E18", w: 0.48, h: 0.06, d: 0.32, y: 0.17 },
      { color: "#C89B4A", w: 0.4, h: 0.05, d: 0.28, y: 0.24 },
      { color: "#7A2E2E", w: 0.46, h: 0.07, d: 0.33, y: 0.3 },
    ],
    [],
  )

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={[1.2, -0.3, -1]}>
      {books.map((book, i) => {
        const [geom] = useState(() => new THREE.BoxGeometry(book.w, book.h, book.d))
        const [mat] = useState(
          () => new THREE.MeshStandardMaterial({ color: book.color, roughness: 0.7, metalness: 0.1 }),
        )
        return (
          <mesh key={i} position={[0, book.y, 0]} geometry={geom} material={mat} />
        )
      })}
    </group>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={40} />
      <ambientLight intensity={0.3} />
      <pointLight position={[2, 1, 2]} intensity={0.5} color="#C89B4A" />
      <pointLight position={[-2, -1, 1]} intensity={0.2} color="#7A2E2E" />
      <Particles />
      <Float speed={0.5} rotationIntensity={0.02} floatIntensity={0.1}>
        <BookStack />
      </Float>
    </>
  )
}

export function Hero3DScene() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-40">
      <Canvas dpr={[1, 1.5]} gl={{ alpha: true, antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  )
}
