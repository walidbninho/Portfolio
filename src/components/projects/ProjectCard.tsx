"use client";

import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/constants/data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ImageOff } from "lucide-react";

type Project = typeof DATA.projects[number];

export const ProjectCard = ({ project }: { project: Project }) => {
    const fit = project.imageFit || "cover";
    const [imageError, setImageError] = useState(false);

    return (
        <Link href={project.link} className="group block space-y-4">
            {/* Thumbnail Container */}
            <div className="aspect-4/3 bg-secondary/50 relative overflow-hidden border border-transparent group-hover:border-border/50 transition-all duration-500 rounded-sm">

                {/* Tech Pattern for Contain Mode */}
                {fit === 'contain' && !imageError && (
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px]" />
                )}

                {project.image && !imageError ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={cn(
                            "transition-transform duration-700 group-hover:scale-105",
                            fit === 'contain' ? "object-contain p-8" : "object-cover"
                        )}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    /* Fallback State */
                    <div className="w-full h-full bg-muted flex flex-col items-center justify-center text-muted-foreground gap-2">
                        <ImageOff className="w-8 h-8 opacity-50" />
                        <span className="text-xs font-mono uppercase tracking-widest opacity-70">
                            No Visual
                        </span>
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            {/* Details */}
            <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-muted-foreground transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                        {project.year}
                    </span>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{project.category}</span>
                </div>
            </div>
        </Link>
    );
};
