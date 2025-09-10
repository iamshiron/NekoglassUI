"use client";

import { Input } from "@/components/ui/input";
import {
    MagnifyingGlassIcon,
    EnvelopeIcon,
    LockIcon,
} from "@phosphor-icons/react";

export default function Page() {
    return (
        <div className="p-6 glass-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Input Component</h1>

            <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
            <div className="flex flex-col gap-4 mb-8 max-w-md">
                <Input placeholder="Default input" />
                <Input placeholder="Disabled input" disabled />
                <Input placeholder="Required input" required />
                <Input
                    placeholder="Read-only input"
                    readOnly
                    value="Read-only value"
                />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Input Types</h2>
            <div className="flex flex-col gap-4 mb-8 max-w-md">
                <Input type="text" placeholder="Text input" />
                <Input type="password" placeholder="Password input" />
                <Input type="email" placeholder="Email input" />
                <Input type="number" placeholder="Number input" />
                <Input type="file" />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Validation States</h2>
            <div className="flex flex-col gap-4 mb-8 max-w-md">
                <Input placeholder="Valid input" className="border-success" />
                <Input placeholder="Invalid input" aria-invalid="true" />
                <Input
                    placeholder="Required input"
                    required
                    className="border-warning"
                />
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Glassmorphic Variants
            </h2>
            <div className="flex flex-col gap-4 mb-8 p-6 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg max-w-md">
                <Input placeholder="Input on gradient background" />
                <Input placeholder="Disabled input" disabled />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
            <div className="flex flex-col gap-4 mb-8 max-w-md">
                <div className="relative">
                    <MagnifyingGlassIcon
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input placeholder="Search..." className="pl-10" />
                </div>
                <div className="relative">
                    <EnvelopeIcon
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                        type="email"
                        placeholder="Email address"
                        className="pl-10"
                    />
                </div>
                <div className="relative">
                    <LockIcon
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        className="pl-10"
                    />
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Sizes & Width</h2>
            <div className="flex flex-col gap-4 mb-8">
                <Input placeholder="Full width input" className="w-full" />
                <Input placeholder="Medium width input" className="w-1/2" />
                <Input placeholder="Small width input" className="w-1/4" />
                <div className="flex items-center gap-2">
                    <Input placeholder="Inline input" className="w-auto" />
                    <span>with text</span>
                </div>
            </div>
        </div>
    );
}
