"use client";

import { Button } from "@/components/ui/button";
import { Background } from "@/components/ui/background";

export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col overflow-hidden">
            <Background />

            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-16">
                <div className="max-w-3xl text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            NekoglassUI
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            A drop-in ShadCN compatible component layer styled
                            with a refined tri-theme glass aesthetic. Build
                            vivid, theme-aware experiences without rewriting
                            your UI primitives.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Button size="lg" className="px-8">
                            Get Started
                        </Button>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="px-8"
                            asChild
                        >
                            <a href="/docs/components/button">
                                Browse Components
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="px-8"
                            asChild
                        >
                            <a href="/docs/theming">Theming</a>
                        </Button>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4 pt-8">
                        <FeatureCard
                            title="Theme Aware"
                            desc="Light · Dark · AMOLED with semantic tokens."
                        />
                        <FeatureCard
                            title="API Compatible"
                            desc="Drop into ShadCN codebases with zero refactors."
                        />
                        <FeatureCard
                            title="Glass Surface"
                            desc="Consistent frosted layers & motion micro-interactions."
                        />
                    </div>
                </div>
            </main>

            <footer className="relative z-10 px-6 md:px-10 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <span>© {new Date().getFullYear()} Nekoglass UI</span>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="/docs/introduction"
                        className="hover:text-foreground transition-colors"
                    >
                        Docs
                    </a>
                    <a
                        href="/docs/components/button"
                        className="hover:text-foreground transition-colors"
                    >
                        Components
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="relative p-4 rounded-xl border border-[rgba(var(--surface-rgb),0.7)] bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm flex flex-col gap-2 text-left shadow-lg">
            <h3 className="text-sm font-semibold tracking-wide">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
