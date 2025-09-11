"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    ArrowRightIcon,
    DotsThreeOutlineVerticalIcon,
    InfoIcon,
} from "@phosphor-icons/react";

export default function Page() {
    return (
        <div className="p-6 glass-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Card Component</h1>

            <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
            <Card className="mb-8">
                <CardHeader className="border-b">
                    <CardTitle>Basic Card</CardTitle>
                    <CardDescription>
                        A simple card with header, content and footer.
                    </CardDescription>
                </CardHeader>
                <CardContent className="py-6">
                    <p className="text-sm text-muted-foreground">
                        Use cards to group related information. The Nekoglass
                        Card preserves ShadCN API compatibility while applying
                        glassmorphic styling.
                    </p>
                </CardContent>
                <CardFooter className="border-t justify-end gap-2">
                    <Button variant="ghost" size="sm">
                        Cancel
                    </Button>
                    <Button size="sm">Confirm</Button>
                </CardFooter>
            </Card>

            <h2 className="text-2xl font-semibold mb-4">With Action Slot</h2>
            <Card className="mb-8">
                <CardHeader className="border-b">
                    <div className="flex items-start gap-2">
                        <InfoIcon className="size-5 opacity-80" />
                        <div>
                            <CardTitle>Analytics Overview</CardTitle>
                            <CardDescription>
                                High-level metrics for your project.
                            </CardDescription>
                        </div>
                    </div>
                    <CardAction>
                        <Button
                            variant="outline"
                            size="icon"
                            className="group"
                            aria-label="More options"
                        >
                            <DotsThreeOutlineVerticalIcon />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent className="py-6 grid gap-4 sm:grid-cols-3">
                    <div className="flex flex-col gap-1 rounded-lg border p-3 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm">
                        <span className="text-xs uppercase tracking-wide text-muted-foreground">
                            Users
                        </span>
                        <span className="text-lg font-semibold">2,413</span>
                    </div>
                    <div className="flex flex-col gap-1 rounded-lg border p-3 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm">
                        <span className="text-xs uppercase tracking-wide text-muted-foreground">
                            Sessions
                        </span>
                        <span className="text-lg font-semibold">7,842</span>
                    </div>
                    <div className="flex flex-col gap-1 rounded-lg border p-3 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm">
                        <span className="text-xs uppercase tracking-wide text-muted-foreground">
                            Bounce Rate
                        </span>
                        <span className="text-lg font-semibold">38%</span>
                    </div>
                </CardContent>
                <CardFooter className="border-t justify-end">
                    <Button size="sm" variant="secondary">
                        View Details
                    </Button>
                </CardFooter>
            </Card>

            <h2 className="text-2xl font-semibold mb-4">Content Only</h2>
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <Card>
                    <CardContent className="py-6">
                        <p className="text-sm">
                            Cards can be minimal. Omit header and footer for
                            quick containers or layout building blocks.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="py-6">
                        <p className="text-sm">
                            Combine multiple minimal cards in a grid to create
                            dashboards or overviews.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Interactive Example</h2>
            <Card className="mb-8">
                <CardHeader className="border-b">
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>
                        A short actionable example using a primary action.
                    </CardDescription>
                </CardHeader>
                <CardContent className="py-6 space-y-3 text-sm text-muted-foreground">
                    <p>
                        This card demonstrates how actions, content spacing and
                        description hierarchy align visually using the Nekoglass
                        design system.
                    </p>
                    <p>
                        The surface uses a semi‑transparent glass background and
                        retains accessibility through semantic tokens.
                    </p>
                </CardContent>
                <CardFooter className="border-t justify-between">
                    <span className="text-xs text-muted-foreground">
                        Step 1 of 3
                    </span>
                    <Button size="sm" className="group">
                        Continue
                        <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
                    </Button>
                </CardFooter>
            </Card>

            <h2 className="text-2xl font-semibold mb-4">
                On Gradient Background
            </h2>
            <div className="mb-12 p-6 rounded-lg bg-gradient-to-r from-primary/30 to-secondary/30">
                <Card className="border-primary/40 shadow-lg">
                    <CardHeader className="border-b">
                        <CardTitle>Glass Layer</CardTitle>
                        <CardDescription>
                            The card surface stays legible over vibrant
                            backdrops.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="py-6">
                        <p className="text-sm text-muted-foreground">
                            This demonstrates translucency and backdrop blur
                            while maintaining contrast in all supported themes
                            (light, dark, amoled).
                        </p>
                    </CardContent>
                </Card>
            </div>

            <h2 className="text-2xl font-semibold mb-4">API Surface</h2>
            <p className="text-sm text-muted-foreground mb-2">
                The Card exports the following subcomponents preserving ShadCN
                API compatibility:
            </p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1 mb-8">
                <li>
                    <code>Card</code> – root container
                </li>
                <li>
                    <code>CardHeader</code> – optional header region
                </li>
                <li>
                    <code>CardTitle</code> – title text
                </li>
                <li>
                    <code>CardDescription</code> – supporting description
                </li>
                <li>
                    <code>CardAction</code> – positioned action area (usually an
                    icon/button)
                </li>
                <li>
                    <code>CardContent</code> – main content section
                </li>
                <li>
                    <code>CardFooter</code> – footer actions / meta info
                </li>
            </ul>
        </div>
    );
}
