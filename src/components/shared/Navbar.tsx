"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { DATA } from "@/constants/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/shared/Logo";

export const Navbar = () => {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/resume", label: "Resume" },
    ];

    return (
        <nav className="py-8 md:py-12 w-full sticky top-0 z-50 bg-background/80 backdrop-blur-sm print:hidden">
            <Container className="flex justify-between items-center">
                <Link
                    href="/"
                    className="flex items-center gap-2 group"
                >
                    <Logo className="h-10 w-auto text-foreground transition-all duration-300 group-hover:opacity-80" />
                </Link>

                <div className="flex gap-6 md:gap-8 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-base md:text-lg font-medium transition-colors hover:text-primary",
                                pathname === link.href
                                    ? "text-primary border-b-2 border-primary pb-0.5"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="w-px h-6 bg-border mx-2" />
                    <ThemeToggle />
                    <a
                        href="/resume.pdf"
                        download
                        className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Download CV
                    </a>
                </div>
            </Container>
        </nav >
    );
};
