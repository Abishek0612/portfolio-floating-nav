import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";

const FloatingCube = ({ position, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

const FloatingElements = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <FloatingCube position={[-2, 2, 0]} color="#4db5ff" />
      <FloatingCube position={[2, -1, 0]} color="#2c2c6c" />
      <FloatingCube position={[0, 1, -2]} color="#4db5ff" />

      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.3}
          height={0.1}
          position={[0, 0, 0]}
        >
          DEVELOPER
          <meshStandardMaterial color="#4db5ff" />
        </Text3D>
      </Center>
    </>
  );
};

export default FloatingElements;
