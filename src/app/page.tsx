"use client";

import { Button } from "@/components/ui/button";
import { Background } from "@/components/ui/background";
import Link from "next/link";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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
                            A stylized component library built on the power of
                            ShadCN, with a focus on glassmorphism and pastel
                            colors.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Button size="lg">
                            <Link href="/docs/installation">Get Started</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/components/button">
                                Browse Components
                            </Link>
                        </Button>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4 pt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Theme Aware</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Components automatically consume theme tokens
                                and glass surfaces for consistent visuals.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>ShadCN Based</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Build your library by copying components
                                directly into your codebase. No monolithic
                                dependencies, full ownership of the code.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Glass Surface</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Frosted backgrounds, subtle borders and
                                accessible focus states form the core visual
                                language.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <footer className="relative z-10 px-6 md:px-10 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
                <span>
                    <span>© 2025 IAmShiron</span>
                </span>
            </footer>
        </div>
    );
}
