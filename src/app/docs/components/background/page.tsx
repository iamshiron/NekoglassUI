"use client";

import * as React from "react";
import { Background, type BackgroundBlob } from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    PlusIcon,
    TrashIcon,
    PlayIcon,
    PauseIcon,
} from "@phosphor-icons/react";

export default function Page() {
    const [animate, setAnimate] = React.useState(true);
    const [customBlobs, setCustomBlobs] = React.useState<BackgroundBlob[]>([]);
    const [color, setColor] = React.useState("var(--secondary)");
    const [size, setSize] = React.useState(320);

    const addBlob = () => {
        setCustomBlobs((prev) => [
            ...prev,
            {
                id: Date.now(),
                className: `top-[${Math.round(Math.random() * 70) + 10}%] left-[${Math.round(Math.random() * 70) + 10}%] w-[${size}px] h-[${size}px]`,
                color,
                duration: 18 + Math.random() * 14,
                translate: {
                    x: Math.random() * 120 - 60,
                    y: Math.random() * 120 - 60,
                },
                scale: {
                    from: 0.75 + Math.random() * 0.3,
                    to: 1.05 + Math.random() * 0.35,
                },
                opacity: 0.3 + Math.random() * 0.15,
            },
        ]);
    };

    const removeBlob = (id: BackgroundBlob["id"]) => {
        setCustomBlobs((prev) => prev.filter((b) => b.id !== id));
    };

    return (
        <div className="relative">
            {/* Live background layer */}
            <Background
                blobs={customBlobs.length ? customBlobs : undefined}
                forceMotion={animate}
            />

            <div className="p-6 glass-lg max-w-4xl mx-auto relative z-10">
                <h1 className="text-3xl font-bold mb-6">
                    Background Component
                </h1>
                <p className="text-sm leading-relaxed mb-10 text-muted-foreground">
                    The <code className="font-mono">Background</code> component
                    provides an ambient glassmorphic glow layer using theme
                    tokens (<code>--primary</code>, <code>--accent</code>,
                    etc.). It ships with two default animated blobs and can be
                    fully customized. It is purely decorative and set{" "}
                    <code>aria-hidden</code> by default. Animation respects the
                    user&rsquo;s reduced motion preferences unless you pass{" "}
                    <code>forceMotion</code>.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                    <div className="relative rounded-xl border border-border p-6 overflow-hidden bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm">
                        <Background className="absolute inset-0" />
                        <div className="relative z-10 space-y-2">
                            <h3 className="text-xl font-semibold">
                                Layered Content
                            </h3>
                            <p className="text-sm text-muted-foreground max-w-md">
                                Drop a{" "}
                                <code className="font-mono">
                                    &lt;Background /&gt;
                                </code>{" "}
                                inside any relative container. It uses{" "}
                                <code>position: absolute</code> so it
                                won&rsquo;t affect layout.
                            </p>
                            <Button size="sm" variant="secondary">
                                Sample Action
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Custom Blobs
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 max-w-lg">
                        Provide a <code className="font-mono">blobs</code> array
                        to override the defaults. Each blob accepts position &
                        size utility classes, color (CSS variable), animation
                        duration, translation deltas, scale range, and opacity.
                    </p>
                    <div className="rounded-xl border border-border p-5 bg-[rgba(var(--surface-rgb),0.40)] backdrop-blur-sm flex flex-col gap-5">
                        <div className="flex flex-wrap items-end gap-4">
                            <div className="flex flex-col gap-2 w-40">
                                <label
                                    className="text-xs font-medium"
                                    htmlFor="blob-color"
                                >
                                    Blob Color (CSS var)
                                </label>
                                <Input
                                    id="blob-color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    placeholder="var(--accent)"
                                    className="h-9 text-xs font-mono"
                                />
                                <p className="text-[10px] text-muted-foreground">
                                    Use existing theme vars.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 w-40">
                                <label
                                    className="text-xs font-medium"
                                    htmlFor="blob-size"
                                >
                                    Size (px)
                                </label>
                                <Input
                                    id="blob-size"
                                    type="number"
                                    min={120}
                                    max={800}
                                    value={size}
                                    onChange={(e) =>
                                        setSize(Number(e.target.value) || 320)
                                    }
                                    className="h-9 text-xs"
                                />
                            </div>
                            <div className="flex gap-3 items-center">
                                <Button size="sm" onClick={addBlob}>
                                    <PlusIcon className="h-4 w-4" /> Add Blob
                                </Button>
                                <Button
                                    size="sm"
                                    variant={animate ? "outline" : "default"}
                                    onClick={() => setAnimate((a) => !a)}
                                >
                                    {animate ? (
                                        <PauseIcon className="h-4 w-4" />
                                    ) : (
                                        <PlayIcon className="h-4 w-4" />
                                    )}
                                    {animate ? "Pause" : "Play"}
                                </Button>
                            </div>
                        </div>
                        {customBlobs.length > 0 && (
                            <ul className="flex flex-col gap-2 max-h-60 overflow-auto pr-1 text-xs">
                                {customBlobs.map((b) => (
                                    <li
                                        key={b.id}
                                        className="flex items-center justify-between gap-4 rounded-md border border-border/60 bg-background/40 backdrop-blur px-3 py-2"
                                    >
                                        <div className="flex flex-col gap-0.5">
                                            <span className="font-medium">
                                                Blob {b.id}
                                            </span>
                                            <code className="text-[10px] break-all opacity-80">
                                                {b.className}
                                            </code>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="inline-flex h-4 w-4 rounded-full ring-1 ring-border"
                                                style={{ background: b.color }}
                                            />
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                className="h-7 w-7"
                                                onClick={() => removeBlob(b.id)}
                                                aria-label="Remove blob"
                                            >
                                                <TrashIcon className="h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {customBlobs.length === 0 && (
                            <p className="text-xs text-muted-foreground">
                                No custom blobs yet – using defaults.
                            </p>
                        )}
                        <div className="relative h-72 rounded-lg border border-border overflow-hidden bg-background/30">
                            <Background
                                blobs={
                                    customBlobs.length ? customBlobs : undefined
                                }
                                forceMotion={animate}
                                className="absolute inset-0"
                            />
                            <div className="relative z-10 flex h-full items-center justify-center">
                                <span className="text-sm font-medium bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur px-4 py-2 rounded-full border border-border/60">
                                    Preview Area
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Reduced Motion
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-lg">
                        The component disables animation automatically when the
                        user enables <em>prefers-reduced-motion</em>. Pass{" "}
                        <code className="font-mono">forceMotion</code> to
                        override for critical visual contexts (use sparingly).
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-4">API</h2>
                    <div className="rounded-xl border border-border overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-background/60 backdrop-blur">
                                <tr className="text-left">
                                    <th className="p-3 font-semibold">Prop</th>
                                    <th className="p-3 font-semibold">Type</th>
                                    <th className="p-3 font-semibold">
                                        Default
                                    </th>
                                    <th className="p-3 font-semibold">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/60 bg-background/40 backdrop-blur-sm">
                                {apiRows.map((row) => (
                                    <tr key={row.prop} className="align-top">
                                        <td className="p-3 font-mono text-xs whitespace-nowrap">
                                            {row.prop}
                                        </td>
                                        <td className="p-3 text-xs font-mono">
                                            {row.type}
                                        </td>
                                        <td className="p-3 text-xs font-mono text-muted-foreground">
                                            {row.defaultValue}
                                        </td>
                                        <td className="p-3 text-xs leading-relaxed">
                                            {row.description}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}

interface ApiRow {
    prop: string;
    type: string;
    defaultValue: string;
    description: string;
}

const apiRows: ApiRow[] = [
    {
        prop: "blobs",
        type: "BackgroundBlob[]",
        defaultValue: "7 themed blobs",
        description:
            "Custom blob definitions; omit to use built-in multi-color set.",
    },
    {
        prop: "forceMotion",
        type: "boolean",
        defaultValue: "false",
        description: "Override reduced motion preference and always animate.",
    },
    {
        prop: "fixed",
        type: "boolean",
        defaultValue: "true",
        description: "Render using position: fixed across the viewport.",
    },
    {
        prop: "zIndex",
        type: "number",
        defaultValue: "-10",
        description: "z-index applied to container wrapper.",
    },
    {
        prop: "blurClassName",
        type: "string",
        defaultValue: "blur-[150px]",
        description:
            "Utility classes applied to each blob (controls perceived diffusion).",
    },
    {
        prop: "vignette",
        type: "boolean",
        defaultValue: "true",
        description: "Toggle subtle radial surface vignette overlay.",
    },
    {
        prop: "intensity",
        type: "number",
        defaultValue: "1",
        description:
            "Global opacity multiplier (0–1) to quickly dial overall prominence.",
    },
    {
        prop: "preset",
        type: `'full' | 'triple' | 'dual'`,
        defaultValue: "full",
        description:
            "Select built-in default blob set when `blobs` not supplied.",
    },
    {
        prop: "className",
        type: "string",
        defaultValue: "—",
        description: "Additional classes merged onto outer wrapper.",
    },
];
