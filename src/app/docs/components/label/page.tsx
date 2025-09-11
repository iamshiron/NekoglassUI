"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Page() {
    return (
        <div className="p-6 glass-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Label Component</h1>

            <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
            <div className="flex flex-col gap-6 mb-10 max-w-md">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                    />
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Required & Indicators
            </h2>
            <div className="flex flex-col gap-6 mb-10 max-w-md">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <Label htmlFor="project" className="mb-0">
                            Project Name
                        </Label>
                        <span className="text-destructive" aria-hidden>
                            *
                        </span>
                    </div>
                    <Input
                        id="project"
                        required
                        placeholder="Awesome App"
                        aria-required="true"
                    />
                    <p className="text-xs text-muted-foreground">
                        This field is required.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <Label htmlFor="code">Invite Code</Label>
                        <span className="text-xs text-muted-foreground">
                            (optional)
                        </span>
                    </div>
                    <Input id="code" placeholder="ABC123" />
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                States & Accessibility
            </h2>
            <div className="flex flex-col gap-6 mb-10 max-w-md">
                <div className="flex flex-col gap-2">
                    <Label
                        htmlFor="disabled"
                        className="group-data-[disabled=true]:opacity-50"
                    >
                        Disabled Field
                    </Label>
                    <Input
                        id="disabled"
                        disabled
                        placeholder="Disabled input"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="invalid" aria-invalid="true">
                        Username
                    </Label>
                    <Input
                        id="invalid"
                        aria-invalid="true"
                        placeholder="Invalid state"
                    />
                    <p className="text-xs text-destructive">
                        Username is already taken.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="readonly">Read-only</Label>
                    <Input id="readonly" value="Immutable value" readOnly />
                    <p className="text-xs text-muted-foreground">
                        You cannot change this value.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Inline Layout</h2>
            <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-4">
                    <Label htmlFor="age" className="w-32 shrink-0">
                        Age
                    </Label>
                    <Input id="age" type="number" className="w-32" />
                </div>
                <div className="flex items-center gap-4">
                    <Label htmlFor="country" className="w-32 shrink-0">
                        Country
                    </Label>
                    <Input
                        id="country"
                        placeholder="Country"
                        className="max-w-xs"
                    />
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Grouping & Description
            </h2>
            <fieldset className="flex flex-col gap-4 mb-10 max-w-md">
                <legend className="text-sm font-medium mb-2">Profile</legend>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input id="displayName" placeholder="Public name" />
                    <p className="text-xs text-muted-foreground">
                        This will be shown on your profile.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="handle">Handle</Label>
                    <Input id="handle" placeholder="@handle" />
                    <p className="text-xs text-muted-foreground">
                        Unique username used for mentions.
                    </p>
                </div>
            </fieldset>
        </div>
    );
}
