import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import "./Logo3D.css";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef();

  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      scene.position.sub(center);
    }
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.012;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.1} />
    </group>
  );
}

function Logo3D({ modelPath = "/spiritvs_3D.glb", height = "400px" }) {
  return (
    <div className="logo3d-container" style={{ height }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={3} />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#4a90d9" />
        <directionalLight position={[0, 0, 10]} intensity={2} />
        <pointLight position={[0, 5, 5]} intensity={2} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Model url={modelPath} />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}

export default Logo3D;
