"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

function Particles({ count = 60 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null)
  const [geom] = useState(() => {
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5 - 2
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    return geo
  })

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.015
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.008) * 0.03
    }
  })

  return (
    <points ref={meshRef} geometry={geom}>
      <pointsMaterial
        size={0.02}
        color="#C89B4A"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function LightBeams() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.3
      ;(meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.03 + Math.sin(state.clock.getElapsedTime() * 0.02) * 0.02
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} rotation={[0.2, 0.3, 0]}>
      <planeGeometry args={[4, 5]} />
      <meshBasicMaterial color="#C89B4A" transparent opacity={0.04} side={THREE.DoubleSide} />
    </mesh>
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

  const meshProps = useMemo(
    () =>
      books.map((book) => ({
        geom: new THREE.BoxGeometry(book.w, book.h, book.d),
        mat: new THREE.MeshStandardMaterial({ color: book.color, roughness: 0.7, metalness: 0.15 }),
      })),
    [books],
  )

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.08) * 0.04
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={[1.8, -0.3, -1.5]}>
      {books.map((book, i) => (
        <mesh key={i} position={[0, book.y, 0]} geometry={meshProps[i].geom} material={meshProps[i].mat} />
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={38} />
      <ambientLight intensity={0.25} />
      <pointLight position={[2, 1, 2]} intensity={0.4} color="#C89B4A" />
      <pointLight position={[-2, -1, 1]} intensity={0.15} color="#7A2E2E" />
      <spotLight position={[0, 2, 2]} angle={0.3} penumbra={1} intensity={0.2} color="#C89B4A" />
      <Particles count={60} />
      <LightBeams />
      <Float speed={0.8} rotationIntensity={0.02} floatIntensity={0.15}>
        <BookStack />
      </Float>
    </>
  )
}

export function Hero3DScene() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) // eslint-disable-line react-hooks/set-state-in-effect
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none opacity-35 dark:opacity-45">
      <Canvas dpr={[1, 1.5]} gl={{ alpha: true, antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  )
}
