"use client";

import Link from "next/link";
import Image from "next/image";
import { DATA } from "@/constants/data";
import { Container } from "@/components/shared/Container";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Filter Logic
  const cadProjects = DATA.projects.filter(p =>
    p.tech.some(t => ["CAD", "Mechanical", "Aerostructures", "Drafting", "Animation", "Modeling"].some(tag => t.includes(tag)))
  );

  const roboticsProjects = DATA.projects.filter(p =>
    p.tech.some(t => ["Robotics", "Embedded", "IoT", "Avionics", "Arduino", "Esp8266", "STM32", "CAN"].some(tag => t.includes(tag)))
  );

  const softwareProjects = DATA.projects.filter(p =>
    p.tech.some(t => ["Software", "Simulation", "Python", "Finite Element Analysis", "CFD"].some(tag => t.includes(tag))) &&
    !roboticsProjects.includes(p) 
  );

  // Specific override to ensure clean separate lists if overlap occurs
  const distinctCad = cadProjects;
  const distinctRobotics = roboticsProjects.filter(p => !distinctCad.find(c => c.id === p.id));
  const distinctSoftware = softwareProjects.filter(p => !distinctCad.find(c => c.id === p.id) && !distinctRobotics.find(r => r.id === p.id));

  return (
    <Container className="py-12 md:py-24 space-y-32">


      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              {DATA.name} <span className="text-primary font-mono text-3xl align-top">[//]</span> <br />
              <span className="text-muted-foreground">{DATA.title}</span>
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground leading-relaxed">
              {DATA.tagline}
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-none bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-none border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="w-full max-w-[300px] aspect-square relative border border-border/50 bg-accent/10">
          <Image
            src={DATA.avatarUrl}
            alt={DATA.name}
            fill
            className="object-cover grayscale contrast-125"
            priority
          />
          {/* Tech/Industrial Overlay Detail */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50" />
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-6 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight">About</h2>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>{DATA.bio}</p>
          <p>
            Based in {DATA.location}, I combine technical engineering principles with modern software development to build robust systems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Technical Stack</h2>
        <TechMarquee />
      </section>

      {/* SECTION 01: MECHANICAL */}
      <section className="space-y-12">
        <div className="border-b border-border pb-4">
          <h2 className="text-3xl font-mono font-bold tracking-tighter uppercase text-muted-foreground">
            <span className="text-primary mr-2">01 //</span> Mechanical & CAD Design
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {distinctCad.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* SECTION 02: ROBOTICS */}
      <section className="space-y-12">
        <div className="border-b border-border pb-4">
          <h2 className="text-3xl font-mono font-bold tracking-tighter uppercase text-muted-foreground">
            <span className="text-primary mr-2">02 //</span> Robotics & Embedded Systems
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {distinctRobotics.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* SECTION 03: SOFTWARE */}
      <section className="space-y-12">
        <div className="border-b border-border pb-4">
          <h2 className="text-3xl font-mono font-bold tracking-tighter uppercase text-muted-foreground">
            <span className="text-primary mr-2">03 //</span> Simulation & Software
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {distinctSoftware.length > 0 ? (
            distinctSoftware.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center border border-dashed border-border text-muted-foreground font-mono text-sm">
              No pure software projects listed yet.
            </div>
          )}
        </div>
      </section>

    </Container>
  );
}