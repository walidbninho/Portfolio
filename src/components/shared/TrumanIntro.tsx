"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function TrumanIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
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
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  if (!isVisible) return null;

  return (
    // Z-INDEX 100 : Pour être sûr de passer au-dessus de la Navbar
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center animate-in fade-in duration-500">
      
      {/* CONTENEUR VIDÉO PLEIN ÉCRAN 
          w-full h-full : Prend tout l'espace disponible
      */}
      <div className="relative w-full h-full bg-black group">
        
        {/* LECTEUR VIDÉO 
            object-contain : La vidéo s'agrandit au max pour toucher les bords 
            sans couper l'image (pas de crop).
        */}
        <video 
          ref={videoRef}
          autoPlay 
          muted={isMuted}
          loop 
          playsInline 
          className="w-full h-full object-contain"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* BOUTON SON (Flottant en bas à droite) */}
        <button
          onClick={toggleSound}
          className="absolute bottom-8 right-8 p-4 bg-black/50 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110 border border-white/10 z-30"
          title={isMuted ? "Activer le son" : "Couper le son"}
        >
          {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
        </button>

        {/* BOUTON ENTER (Flottant en bas au centre) */}
        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center z-20 gap-4">
          <button
            onClick={() => setIsVisible(false)}
            className="px-10 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 rounded-sm"
          >
            Enter The Real World
          </button>
          
          <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">
            Cinema Mode • Click speaker for sound
          </p>
        </div>

        {/* Overlay protection */}
        <div className="absolute inset-0 z-10 pointer-events-none" />
      </div>
    </div>
  );
}