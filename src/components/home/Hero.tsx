"use client";

import { motion } from "framer-motion";
import { DATA } from "@/constants/data";
import { Container } from "@/components/shared/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <Container className="pt-20 pb-16 md:pt-32 md:pb-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    Hello, I'm {DATA.name}.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                    {DATA.bio}
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                    {DATA.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-2"
                        >
                            <social.icon className="h-4 w-4" />
                            {social.name}
                        </a>
                    ))}
                </div>

                <div className="flex gap-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8"
                    >
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        href="/cad"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8"
                    >
                        CAD Models
                    </Link>
                </div>
            </motion.div>
        </Container>
    );
};
