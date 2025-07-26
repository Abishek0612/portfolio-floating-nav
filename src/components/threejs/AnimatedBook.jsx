import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Text, Float } from "@react-three/drei";

function Book({ position = [0, 0, 0] }) {
  const groupRef = useRef();
  const leftCoverRef = useRef();
  const rightCoverRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.05;
      groupRef.current.position.y = Math.sin(time * 0.4) * 0.1;
    }

    const cycle = (time % 4) / 4;
    let openAmount = 0;

    if (cycle < 0.25) {
      openAmount = cycle * 4;
    } else if (cycle < 0.75) {
      openAmount = 1;
    } else {
      openAmount = 1 - (cycle - 0.75) * 4;
    }

    const eased = 0.5 - 0.5 * Math.cos(openAmount * Math.PI);

    if (leftCoverRef.current && rightCoverRef.current) {
      leftCoverRef.current.rotation.y = -Math.PI * 0.5 * eased;
      rightCoverRef.current.rotation.y = Math.PI * 0.5 * eased;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
      <group ref={groupRef} position={position}>
        {/* Book Spine (Base) */}
        <Box args={[2, 0.2, 1.4]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2c2c6c" roughness={0.8} />
        </Box>

        {/* Left Cover (Education) */}
        <group ref={leftCoverRef} position={[-1, 0.1, 0]}>
          <Box args={[2, 0.05, 1.4]}>
            <meshStandardMaterial color="#4db5ff" roughness={0.6} />
          </Box>
          {/* Cover Text */}
          <Text
            position={[0, 0.03, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={0.15}
            color="white"
            anchorX="center"
            anchorY="middle"
            font="/fonts/arial.woff"
          >
            EDUCATION
          </Text>
          {/* Decorative line */}
          <Box args={[1.5, 0.01, 0.02]} position={[0, 0.026, 0.3]}>
            <meshStandardMaterial color="#ffffff" />
          </Box>
        </group>

        {/* Right Cover (Projects) */}
        <group ref={rightCoverRef} position={[1, 0.1, 0]}>
          <Box args={[2, 0.05, 1.4]}>
            <meshStandardMaterial color="#2c2c6c" roughness={0.6} />
          </Box>
          {/* Cover Text */}
          <Text
            position={[0, 0.03, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={0.12}
            color="white"
            anchorX="center"
            anchorY="middle"
            font="/fonts/arial.woff"
          >
            PROJECTS
          </Text>
          {/* Decorative line */}
          <Box args={[1.5, 0.01, 0.02]} position={[0, 0.026, 0.3]}>
            <meshStandardMaterial color="#4db5ff" />
          </Box>
        </group>

        {/* Pages (Multiple layers for depth) */}
        {[...Array(8)].map((_, i) => (
          <Box
            key={i}
            args={[1.9, 0.008, 1.3]}
            position={[0, 0.02 + i * 0.008, 0]}
          >
            <meshStandardMaterial color={i % 2 === 0 ? "#f8f8f8" : "#f0f0f0"} />
          </Box>
        ))}

        {/* Bookmark Ribbon */}
        <Box args={[0.1, 0.3, 0.02]} position={[0.7, 0.25, 0.65]}>
          <meshStandardMaterial color="#ff6b6b" />
        </Box>

        {/* Book Title on Spine */}
        <Text
          position={[0, 0.12, -0.71]}
          rotation={[0, 0, Math.PI / 2]}
          fontSize={0.08}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          ACADEMIC JOURNEY
        </Text>

        {/* Corner details */}
        <Box args={[0.1, 0.1, 0.02]} position={[0.8, 0.12, 0.6]}>
          <meshStandardMaterial color="#ffd700" />
        </Box>
        <Box args={[0.1, 0.1, 0.02]} position={[-0.8, 0.12, 0.6]}>
          <meshStandardMaterial color="#ffd700" />
        </Box>
      </group>
    </Float>
  );
}

const AnimatedBook = ({ isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div
      className="animated-book-container"
      style={{
        position: "absolute",
        top: "10px",
        right: "15%",
        width: "250px",
        height: "200px",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [4, 3, 4], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-3, -3, -3]} color="#4db5ff" intensity={0.4} />
        <directionalLight position={[2, 2, 2]} intensity={0.5} />
        <Book />
      </Canvas>
    </div>
  );
};

export default AnimatedBook;
