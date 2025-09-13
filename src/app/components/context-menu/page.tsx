"use client";

import * as React from "react";
import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuCheckboxItem,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
} from "@/components/ui/context-menu";

export default function Page() {
    const [showBookmarks, setShowBookmarks] = React.useState(true);
    const [showFullUrls, setShowFullUrls] = React.useState(false);
    const [position, setPosition] = React.useState("bottom");

    return (
        <div className="p-6 glass-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Context Menu Component</h1>

            <h2 className="text-2xl font-semibold mb-4">Basic</h2>
            <div className="mb-8">
                <ContextMenu>
                    <ContextMenuTrigger asChild>
                        <div className="rounded-lg border p-10 text-center select-none bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                            Right-click here to open the context menu
                        </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                        <ContextMenuItem>
                            Back
                            <ContextMenuShortcut>Alt+←</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem disabled>
                            Forward
                            <ContextMenuShortcut>Alt+→</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem>
                            Reload
                            <ContextMenuShortcut>Ctrl+R</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuSub>
                            <ContextMenuSubTrigger>
                                More Tools
                            </ContextMenuSubTrigger>
                            <ContextMenuSubContent>
                                <ContextMenuItem>Save Page As…</ContextMenuItem>
                                <ContextMenuItem>
                                    Developer Tools
                                </ContextMenuItem>
                            </ContextMenuSubContent>
                        </ContextMenuSub>
                        <ContextMenuSeparator />
                        <ContextMenuItem variant="destructive">
                            Delete
                            <ContextMenuShortcut>Del</ContextMenuShortcut>
                        </ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Checkbox & Radio</h2>
            <div className="mb-8">
                <ContextMenu>
                    <ContextMenuTrigger asChild>
                        <div className="rounded-lg border p-8 text-center select-none bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                            Right-click to toggle options
                        </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                        <ContextMenuLabel>Appearance</ContextMenuLabel>
                        <ContextMenuSeparator />
                        <ContextMenuCheckboxItem
                            checked={showBookmarks}
                            onCheckedChange={(v) =>
                                setShowBookmarks(Boolean(v))
                            }
                        >
                            Show Bookmarks Bar
                        </ContextMenuCheckboxItem>
                        <ContextMenuCheckboxItem
                            checked={showFullUrls}
                            onCheckedChange={(v) => setShowFullUrls(Boolean(v))}
                        >
                            Always Show Full URLs
                        </ContextMenuCheckboxItem>
                        <ContextMenuSeparator />
                        <ContextMenuLabel>Position</ContextMenuLabel>
                        <ContextMenuRadioGroup
                            value={position}
                            onValueChange={setPosition}
                        >
                            <ContextMenuRadioItem value="top">
                                Top
                            </ContextMenuRadioItem>
                            <ContextMenuRadioItem value="bottom">
                                Bottom
                            </ContextMenuRadioItem>
                            <ContextMenuRadioItem value="right">
                                Right
                            </ContextMenuRadioItem>
                        </ContextMenuRadioGroup>
                    </ContextMenuContent>
                </ContextMenu>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Shortcuts & Disabled
            </h2>
            <div className="mb-8">
                <ContextMenu>
                    <ContextMenuTrigger asChild>
                        <div className="rounded-lg border p-8 text-center select-none bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                            Right-click to see shortcuts
                        </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                        <ContextMenuItem>
                            Cut
                            <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem>
                            Copy
                            <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem disabled>
                            Paste
                            <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>
                            Select All
                            <ContextMenuShortcut>Ctrl+A</ContextMenuShortcut>
                        </ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Glassmorphic Variant
            </h2>
            <div className="p-6 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg">
                <ContextMenu>
                    <ContextMenuTrigger asChild>
                        <div className="rounded-lg border p-10 text-center select-none bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                            Colorful backdrop to highlight the glass surface —
                            right-click me
                        </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                        <ContextMenuItem>Share</ContextMenuItem>
                        <ContextMenuItem>Open in New Tab</ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>Inspect</ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>
            </div>
        </div>
    );
}
