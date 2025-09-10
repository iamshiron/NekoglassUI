"use client";

import { Button } from "@/components/ui/button";
import {
    PlusIcon,
    ArrowClockwiseIcon,
    ArrowRightIcon,
} from "@phosphor-icons/react";

export default function Page() {
    return (
        <div className="p-6 glass-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Button Component</h1>

            <h2 className="text-2xl font-semibold mb-4">Components & States</h2>
            <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="info">Info</Button>
                <Button variant="link">Link</Button>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
            <div className="flex flex-wrap items-center gap-4 mb-8">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                    <PlusIcon />
                </Button>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Glassmorphic Variants
            </h2>
            <div className="flex flex-wrap gap-4 mb-8 p-6 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
            </div>

            <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
            <div className="flex flex-wrap gap-4 mb-8">
                <Button>
                    <ArrowRightIcon />
                    Continue
                </Button>
                <Button variant="secondary">
                    <ArrowClockwiseIcon />
                    Refresh
                </Button>
            </div>

            <h2 className="text-2xl font-semibold mb-4">States</h2>
            <div className="flex flex-wrap gap-4 mb-8">
                <Button disabled>Disabled</Button>
                <Button className="animate-float">Animated</Button>
            </div>
        </div>
    );
}
