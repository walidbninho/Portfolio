import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://walid-aero.me'), // Replace with actual domain
  title: {
    default: "Walid | Aerospace Engineer & Embedded Systems",
    template: "%s | Walid Aero"
  },
  description: "Portfolio of an Aerospace Engineering Student at ENSAB. Specializing in Embedded Systems (STM32), CAD Design (CATIA), and Robotics.",
  keywords: [
    "Aerospace Engineer",
    "Embedded Systems",
    "STM32",
    "CATIA",
    "Robotics",
    "Morocco",
    "Portfolio",
    "Flight Controller",
    "Avionics"
  ],
  authors: [{ name: "Walid" }],
  creator: "Walid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walid-aero.me",
    title: "Walid - Aerospace & Embedded Engineer",
    description: "Portfolio of high-performance avionics, mechanical design, and embedded systems.",
    siteName: "Walid Aerospace Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Walid Aerospace Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walid - Aerospace & Embedded Engineer",
    description: "Portfolio of high-performance avionics and mechanical design.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Walid",
              url: "https://walid-aero.me",
              jobTitle: "Aerospace Engineer",
              alumniOf: "National School of Applied Sciences (ENSA)",
              sameAs: [
                "https://github.com/walidbninho",
                "https://linkedin.com/in/"
              ]
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
