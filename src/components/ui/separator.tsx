"use client";

import type * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({
    className,
    orientation = "horizontal",
    decorative = true,
    ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
    // If not decorative, expose role="separator" implicitly via Radix and allow keyboard focus outline when tabbed (rare use-case but accessible)
    return (
        <SeparatorPrimitive.Root
            data-slot="separator"
            decorative={decorative}
            orientation={orientation}
            // Glass + subtle elevation: we use a thin gradient like appearance via layered bg utilities
            className={cn(
                "shrink-0 relative select-none",
                // Horizontal & vertical sizing
                "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
                // Glass line: semi‑translucent foreground on surface + subtle backdrop blur halo using after element
                "bg-border/70 backdrop-blur-sm",
                // Pseudo halo for better contrast on busy backgrounds
                "after:absolute after:inset-0 after:-z-10 after:rounded-[2px] after:bg-[rgba(var(--surface-rgb),0.55)] after:backdrop-blur-sm after:content-['']",
                // Focus ring only when it's an actual semantic separator (non-decorative) & user navigates via keyboard
                !decorative &&
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0",
                className,
            )}
            {...props}
        />
    );
}

export { Separator };
