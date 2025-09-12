"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import { SunIcon, MoonIcon, CheckIcon } from "@phosphor-icons/react";

export default function Page() {
    const [notifications, setNotifications] = React.useState(true);
    const [autoUpdates, setAutoUpdates] = React.useState(false);

    return (
        <div className="p-6 glass-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Switch Component</h1>

            <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
            <div className="flex flex-col gap-4 mb-10 max-w-md">
                <div className="flex items-center gap-3">
                    <Switch id="s-basic" />
                    <Label htmlFor="s-basic">Enable feature</Label>
                </div>
                <div className="flex items-center gap-3">
                    <Switch id="s-default" defaultChecked />
                    <Label htmlFor="s-default">Default on</Label>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Icons</h2>
            <div className="flex flex-col gap-4 mb-10 max-w-md">
                <div className="flex items-center gap-3">
                    <Switch
                        id="s-theme"
                        disabledIcon={<SunIcon />}
                        enabledIcon={<MoonIcon />}
                    />
                    <Label htmlFor="s-theme">Change Theme</Label>
                </div>
                <div className="flex items-center gap-3">
                    <Switch
                        id="s-default-icon"
                        defaultChecked
                        enabledIcon={<CheckIcon />}
                    />
                    <Label htmlFor="s-default-icon">Enabled</Label>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Controlled State</h2>
            <div className="flex flex-col gap-4 mb-10 max-w-md">
                <div className="flex items-center justify-between gap-3 p-3 rounded-lg border bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                    <div className="flex items-center gap-3">
                        <Switch
                            id="s-notifications"
                            checked={notifications}
                            onCheckedChange={setNotifications}
                        />
                        <Label htmlFor="s-notifications">Notifications</Label>
                    </div>
                    <span className="text-sm text-muted-foreground">
                        {notifications ? "On" : "Off"}
                    </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-3 rounded-lg border bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                    <div className="flex items-center gap-3">
                        <Switch
                            id="s-updates"
                            checked={autoUpdates}
                            onCheckedChange={setAutoUpdates}
                        />
                        <Label htmlFor="s-updates">Automatic updates</Label>
                    </div>
                    <button
                        type="button"
                        className="text-sm underline hover:no-underline"
                        onClick={() => setAutoUpdates((v) => !v)}
                    >
                        Toggle
                    </button>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Disabled & Read-only
            </h2>
            <div className="flex flex-col gap-4 mb-10 max-w-md">
                <div className="flex items-center gap-3">
                    <Switch id="s-disabled-1" disabled defaultChecked />
                    <Label htmlFor="s-disabled-1" className="opacity-70">
                        Disabled (on)
                    </Label>
                </div>
                <div className="flex items-center gap-3">
                    <Switch id="s-disabled-2" disabled />
                    <Label htmlFor="s-disabled-2" className="opacity-70">
                        Disabled (off)
                    </Label>
                </div>
                <div className="flex items-center gap-3">
                    <Switch id="s-readonly" checked aria-readonly="true" />
                    <Label htmlFor="s-readonly">Read-only state</Label>
                </div>
            </div>
        </div>
    );
}
