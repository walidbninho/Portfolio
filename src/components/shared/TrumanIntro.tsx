"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function TrumanIntro() {
  const [isVisible, setIsVisible] = useState(true);

  // Empêche le scroll quand l'intro est active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center p-4 animate-in fade-in duration-500">
      
      {/* Conteneur Vidéo (Responsive) */}
      <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/20">
        <iframe 
          width="100%" 
          height="100%" 
          // ID de la vidéo : Scène 'Good Morning' (d-mx0eL2j2c) ou Scène Finale (Gn5Qm74xlpw)
          // autoplay=1 : Essaie de lancer la vidéo auto
          src="https://www.youtube.com/embed/Gn5Qm74xlpw?autoplay=1&controls=0&modestbranding=1&rel=0" 
          title="Truman Show Scene"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="object-cover"
        />
      </div>

      {/* Bouton pour entrer */}
      <button
        onClick={() => setIsVisible(false)}
        className="mt-8 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 rounded-sm flex items-center gap-2"
      >
        Enter The Real World
      </button>

      <p className="mt-4 text-white/50 text-xs font-mono">
        Click to skip intro
      </p>
    </div>
  );
}