"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { DATA } from "@/constants/data";

export default function ProjectsPage() {
    return (
        <Container className="py-12 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold mb-8">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {DATA.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Container>
    );
}
