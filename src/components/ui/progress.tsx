"use client";

import type * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

export interface ProgressProps
    extends React.ComponentProps<typeof ProgressPrimitive.Root> {}

function Progress({ className, value, ...props }: ProgressProps) {
    return (
        <ProgressPrimitive.Root
            data-slot="progress"
            className={cn(
                "relative h-2 w-full overflow-hidden rounded-full",
                // Nekoglass glass surface track
                "bg-background/35 backdrop-blur-lg",
                className,
            )}
            value={value}
            {...props}
        >
            <ProgressPrimitive.Indicator
                data-slot="progress-indicator"
                className={cn(
                    "h-full w-full flex-1 transition-all",
                    "bg-primary",
                )}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    );
}

export { Progress };
