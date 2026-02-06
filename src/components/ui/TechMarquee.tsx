"use client";

import { cn } from "@/lib/utils";
import { DATA } from "@/constants/data";

export function TechMarquee() {
    // Duplicate the stack to ensure seamless loop
    const duplicateStack = [...DATA.stack, ...DATA.stack];

    return (
        <div className="w-full overflow-hidden border-y border-border/50 bg-secondary/20 py-8">
            <div className="flex w-max animate-marquee items-center gap-12">
                {duplicateStack.map((tech, index) => (
                    <div
                        key={`${tech.name}-${index}`}
                        className="group relative flex h-20 w-40 items-center justify-center transition-all duration-300 hover:scale-110"
                        title={tech.name}
                    >
                        {/* Always Original Brand Color */}
                        <img
                            src={tech.path || `https://cdn.simpleicons.org/${tech.slug}`}
                            alt={tech.name}
                            className="h-full w-full object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
