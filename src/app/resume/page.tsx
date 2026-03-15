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
            I am an aeronautical engineering student specializing in embedded systems, based in Berrechid, Morocco. My passion lies at the exact intersection of mechanical design and software development—where physical structures meet digital intelligence. My current technical focus spans the entire engineering spectrum. On the hardware side, I design advanced aerospace surfaces and simulate complex kinematic assemblies using CATIA V5. On the software side, I leverage Python and C/C++ to develop numerical solvers for thermal analysis and process engineering data. Looking forward, my goal is to architect the embedded systems that will drive next-generation autonomous vehicles.
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
                2023 - 2024
              </div>
              <div>
                <h3 className="text-lg font-bold">ALX Web Development Program</h3>
                <div className="text-sm text-muted-foreground mb-3 font-mono">ALX, African Leadership Group • Remote</div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm md:text-base text-foreground/80">
                  <li>Collaborated in agile teams to deliver complex technical projects under strict deadlines.</li>
                  <li>Developed rigorous documentation and version control habits (Git), transferable to industrial quality standards.</li>
                  <li>Gained proficiency in data structuring and UI logic, enhancing ability to design intuitive control interfaces.</li>
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
            {/* Project 1 */}
            <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8 group">
              <div className="text-sm font-mono text-muted-foreground pt-1">
                Jan 2026 - Mar 2026
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">
                  Boeing 737-9 MAX Surface Modeling
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                  Advanced Surfacing and Assembly Management. Full 3D modeling of the fuselage and wings using Generative Shape Design (GSD) to ensure aerodynamic continuity. Managed a large-scale assembly hierarchy, integrating landing gear and empennage structures. Reverse-engineered structural components to validate geometric accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Catia V5", "GSD", "Assembly", "Aerospace Design"].map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground border border-border px-1.5 py-0.5 rounded-none">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8 group">
              <div className="text-sm font-mono text-muted-foreground pt-1">
                Jan 2026
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">
                  Radial Engine & V8 Mechanism Design
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                  Detailed parametric modeling of engine components using Part Design. Simulated the combustion cycle movement using DMU Kinematics to detect collisions and validate clearance. Generated 2D technical drawings with GD&T standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Catia V5", "Part Design", "DMU Kinematics", "Drafting"].map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground border border-border px-1.5 py-0.5 rounded-none">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8 group">
              <div className="text-sm font-mono text-muted-foreground pt-1">
                Nov 2025
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">
                  Thermal Dissipation Analysis
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                  Developed a numerical solver to model heat transfer (Conduction/Convection) in engine cooling fins. Simulated steady-state temperature distribution across cylindrical geometries using Fourier's Law and visualized thermal gradients to optimize material selection.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Thermodynamics", "Numerical Methods"].map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground border border-border px-1.5 py-0.5 rounded-none">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
                2025 - 2028
              </div>
              <div>
                <h3 className="text-lg font-bold">ENSA Berrechid, Hassan 1st University</h3>
                <p className="text-base text-foreground/80">Engineering Degree in Aeronautical Engineering (Embedded Systems)</p>
                <p className="text-sm text-muted-foreground mt-1">Relevant Coursework: CAD (Catia V5), Signal Processing, Thermodynamics, Heat Transfer, C++, Python. Member of Aero Club ENSAB: Active participation in technical workshops and drone design competitions.</p>
              </div>
            </div>

             <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
              <div className="text-sm font-mono text-muted-foreground pt-1">
                2023 - 2025
              </div>
              <div>
                <h3 className="text-lg font-bold">ENSA Berrechid, Hassan 1st University</h3>
                <p className="text-base text-foreground/80">Preparatory Cycle (Maths, Physics, Engineering Science)</p>
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

        {/* --- SECTION: CERTIFICATIONS --- */}
        <section className="mt-12">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground mb-8">
            06 // Certifications
          </h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
              <div className="text-sm font-mono text-muted-foreground pt-1">
                Certificate 1
              </div>
              <div>
                <h3 className="text-lg font-bold">Python for Everybody Specialization</h3>
                <p className="text-base text-foreground/80">University of Michigan</p>
                <p className="text-sm text-muted-foreground mt-1">Data Structures & Algorithms</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
              <div className="text-sm font-mono text-muted-foreground pt-1">
                Certificate 2
              </div>
              <div>
                <h3 className="text-lg font-bold">Meta Front-End Developer Certificate</h3>
                <p className="text-base text-foreground/80">Meta</p>
                <p className="text-sm text-muted-foreground mt-1">Project Management & UI Design</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}