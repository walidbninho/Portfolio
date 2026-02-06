"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { DATA } from "@/constants/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

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
                    <div className="relative w-8 h-8">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="font-mono font-bold text-xl tracking-tighter group-hover:tracking-widest transition-all duration-300">
                        WALID <span className="text-primary">[//]</span> AERO
                    </span>
                </Link>

                <div className="flex gap-6 md:gap-8 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
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
                </div>
            </Container>
        </nav >
    );
};
