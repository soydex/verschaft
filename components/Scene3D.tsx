import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";

const Model = ({ url, scale, position, rotation }: { url: string; scale: number; position: [number, number, number]; rotation: [number, number, number] }) => {
    const { scene } = useGLTF(url);
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <primitive
                object={scene}
                scale={scale}
                position={position}
                rotation={rotation}
            />
        </Float>
    );
};

const Scene3D: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    {/* Xbox Controller - Left side */}
                    <Model
                        url="/3d/xbox controller.glb"
                        scale={3}
                        position={[-6, 0, 0]}
                        rotation={[0.5, 0.5, 0]}
                    />

                    {/* Alarm Clock - Top Right */}
                    <Model
                        url="/3d/alarm_clock.glb"
                        scale={4}
                        position={[5, 3, -2]}
                        rotation={[0.2, -0.5, 0]}
                    />

                    {/* Apple TV Remote - Bottom Right */}
                    <Model
                        url="/3d/apple_tv_remote.glb"
                        scale={3}
                        position={[5, -3, 0]}
                        rotation={[-0.2, -0.2, 0.5]}
                    />

                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
};

// Preload models
useGLTF.preload("/3d/xbox controller.glb");
useGLTF.preload("/3d/alarm_clock.glb");
useGLTF.preload("/3d/apple_tv_remote.glb");

export default Scene3D;
