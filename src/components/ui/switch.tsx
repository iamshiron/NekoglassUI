"use client";

import type * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

export interface SwitchProps
    extends React.ComponentProps<typeof SwitchPrimitive.Root> {
    /** Icon displayed when the switch is ON (checked). */
    enabledIcon?: React.ReactNode;
    /** Icon displayed when the switch is OFF (unchecked). */
    disabledIcon?: React.ReactNode;
}

function Switch({
    className,
    enabledIcon,
    disabledIcon,
    ...props
}: SwitchProps) {
    return (
        <SwitchPrimitive.Root
            data-slot="switch"
            {...props}
            className={cn(
                // Track
                "peer group inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-colors",
                // Colors by state
                "bg-background/15 border-foreground/25 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
                // Focus ring accessibility
                "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
                // Disabled
                "disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
        >
            <SwitchPrimitive.Thumb
                data-slot="switch-thumb"
                className={cn(
                    // Thumb base
                    "group pointer-events-none relative block size-4 rounded-full ring-0 transition-transform duration-300 ease-out",
                    // Thumb colors
                    "bg-background data-[state=unchecked]:bg-foreground",
                    // Position by state
                    "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
                    // Micro-interactions
                    "group-hover:scale-[1.03] group-active:scale-95",
                )}
            >
                {(enabledIcon || disabledIcon) && (
                    <span
                        className={cn(
                            "absolute inset-0 grid place-items-center text-[0.8rem] [&>svg]:size-3 [&>svg]:shrink-0",
                            // Ensure good contrast for icon inside thumb across themes and states
                            "group-data-[state=unchecked]:text-foreground dark:group-data-[state=unchecked]:text-background",
                            // Checked state: use paired foreground token
                            "group-data-[state=checked]:text-primary-foreground",
                        )}
                        aria-hidden
                    >
                        {enabledIcon && (
                            <span
                                className={cn(
                                    "text-foreground pointer-events-none absolute inset-0 grid place-items-center transition-all duration-200 ease-out",
                                    // Show when checked
                                    "group-data-[state=checked]:opacity-100 group-data-[state=checked]:scale-100",
                                    // Hide when unchecked
                                    "group-data-[state=unchecked]:opacity-0 group-data-[state=unchecked]:scale-75",
                                )}
                            >
                                {enabledIcon}
                            </span>
                        )}
                        {disabledIcon && (
                            <span
                                className={cn(
                                    "pointer-events-none absolute inset-0 grid place-items-center transition-all duration-200 ease-out",
                                    // Show when unchecked
                                    "group-data-[state=unchecked]:opacity-100 group-data-[state=unchecked]:scale-100",
                                    // Hide when checked
                                    "group-data-[state=checked]:opacity-0 group-data-[state=checked]:scale-75",
                                )}
                            >
                                {disabledIcon}
                            </span>
                        )}
                    </span>
                )}
            </SwitchPrimitive.Thumb>
        </SwitchPrimitive.Root>
    );
}

export { Switch };
