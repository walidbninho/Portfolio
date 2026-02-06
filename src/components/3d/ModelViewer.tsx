"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls, Html, useProgress, useAnimations, Environment } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Play, Loader2, Box, Camera } from "lucide-react";
import * as THREE from "three";

// Draco Decoder Path (CDN)
const DRACO_URL = "https://www.gstatic.com/draco/versioned/decoders/1.5.1/";

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center gap-2 bg-background/80 backdrop-blur p-4 rounded-lg border border-border shadow-xl">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
                <div className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                    Loading Assets... {progress.toFixed(0)}%
                </div>
            </div>
        </Html>
    );
}

function Model({ url }: { url: string }) {
    // Load GLB with Draco compression enabled
    const { scene, animations } = useGLTF(url, DRACO_URL);
    const { actions, names } = useAnimations(animations, scene);

    // Auto-play animations if they exist
    useEffect(() => {
        if (names.length > 0) {
            names.forEach((name) => {
                actions[name]?.reset().fadeIn(0.5).play();
            });
        }
    }, [actions, names]);

    return <primitive object={scene} />;
}

interface ModelViewerProps {
    modelPath: string;
    poster?: string; // Image to show before loading
}

import { Component, ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends Component<{ children: ReactNode, fallback: (error: Error | null) => ReactNode }, { hasError: boolean, error: Error | null }> {
    constructor(props: { children: ReactNode, fallback: (error: Error | null) => ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("3D Model Error:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback(this.state.error);
        }
        return this.props.children;
    }
}

export const ModelViewer = ({ modelPath, poster }: ModelViewerProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Facade: Show static poster until user interacts
    if (!isLoaded) {
        return (
            <div
                className="w-full h-full min-h-[400px] relative bg-secondary/20 group cursor-pointer overflow-hidden rounded-sm border border-border/50"
                onClick={() => setIsLoaded(true)}
            >
                {/* Background Poster */}
                {poster && (
                    <img
                        src={poster}
                        alt="Model Preview"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                )}

                {/* Overlay & Button */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur-sm text-foreground px-6 py-3 rounded-none border border-border shadow-lg flex items-center gap-3 transition-transform group-hover:scale-105">
                        <Box className="w-5 h-5" />
                        <span className="font-mono text-sm font-bold uppercase tracking-wider">Initialize 3D View</span>
                    </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-2 py-1 text-[10px] font-mono border border-border uppercase text-muted-foreground">
                    Click to Load Model
                </div>
            </div>
        );
    }

    // Actual 3D Canvas (Lazy Loaded)
    return (
        <ErrorBoundary
            fallback={(error) => (
                <div className="w-full h-full flex flex-col items-center justify-center bg-secondary/20 text-muted-foreground p-4 text-center">
                    <Box className="w-8 h-8 mb-2 opacity-50" />
                    <p className="font-mono text-sm">Failed to load 3D model.</p>
                    <p className="text-xs text-red-500 mt-2 max-w-[200px] break-words">
                        {error?.message || "Unknown error"}
                    </p>
                </div>
            )}
        >
            <div className="w-full h-full min-h-[400px] relative bg-transparent rounded-sm border border-border/50 overflow-hidden">
                <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }} gl={{ preserveDrawingBuffer: true, alpha: true }}>
                    <Suspense fallback={<Loader />}>
                        <Stage intensity={0.5} shadows={{ type: 'contact', opacity: 0.7, blur: 2 }} environment={null}>
                            <Model url={modelPath} />
                        </Stage>
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <ambientLight intensity={0.5} />
                        <OrbitControls
                            autoRotate
                            autoRotateSpeed={0.5} // Slow rotation
                            makeDefault
                            minPolarAngle={0}
                            maxPolarAngle={Math.PI / 1.5}
                        />
                        {process.env.NODE_ENV === 'development' && <SnapshotButton />}
                    </Suspense>
                </Canvas>

                <div className="absolute bottom-4 left-4 pointer-events-none">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-mono uppercase text-muted-foreground bg-background/50 px-1">Interactive Mode Active</span>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
};

function SnapshotButton() {
    const { gl, scene, camera } = useThree();

    const takeSnapshot = () => {
        gl.render(scene, camera);
        const screenshot = gl.domElement.toDataURL('image/png');
        const link = document.createElement('a');
        link.setAttribute('download', `thumbnail-${Date.now()}.png`);
        link.setAttribute('href', screenshot);
        link.click();
    };

    return (
        <Html fullscreen style={{ pointerEvents: 'none' }}>
            <div className="absolute top-4 right-4 pointer-events-auto">
                <button
                    onClick={takeSnapshot}
                    className="flex items-center gap-2 bg-red-500/90 hover:bg-red-600 text-white px-3 py-1.5 rounded-sm shadow-lg text-xs font-mono uppercase tracking-wider transition-all"
                >
                    <Camera className="w-4 h-4" />
                    <span>Save Thumbnail</span>
                </button>
            </div>
        </Html>
    );
}

// Preload is optional for the facade pattern (we want lazy load), but good practice if expected to be used often.
// useGLTF.preload(url, DRACO_URL);
