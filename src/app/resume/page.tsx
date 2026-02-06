"use client";

import { DATA } from "@/constants/data";
import { Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      
      {/* CONTAINER A4 (Max-width contrôlée pour la lisibilité) */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">

        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 uppercase">
              {DATA.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Aerospace Engineer & Embedded Systems
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm font-mono text-muted-foreground">
              <span>{DATA.location}</span>
              <span className="hidden md:inline">•</span>
              <a href={`mailto:${DATA.socials.find(s => s.name === 'Email')?.url.replace('mailto:', '')}`} className="hover:text-foreground transition-colors underline decoration-1 underline-offset-4">
                contact@walid.eng
              </a>
              <span className="hidden md:inline">•</span>
              <Link href="/" className="hover:text-foreground transition-colors underline decoration-1 underline-offset-4">
                walid.eng
              </Link>
            </div>
          </div>

          {/* BOUTON DOWNLOAD (Style Industriel) */}
          <a
            href="/resume.pdf" // Assurez-vous d'avoir mis votre PDF dans public/
            target="_blank"
            className="mt-6 md:mt-0 inline-flex items-center px-6 py-2 border border-foreground text-foreground text-xs font-mono font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
          >
            <Download size={14} className="mr-2" />
            Download PDF
          </a>
        </header>

        {/* --- SECTION: SUMMARY --- */}
        <section className="mb-12">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground mb-6">
            01 // Profile
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90 max-w-2xl">
            {DATA.bio}
          </p>
        </section>

        {/* --- SECTION: EXPERIENCE --- */}
        <section className="mb-12">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground mb-8">
            02 // Experience
          </h2>
          
          <div className="space-y-10">
            {/* ITEM 1 */}
            <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
              <div className="text-sm font-mono text-muted-foreground pt-1">
                Summer 2024
              </div>
              <div>
                <h3 className="text-lg font-bold">Embedded Systems Intern</h3>
                <div className="text-sm text-muted-foreground mb-3 font-mono">Company Name • Casablanca</div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm md:text-base text-foreground/80">
                  <li>Developed low-level C++ drivers for STM32 microcontrollers to interface with IMU sensors.</li>
                  <li>Designed and soldered a custom PCB for a drone prototype, reducing weight by 15%.</li>
                  <li>Implemented a real-time Kalman Filter for sensor fusion, improving flight stability.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: PROJECTS --- */}
        <section className="mb-12">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground mb-8">
            03 // Selected Works
          </h2>
          
          <div className="space-y-10">
            {/* On map directement les projets de DATA */}
            {DATA.projects.map((project) => (
              <div key={project.id} className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8 group">
                <div className="text-sm font-mono text-muted-foreground pt-1">
                  {project.year}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold group-hover:underline decoration-1 underline-offset-4">
                      {project.title}
                    </h3>
                    {project.link && (
                      <Link href={project.link} className="text-muted-foreground hover:text-foreground">
                        <ArrowUpRight size={14} />
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-muted-foreground border border-border px-1.5 py-0.5 rounded-none">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION: EDUCATION --- */}
        <section className="mb-12">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground mb-8">
            04 // Education
          </h2>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
              <div className="text-sm font-mono text-muted-foreground pt-1">
                2022 — 2025
              </div>
              <div>
                <h3 className="text-lg font-bold">ENSA Berrechid</h3>
                <p className="text-base text-foreground/80">Diplôme d'Ingénieur d'État, Génie Aéronautique</p>
                <p className="text-sm text-muted-foreground mt-1">Focus: Systèmes Embarqués & Mécanique de Vol.</p>
              </div>
            </div>

             <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
              <div className="text-sm font-mono text-muted-foreground pt-1">
                2023 — 2024
              </div>
              <div>
                <h3 className="text-lg font-bold">ALX Africa</h3>
                <p className="text-base text-foreground/80">Software Engineering Fellow</p>
                <p className="text-sm text-muted-foreground mt-1">Holberton School curriculum. C, Python, DevOps.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: SKILLS --- */}
        <section>
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground mb-8">
            05 // Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-sm mb-3 border-b border-border pb-1 inline-block">Engineering</h4>
              <ul className="space-y-1 text-sm text-muted-foreground font-mono">
                <li>CATIA V5 / V6</li>
                <li>SolidWorks</li>
                <li>ANSYS Fluent</li>
                <li>Thermodynamics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 border-b border-border pb-1 inline-block">Embedded</h4>
              <ul className="space-y-1 text-sm text-muted-foreground font-mono">
                <li>C / C++ (Advanced)</li>
                <li>STM32 (HAL/LL)</li>
                <li>RTOS (FreeRTOS)</li>
                <li>PCB Design (KiCad)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 border-b border-border pb-1 inline-block">Software</h4>
              <ul className="space-y-1 text-sm text-muted-foreground font-mono">
                <li>Python / MATLAB</li>
                <li>Git / CI/CD</li>
                <li>Linux / Bash</li>
                <li>React / Next.js</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}