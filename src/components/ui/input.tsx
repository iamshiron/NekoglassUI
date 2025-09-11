"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, placeholder, id, ...props }, ref) => {
        const autoId = React.useId();
        if (!placeholder) {
            return (
                <input
                    type={type}
                    className={cn(
                        "flex min-h-[2.5rem] w-full rounded-lg border border-solid border-[rgba(var(--surface-rgb),0.7)] bg-[rgba(var(--surface-rgb),0.2)] px-3 py-2 text-sm leading-tight font-fredoka text-foreground ring-offset-background selection:bg-primary selection:text-primary-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
                        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
                        "transition-[background,box-shadow] duration-200 ease-out", // removed focus scale per request
                        className,
                    )}
                    ref={ref}
                    placeholder={placeholder}
                    id={id}
                    {...props}
                />
            );
        }

        const inputId = id || props.name || autoId;
        return (
            <div className="relative">
                <input
                    type={type}
                    id={inputId}
                    placeholder=" "
                    aria-placeholder={placeholder}
                    className={cn(
                        "peer w-full min-h-[2.5rem] rounded-lg border border-solid border-[rgba(var(--surface-rgb),0.7)] bg-[rgba(var(--surface-rgb),0.2)] pt-4 pb-1.5 text-sm leading-tight font-fredoka text-foreground ring-offset-background selection:bg-primary selection:text-primary-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
                        "pr-3 pl-[calc(0.75rem-1px)]",
                        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
                        "transition-[background,box-shadow] duration-200 ease-out",
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
                <label
                    htmlFor={inputId}
                    className={cn(
                        // Common styles for the label
                        "pointer-events-none absolute left-3 origin-left select-none font-fredoka transition-all duration-200 ease-out",
                        // Base state ("down" position, for when placeholder is shown)
                        "top-1/2 -translate-y-1/2 text-sm text-muted-foreground/70",
                        // "Up" state: Applies when the input is focused OR has a value.
                        // Using peer-[:not(:placeholder-shown)] ensures the label stays up when there's text.
                        "peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-[0.7rem]",
                        "peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem]",
                        // Color variations for different states
                        "peer-[:not(:placeholder-shown)]:text-muted-foreground/55",
                        "peer-focus:text-muted-foreground/80",
                        "peer-aria-[invalid=true]:text-destructive",
                    )}
                >
                    {placeholder}
                </label>
            </div>
        );
    },
);
Input.displayName = "Input";

export { Input };
