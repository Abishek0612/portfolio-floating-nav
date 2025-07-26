import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box, Sphere, Cylinder, Cone } from "@react-three/drei";

function Icon3D({ type, position, color, isHovered, sectionInView }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current && sectionInView) {
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.scale.setScalar(isHovered ? 1.2 : 1);
    }
  });

  const renderIcon = () => {
    switch (type) {
      case "code":
        return (
          <group ref={meshRef}>
            <Box args={[1.2, 0.8, 0.1]}>
              <meshStandardMaterial color={color} metalness={0.3} />
            </Box>
            <Box args={[0.1, 0.6, 0.15]} position={[-0.3, 0, 0.05]}>
              <meshStandardMaterial color="#00ff00" emissive="#004400" />
            </Box>
            <Box args={[0.1, 0.6, 0.15]} position={[0.3, 0, 0.05]}>
              <meshStandardMaterial color="#00ff00" emissive="#004400" />
            </Box>
          </group>
        );
      case "ai":
        return (
          <group ref={meshRef}>
            <Sphere args={[0.6, 16, 16]}>
              <meshStandardMaterial
                color={color}
                wireframe
                transparent
                opacity={0.7}
              />
            </Sphere>
            <Sphere args={[0.3, 8, 8]}>
              <meshStandardMaterial color="#ff6b6b" emissive="#440000" />
            </Sphere>
          </group>
        );
      case "security":
        return (
          <group ref={meshRef}>
            <Box args={[1, 1.2, 0.2]}>
              <meshStandardMaterial color={color} metalness={0.7} />
            </Box>
            <Cylinder args={[0.15, 0.15, 0.3]} position={[0, 0.3, 0]}>
              <meshStandardMaterial color="#ffd700" metalness={0.8} />
            </Cylinder>
          </group>
        );
      case "cloud":
        return (
          <group ref={meshRef}>
            <Sphere args={[0.4, 12, 12]} position={[0, 0, 0]}>
              <meshStandardMaterial color={color} />
            </Sphere>
            <Sphere args={[0.3, 12, 12]} position={[-0.3, -0.1, 0]}>
              <meshStandardMaterial color={color} />
            </Sphere>
            <Sphere args={[0.35, 12, 12]} position={[0.3, -0.1, 0]}>
              <meshStandardMaterial color={color} />
            </Sphere>
          </group>
        );
      case "integration":
        return (
          <group ref={meshRef}>
            <Box args={[0.6, 0.6, 0.1]} position={[-0.4, 0, 0]}>
              <meshStandardMaterial color={color} />
            </Box>
            <Box args={[0.6, 0.6, 0.1]} position={[0.4, 0, 0]}>
              <meshStandardMaterial color="#ff6b6b" />
            </Box>
            <Cylinder args={[0.05, 0.05, 0.8]} rotation={[0, 0, Math.PI / 2]}>
              <meshStandardMaterial color="#ffd700" />
            </Cylinder>
          </group>
        );
      case "speed":
        return (
          <group ref={meshRef}>
            <Cone args={[0.5, 1, 6]} rotation={[0, 0, -Math.PI / 2]}>
              <meshStandardMaterial color={color} />
            </Cone>
            <Sphere args={[0.1, 8, 8]} position={[0.3, 0, 0]}>
              <meshStandardMaterial color="#ff6b6b" emissive="#440000" />
            </Sphere>
          </group>
        );
      default:
        return (
          <Box ref={meshRef} args={[1, 1, 1]}>
            <meshStandardMaterial color={color} />
          </Box>
        );
    }
  };

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
      position={position}
    >
      {renderIcon()}
    </Float>
  );
}

const ServiceIcons3D = ({ hoveredIndex = -1, isVisible = true }) => {
  if (!isVisible) return null;

  const icons = [
    { type: "code", position: [-4, 2, 0], color: "#4db5ff" },
    { type: "ai", position: [4, 1, 0], color: "#ff6b6b" },
    { type: "security", position: [-3, -1, 0], color: "#50fa7b" },
    { type: "integration", position: [3, -2, 0], color: "#f1fa8c" },
    { type: "cloud", position: [-1, 3, 0], color: "#bd93f9" },
    { type: "speed", position: [1, -3, 0], color: "#ff79c6" },
  ];

  return (
    <div
      className="service-icons-container"
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

        {icons.map((icon, index) => (
          <Icon3D
            key={index}
            {...icon}
            isHovered={hoveredIndex === index}
            sectionInView={isVisible}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default ServiceIcons3D;
