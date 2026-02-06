"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function TrumanIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Doit démarrer 'true' pour l'autoplay
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  const toggleSound = () => {
    if (videoRef.current) {
      // Inverse l'état du son
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center animate-in fade-in duration-500">
      
      <div className="relative w-full max-w-5xl aspect-video rounded-none md:rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black group">
        
        {/* LECTEUR VIDÉO */}
        <video 
          ref={videoRef}
          autoPlay 
          muted={isMuted} // Contrôlé par l'état React
          loop 
          playsInline 
          className="object-cover w-full h-full"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* BOUTON SON (Apparaît au survol ou si muet) */}
        <button
          onClick={toggleSound}
          className="absolute bottom-6 right-6 p-3 bg-black/50 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all transform hover:scale-110 border border-white/20 z-30"
          title={isMuted ? "Activer le son" : "Couper le son"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>

        {/* Overlay pour empêcher le clic droit */}
        <div className="absolute inset-0 z-10 pointer-events-none" />
      </div>

      {/* Bouton d'entrée */}
      <button
        onClick={() => setIsVisible(false)}
        className="mt-8 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 rounded-sm flex items-center gap-2 z-20"
      >
        Enter The Real World
      </button>

      <p className="mt-4 text-white/30 text-[10px] font-mono uppercase tracking-widest">
        Cinema Mode Initiated • Click speaker for sound
      </p>
    </div>
  );
}