import type { Metadata } from "next";
import { Nunito, Fredoka, Inconsolata } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
                {children}
            </body>
        </html>
    );
}
