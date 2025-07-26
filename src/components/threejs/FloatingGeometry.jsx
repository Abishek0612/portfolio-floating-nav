import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";

function FloatingCube({ position, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * speed * 0.5;
      meshRef.current.rotation.y = time * speed * 0.3;
    }
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <mesh ref={meshRef}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>
    </Float>
  );
}

const FloatingGeometry = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        right: "5%",
        width: "300px",
        height: "300px",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight
          position={[-10, -10, -10]}
          color="#4db5ff"
          intensity={0.3}
        />

        <FloatingCube position={[-1, 1, 0]} color="#4db5ff" speed={1} />
        <FloatingCube position={[1, -1, 0]} color="#2c2c6c" speed={0.8} />
        <FloatingCube position={[0, 0, -1]} color="#ffffff" speed={1.2} />
      </Canvas>
    </div>
  );
};

export default FloatingGeometry;
