import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const DATA = {
  name: "Walid",
  title: "Aerospace Engineer | Embedded Systems Specialist",
  tagline: "I build the nervous systems of autonomous flight vehicles.",
  bio: "I am an aerospace engineer standing at the intersection of mechanical design and embedded software. My expertise isn't just in making things fly—it's in giving them the intelligence to do so autonomously. From designing complex kinematic assemblies in CATIA to writing real-time C++ firmware for STM32 flight controllers, I bridge the gap between hardware and software. I don't just solve problems; I architect systems that perform under pressure.",
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
      id: "v8-kinematics",
      title: "V8 Engine: Kinematic Assembly",
      category: "MECHANICAL ANIMATION",
      description: "Simulation complète de la séquence d'assemblage d'un moteur V8. Analyse des tolérances géométriques et cinématique des pièces mobiles (Vilebrequin, Bielles). Démonstration de l'interopérabilité des composants complexes.",
      tech: ["CATIA V5", "Kinematics", "Animation", "Assembly"],
      image: "/images/Engine_Block_Assembly_Image_1.png", // Matches disk file
      imageFit: "contain", // Transparent PNG -> Contain
      status: "Production Ready", // Added for compatibility
      year: "2025", // Added for compatibility
      has3D: true,
      modelPath: "/models/v8_engine.glb", // Found on disk
      link: "/projects/v8-kinematics",
    },
    {
      id: "radial-engine-study",
      title: "Radial Engine: 2D to 3D Workflow",
      category: "MANUFACTURING / DRAFTING",
      description: "Cycle de conception complet : Interprétation de plans techniques 2D (Blueprints) et conversion en assemblage 3D paramétrique. Vérification des interférences et optimisation de masse.",
      tech: ["SolidWorks", "Drafting", "Parametric Modeling"],
      image: "/images/Radial Engine.png", // Matches disk file
      imageFit: "contain", // Blueprint -> Contain (or cover if full bleed preferred, user suggested contain/cover, sticking to contain as safe default for docs)
      status: "Prototype", // Added for compatibility
      year: "2024", // Added for compatibility
      has3D: true,
      modelPath: "/models/radial_engine.glb",
      link: "/projects/radial-engine-study",
    },
    {
      id: "latsvika-uav",
      title: "Latsvika Long-Endurance UAV",
      category: "AEROSTRUCTURES / AVIONICS",
      description: "Conception aérodynamique d'un drone à voilure fixe. Optimisation du fuselage pour la réduction de traînée et intégration des charges utiles (Payload Integration).",
      tech: ["Aerodynamics", "Composite Materials", "CFD"],
      image: "/images/UAV.png", // Matches disk file
      imageFit: "cover", // Photo -> Cover
      status: "Flight Tested", // Added for compatibility
      year: "2024", // Added for compatibility
      has3D: true,
      modelPath: "/models/uj-32_lastvika_uav.glb",
      link: "/projects/latsvika-uav",
    },
    {
      id: "drone-structure",
      title: "Quadcopter Structural Frame",
      category: "FEM ANALYSIS / STRUCTURES",
      description: "Analyse structurelle (FEA) d'un châssis de drone. Optimisation topologique pour maximiser la rigidité tout en minimisant le poids (Weight reduction).",
      tech: ["Finite Element Analysis", "Structural Design", "Carbon Fiber"],
      image: "/images/Quadcopter Structural Frame.png", // Matches disk file
      imageFit: "cover",
      status: "Verified", // Added for compatibility
      year: "2023", // Added for compatibility
      has3D: true,
      modelPath: "/models/drone_frame.glb",
      link: "/projects/drone-structure",
    },
    {
      id: "v6-engine-detail",
      title: "High-Fidelity V6 Engine",
      category: "AUTOMOTIVE / THERMAL",
      description: "Modélisation haute fidélité d'un bloc V6. Étude des circuits de refroidissement et d'admission. Rendu photoréaliste pour validation design.",
      tech: ["Mechanical Design", "Surface Modeling", "Rendering"],
      image: "/images/High-Fidelity V6 Engine.png", // Matches disk file
      imageFit: "contain",
      status: "Concept", // Added for compatibility
      year: "2023", // Added for compatibility
      has3D: true,
      modelPath: "/models/v6_car_engine_with_engine_morethem.glb",
      link: "/projects/v6-engine-detail",
    },
    {
      id: "wifi-iot-rover",
      title: "Wi-Fi IoT Robotic Rover",
      category: "ROBOTICS / IOT",
      year: "2024",
      description: "Design and fabrication of a wireless autonomous vehicle powered by ESP8266 (NodeMCU). Features a custom L298N motor drive architecture and a mobile-based IoT control interface via WebSocket. Demonstrates hardware-software integration and power management.",
      tech: ["C++", "ESP8266", "IoT", "Motor Control", "Hardware Assembly"],
      image: "/images/robot-car.jpg",
      imageFit: "cover", // Use "cover" for real photos
      status: "Prototype",
      has3D: false, // It's a physical build
      link: "#",
    },
    {
      id: "ev-can-bus-sim",
      title: "EV CAN Bus Network Simulator",
      category: "AUTOMOTIVE / PROTOCOLS",
      year: "2024",
      description: "Development of a functional Controller Area Network (CAN) to simulate Electric Vehicle subsystems. Utilizes MCP2515 modules to arbitrate real-time data exchange (Battery SOC, Temp) between multiple Arduino-based ECUs. Replica of industry-standard automotive communication.",
      tech: ["CAN Protocol", "C++", "Arduino", "Real-Time Systems", "MCP2515"],
      image: "/images/can-bus.jpg",
      imageFit: "cover",
      status: "Functional",
      has3D: false,
      link: "#",
    }
  ],
};