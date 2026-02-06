"use client";

import { useState, useEffect } from "react";

export default function TrumanIntro() {
  const [isVisible, setIsVisible] = useState(true);

  // ID de votre vidéo (Changez-le ici si besoin)
  // Scène Truman Show "Good Morning" fiable
  const VIDEO_ID = "d-mx0eL2j2c"; 

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center animate-in fade-in duration-500">
      
      {/* Conteneur Vidéo "Cinéma" */}
      {/* overflow-hidden est CRUCIAL pour couper les bords de YouTube */}
      <div className="relative w-full max-w-5xl aspect-video rounded-none md:rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black">
        
        {/* Le Wrapper qui désactive la souris et zoome */}
        <div className="absolute inset-0 w-full h-full pointer-events-none scale-[1.35]">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/CjSzCuC7tOI?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${VIDEO_ID}&showinfo=0&rel=0&iv_load_policy=3&fs=0&disablekb=1`}
            title="Intro Scene"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Overlay transparent pour empêcher le clic droit sur la vidéo */}
        <div className="absolute inset-0 z-10" />
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
