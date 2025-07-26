import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Box } from "@react-three/drei";

function CodeSymbol({ position, symbol, color, speed = 1, sectionInView }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current && sectionInView) {
      meshRef.current.rotation.z = time * speed * 0.3;
    }
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={0.3}
      floatIntensity={0.5}
      position={position}
    >
      <Text
        ref={meshRef}
        fontSize={0.8}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {symbol}
      </Text>
    </Float>
  );
}

function GearWheel({ position, color, speed = 1, sectionInView }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current && sectionInView) {
      meshRef.current.rotation.z += 0.01 * speed;
    }
  });

  return (
    <Float
      speed={speed * 0.5}
      rotationIntensity={0.1}
      floatIntensity={0.2}
      position={position}
    >
      <group ref={meshRef}>
        {/* Main gear body */}
        <Box args={[1, 1, 0.2]}>
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
        </Box>
        {/* Gear teeth */}
        {[...Array(8)].map((_, i) => (
          <Box
            key={i}
            args={[0.2, 0.3, 0.2]}
            position={[
              Math.cos((i * Math.PI * 2) / 8) * 0.6,
              Math.sin((i * Math.PI * 2) / 8) * 0.6,
              0,
            ]}
          >
            <meshStandardMaterial
              color={color}
              metalness={0.7}
              roughness={0.3}
            />
          </Box>
        ))}
        {/* Center hole */}
        <Box args={[0.3, 0.3, 0.3]}>
          <meshStandardMaterial color="#1f1f38" />
        </Box>
      </group>
    </Float>
  );
}

const FloatingCodeElements = ({ isVisible = true }) => {
  if (!isVisible) return null;

  const codeSymbols = [
    { symbol: "{}", position: [-3, 2, 0], color: "#4db5ff", speed: 0.8 },
    { symbol: "<//>", position: [3, 1, 0], color: "#ff6b6b", speed: 1.2 },
    { symbol: "( )", position: [-2, -1, 0], color: "#50fa7b", speed: 1 },
    { symbol: "[ ]", position: [2, -2, 0], color: "#f1fa8c", speed: 0.9 },
    { symbol: "=>", position: [0, 2.5, 0], color: "#bd93f9", speed: 1.1 },
  ];

  const gears = [
    { position: [-4, 0, -1], color: "#4db5ff", speed: 1 },
    { position: [4, -1, -1], color: "#2c2c6c", speed: -0.8 },
    { position: [0, -3, -1], color: "#4db5ff", speed: 1.5 },
  ];

  return (
    <div
      className="floating-code-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden", // Prevent bleeding into other sections
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <pointLight
          position={[-10, -10, -10]}
          color="#4db5ff"
          intensity={0.3}
        />

        {codeSymbols.map((item, index) => (
          <CodeSymbol key={index} {...item} sectionInView={isVisible} />
        ))}

        {gears.map((gear, index) => (
          <GearWheel key={index} {...gear} sectionInView={isVisible} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingCodeElements;
