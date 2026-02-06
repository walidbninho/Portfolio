import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 60" // Slightly adjusted viewbox to tighten whitespace
            className={cn("fill-current", className)}
            aria-label="Walid Aero Logo"
        >
            <g transform="translate(40, 30) scale(0.15)">
                {/* Blue Triangle/Accent */}
                <path d="M -20 120 L 0 200 L 20 120 Z" fill="#3b82f6" />
                {/* Wing/Shield Shape - Changed to currentColor for theme adaptation */}
                <path d="M 0 -160 C 0 -160, 25 -90, 35 -40 L 160 80 L 160 120 L 50 80 L 25 120 L 0 100 L -25 120 L -50 80 L -160 120 L -160 80 L -35 -40 C -25 -90, 0 -160, 0 -160 Z" fill="currentColor" opacity="0.9" />
            </g>

            {/* WALID Text - Set to currentColor to adapt to text-foreground */}
            <text x="90" y="38" fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="800" fontSize="28" fill="currentColor" letterSpacing="1">
                WALID
            </text>

            {/* Divider Blue Line */}
            <rect x="195" y="15" width="2" height="25" fill="#3b82f6" />

            {/* AERO Text - Set to currentColor */}
            <text x="210" y="38" fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="500" fontSize="28" fill="currentColor" letterSpacing="1">
                AERO
            </text>
        </svg>
    );
};
