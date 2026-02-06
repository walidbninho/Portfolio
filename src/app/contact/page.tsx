"use client";

import { Container } from "@/components/shared/Container";
import { DATA } from "@/constants/data";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <Container className="py-24 max-w-2xl min-h-[60vh] flex flex-col justify-center">

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter">Get in Touch</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        I'm currently looking for new opportunities in aerospace engineering and embedded systems.
                        Whether you have a question about my projects or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="pt-8 space-y-4">
                    <a
                        href="mailto:contact@walid.eng"
                        className="inline-flex items-center gap-3 text-2xl font-mono font-bold hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
                    >
                        <Mail className="w-6 h-6" />
                        contact@walid.eng
                    </a>
                </div>

                <div className="pt-12 border-t border-border/50">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Connect Elsewhere</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {DATA.socials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 border border-border hover:bg-secondary/50 transition-colors group"
                            >
                                <span className="font-mono font-medium flex items-center gap-2">
                                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    {social.name}
                                </span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </Container>
    );
}
