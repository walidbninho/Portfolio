"use client";

import { useState, useEffect } from "react";

export default function TrumanIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Bloque le scroll pendant l'intro
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center animate-in fade-in duration-500">
      
      {/* Conteneur Cinéma */}
      <div className="relative w-full max-w-5xl aspect-video rounded-none md:rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black">
        
        {/* LECTEUR NATIF (Plus de YouTube, plus d'erreurs) */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline // Important pour que ça marche sur iPhone/Mobile
          className="object-cover w-full h-full"
        >
          {/* Assurez-vous d'avoir mis le fichier dans public/videos/intro.mp4 */}
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay transparent (optionnel, pour empêcher le clic droit) */}
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
        Cinema Mode Initiated
      </p>
    </div>
  );
}