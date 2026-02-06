import { Container } from "./Container";
import { DATA } from "@/constants/data";

export const Footer = () => {
    return (
        <footer className="py-12 mt-16 text-muted-foreground border-t border-border/40 print:hidden">
            <Container className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <p>&copy; {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
                <div className="flex gap-4">
                    {DATA.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </Container>
        </footer>
    );
}
