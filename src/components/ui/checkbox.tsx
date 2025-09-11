"use client";

import type * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

export interface CheckboxProps
    extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
    /**
     * Hides the checkmark indicator.
     * Default: false
     */
    hideCheckmark?: boolean;
    /**
     * Custom icon to render when checked, replacing the default drawn checkmark.
     * Ignored when `hideCheckmark` is true.
     */
    icon?: React.ReactNode;
}

function Checkbox({
    className,
    hideCheckmark = false,
    icon,
    ...props
}: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root
            data-slot="checkbox"
            className={cn(
                // Base shape + visuals
                "peer group border-input dark:bg-input/30 data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
                // Color fill when checked (applies to both modes)
                "transition-colors duration-150 ease-out data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary",
                className,
            )}
            {...props}
        >
            {hideCheckmark ? null : icon ? (
                <CheckboxPrimitive.Indicator
                    data-slot="checkbox-indicator"
                    forceMount
                    className={cn(
                        "flex items-center justify-center text-primary-foreground",
                        "transition-opacity duration-150 ease-out",
                        "opacity-0 group-data-[state=checked]:opacity-100 motion-reduce:transition-none",
                    )}
                >
                    <span
                        className="inline-flex items-center justify-center size-3.5"
                        aria-hidden
                    >
                        {icon}
                    </span>
                </CheckboxPrimitive.Indicator>
            ) : (
                <CheckboxPrimitive.Indicator
                    data-slot="checkbox-indicator"
                    forceMount
                    className={cn(
                        "flex items-center justify-center text-primary-foreground",
                        // Subtle presence transition for the indicator container
                        "transition-opacity duration-150 ease-out",
                        "opacity-0 group-data-[state=checked]:opacity-100 motion-reduce:transition-none",
                    )}
                >
                    {/* Drawn checkmark path using stroke dash animation */}
                    <svg
                        className="size-3.5"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M3 7.2 L6 10.2 L11 4.8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            pathLength={1}
                            className={cn(
                                // Prepare stroke to be fully hidden initially, then reveal when checked
                                "[stroke-dasharray:1] [stroke-dashoffset:1]",
                                "transition-[stroke-dashoffset] duration-200 ease-out delay-75",
                                "group-data-[state=checked]:[stroke-dashoffset:0]",
                                "motion-reduce:transition-none",
                            )}
                        />
                    </svg>
                </CheckboxPrimitive.Indicator>
            )}
        </CheckboxPrimitive.Root>
    );
}

export { Checkbox };
