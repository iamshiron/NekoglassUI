import type { Metadata } from "next";
import { Nunito, Fredoka, Inconsolata } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site/header";

const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
});

const fredoka = Fredoka({
    subsets: ["latin"],
    variable: "--font-fredoka",
    weight: ["400", "500", "600", "700"],
});

const inconsolata = Inconsolata({
    subsets: ["latin"],
    variable: "--font-inconsolata",
});

export const metadata: Metadata = {
    title: "Nekoglass UI",
    description: "A component library with a glassmorphism design.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={cn(
                    "min-h-screen font-sans antialiased",
                    nunito.variable,
                    fredoka.variable,
                    inconsolata.variable,
                )}
            >
                <a
                    href="#main-content"
                    className={cn(
                        "sr-only focus:not-sr-only focus:absolute focus:z-50",
                        "focus:top-2 focus:left-2 focus:px-4 focus:py-2",
                        "focus:rounded-md focus:bg-primary focus:text-primary-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    )}
                >
                    Skip to content
                </a>
                <SiteHeader />
                <main id="main-content" className="relative">
                    {children}
                </main>
            </body>
        </html>
    );
}
