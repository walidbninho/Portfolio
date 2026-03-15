import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const DATA = {
  name: "Walid",
  title: "Aerospace Engineer | Embedded Systems Specialist",
  tagline: "I build the nervous systems of autonomous flight vehicles.",
  bio: "I am an aeronautical engineering student specializing in embedded systems, based in Berrechid, Morocco. My passion lies at the exact intersection of mechanical design and software development—where physical structures meet digital intelligence. My current technical focus spans the entire engineering spectrum. On the hardware side, I design advanced aerospace surfaces and simulate complex kinematic assemblies using CATIA V5. On the software side, I leverage Python and C/C++ to develop numerical solvers for thermal analysis and process engineering data. Looking forward, my goal is to architect the embedded systems that will drive next-generation autonomous vehicles.",
  avatarUrl: "/images/profile.png",
  location: "Berrechid, Morocco",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/walidbninho",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/", // Ajoutez votre vrai lien ici
      icon: Linkedin,
    },
    {
      name: "Resume",
      url: "/resume",
      icon: FileText,
    },
    {
      name: "Email",
      url: "mailto:contact@walid.eng",
      icon: Mail,
    },
  ],
  stack: [
    { name: "C++", slug: "cplusplus" },
    { name: "Python", slug: "python" },
    { name: "STM32", slug: "stmicroelectronics" },
    { name: "CATIA", path: "/images/logos/catia.svg" }, // Custom SVG
    { name: "SolidWorks", path: "/images/logos/solidworks.svg" }, // Custom SVG
    { name: "MATLAB", path: "/images/logos/matlab.svg" }, // Custom SVG
    { name: "Simulink", path: "/images/logos/simulink.svg" }, // Custom SVG
    { name: "Ansys", path: "/images/logos/ansys.svg" }, // Custom SVG
    { name: "Abaqus", path: "/images/logos/abaqus.svg" }, // Custom SVG
    { name: "Arduino", slug: "arduino" },
    { name: "KiCad", slug: "kicad" },
    { name: "Linux", slug: "linux" },
    { name: "Git", slug: "git" },
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
  ],
  projects: [
    {
      id: "boeing-737-max-surface",
      title: "Boeing 737-9 MAX Surface Modeling",
      category: "AEROSPACE DESIGN",
      description: "Advanced Surfacing and Assembly Management. Full 3D modeling of the fuselage and wings using Generative Shape Design (GSD) to ensure aerodynamic continuity. Managed a large-scale assembly hierarchy, integrating landing gear and empennage structures. Reverse-engineered structural components to validate geometric accuracy.",
      tech: ["Catia V5", "GSD", "Assembly", "Aerospace Design"],
      image: "", // Placeholder or find matched image later
      imageFit: "cover",
      status: "Completed",
      year: "Jan 2026 - Mar 2026",
      has3D: false, // Update if 3D model path exists
      link: "#",
    },
    {
      id: "radial-engine-v8",
      title: "Radial Engine & V8 Mechanism Design",
      category: "MECHANICAL DESIGN",
      description: "Detailed parametric modeling of engine components using Part Design. Simulated the combustion cycle movement using DMU Kinematics to detect collisions and validate clearance. Generated 2D technical drawings with GD&T standards.",
      tech: ["Catia V5", "Part Design", "DMU Kinematics", "Drafting"],
      image: "", 
      imageFit: "cover",
      status: "Completed",
      year: "Jan 2026",
      has3D: false,
      link: "#",
    },
    {
      id: "thermal-dissipation",
      title: "Thermal Dissipation Analysis",
      category: "THERMAL ANALYSIS",
      description: "Developed a numerical solver to model heat transfer (Conduction/Convection) in engine cooling fins. Simulated steady-state temperature distribution across cylindrical geometries using Fourier's Law and visualized thermal gradients to optimize material selection.",
      tech: ["Python", "Thermodynamics", "Numerical Methods"],
      image: "",
      imageFit: "cover",
      status: "Completed",
      year: "Nov 2025",
      has3D: false,
      link: "#",
    }
  ],
};