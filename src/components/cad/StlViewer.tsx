"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";
import { Environment, OrbitControls, Center, Stage } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

// Model Component
const Model = ({ url }: { url: string }) => {
    const geom = useLoader(STLLoader, url);

    // Clean up geometry on unmount
    useEffect(() => {
        return () => {
            if (geom) geom.dispose();
        }
    }, [geom]);

    return (
        <mesh geometry={geom} scale={0.01}>
            <meshStandardMaterial color="#60a5fa" roughness={0.5} metalness={0.5} />
        </mesh>
    );
};

export const StlViewer = ({ url }: { url: string }) => {
    // Simple check to prevent SSR issues with canvas if needed, though R3F usually handles it.
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="w-full h-full bg-muted animate-pulse" />;

    return (
        <div className="w-full h-full min-h-[300px] bg-transparent rounded-lg overflow-hidden relative">
            <Canvas shadows camera={{ position: [0, 0, 150], fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Model url={url} />
                    </Stage>
                    <OrbitControls autoRotate />
                </Suspense>
            </Canvas>
            <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded">
                Drag to rotate
            </div>
        </div>
    );
};
