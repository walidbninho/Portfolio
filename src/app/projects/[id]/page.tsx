"use client";

import { notFound, useParams } from "next/navigation";
import { DATA } from "@/constants/data";
import { Container } from "@/components/shared/Container";
import { ModelViewer } from "@/components/3d/ModelViewer";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const project = DATA.projects.find((p) => p.id === id);

    if (!project) {
        return notFound();
    }

    // Check for 3D capability using the new schema
    const show3D = project.has3D && project.modelPath;

    return (
        <Container className="py-24 max-w-[1400px]">
            {/* Back Navigation */}
            <div className="mb-12">
                <Link href="/" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Archive
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                {/* Left Column: Context & Specifications (4 cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-12">
                    <div>
                        <div className="flex items-center gap-3 text-muted-foreground mb-6 font-mono text-xs uppercase tracking-widest">
                            <span>{project.year}</span>
                            <span>•</span>
                            <span>{project.category}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                            {project.title}
                        </h1>

                        <div className="prose dark:prose-invert text-muted-foreground leading-relaxed">
                            <p>{project.description}</p>
                        </div>
                    </div>

                    <div className="space-y-8 border-t border-border pt-8">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs border border-border px-3 py-1.5 font-medium bg-secondary/50">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Status</h3>
                            <span className="inline-flex items-center gap-2 text-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                {project.status}
                            </span>
                        </div>

                        {/* Optional External Link */}
                        <Button variant="outline" className="w-full gap-2 rounded-none" asChild>
                            <Link href="#">
                                <ExternalLink className="w-4 h-4" /> View Documentation
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Right Column: Visual Experience (8 cols) */}
                <div className="lg:col-span-8">
                    <div className="w-full h-[50vh] md:h-[70vh] bg-secondary/20 border border-border/50 relative overflow-hidden rounded-sm">
                        {show3D ? (
                            <>
                                <ModelViewer modelPath={project.modelPath!} poster={project.image} />
                                <div className="absolute bottom-6 left-6 pointer-events-none">
                                    <div className="bg-background/80 backdrop-blur px-3 py-1.5 border border-border text-xs font-mono uppercase tracking-wider">
                                        Interactive 3D View
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="relative w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                    />
                                )}
                                {!project.image && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-muted-foreground/30 font-mono text-sm uppercase tracking-widest">
                                            Awaiting Visuals
                                        </span>
                                    </div>
                                )}
                                <div className="absolute bottom-6 left-6">
                                    <div className="bg-background/80 backdrop-blur px-3 py-1.5 border border-border text-xs font-mono uppercase tracking-wider">
                                        Static Preview
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </Container>
    );
}
