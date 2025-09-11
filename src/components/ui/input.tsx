"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Optional icon rendered inside the input and included in the floating placeholder animation.
     * This is additive (not part of the original ShadCN API) and fully optional.
     */
    icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            placeholder,
            id,
            icon,
            onChange,
            value,
            defaultValue,
            ...props
        },
        ref,
    ) => {
        const autoId = React.useId();
        const [hasValue, setHasValue] = React.useState<boolean>(() => {
            if (value !== undefined && value !== null)
                return String(value).length > 0;
            if (defaultValue !== undefined && defaultValue !== null)
                return String(defaultValue).length > 0;
            return false;
        });

        // Sync for controlled components
        React.useEffect(() => {
            if (value !== undefined && value !== null) {
                setHasValue(String(value).length > 0);
            }
        }, [value]);

        const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
            e,
        ) => {
            if (onChange) onChange(e);
            // For uncontrolled components, update internal state
            if (value === undefined) {
                setHasValue(e.target.value.length > 0);
            }
        };

        // --- Common Class Definitions ---
        const commonInputBaseClasses =
            "flex pl-3 w-full rounded-lg border border-solid border-[rgba(var(--surface-rgb),0.7)] bg-[rgba(var(--surface-rgb),0.2)] text-sm leading-tight font-fredoka text-foreground ring-offset-background selection:bg-primary selection:text-primary-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium transition-[background,box-shadow] duration-200 ease-out";
        const commonInputStateClasses =
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40";

        // --- Floating Label State Classes ---
        const labelFloatedStateClasses =
            "peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-[0.7rem] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-data-[has-value=true]:top-1 peer-data-[has-value=true]:-translate-y-0 peer-data-[has-value=true]:text-[0.7rem]";
        const labelFloatedColorClasses =
            "peer-[:not(:placeholder-shown)]:text-muted-foreground/55 peer-focus:text-muted-foreground/80 peer-data-[has-value=true]:text-muted-foreground/55";
        const iconFloatedStateClasses =
            "peer-focus:scale-75 peer-[:not(:placeholder-shown)]:scale-75 peer-data-[has-value=true]:scale-75 peer-focus:mr-1 peer-[:not(:placeholder-shown)]:mr-1 peer-data-[has-value=true]:mr-1";

        // --- Simple (Non-Floating) Variant ---
        if (!placeholder) {
            if (icon) {
                return (
                    <div className="relative">
                        <span
                            className={cn(
                                "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center text-muted-foreground/70 transition-colors",
                                "peer-aria-[invalid=true]:text-destructive",
                            )}
                        >
                            {icon}
                        </span>
                        <input
                            type={type}
                            className={cn(
                                commonInputBaseClasses,
                                commonInputStateClasses,
                                "min-h-[2.5rem] py-2 pl-10 pr-3 placeholder:text-muted-foreground",
                                className,
                            )}
                            ref={ref}
                            placeholder={placeholder}
                            id={id}
                            value={value}
                            defaultValue={defaultValue}
                            onChange={handleChange}
                            {...props}
                        />
                    </div>
                );
            }

            return (
                <input
                    type={type}
                    className={cn(
                        commonInputBaseClasses,
                        commonInputStateClasses,
                        "min-h-[2.5rem] py-2",
                        className,
                    )}
                    ref={ref}
                    placeholder={placeholder}
                    id={id}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={handleChange}
                    {...props}
                />
            );
        }

        // --- Floating Label Variant ---
        const inputId = id || props.name || autoId;
        return (
            <div className="relative">
                <input
                    type={type}
                    id={inputId}
                    placeholder=" " // Required for :placeholder-shown selector
                    aria-placeholder={placeholder}
                    className={cn(
                        commonInputBaseClasses,
                        commonInputStateClasses,
                        "peer min-h-[2.5rem] pt-4 pb-1.5 placeholder:text-transparent",
                        icon ? "pr-3" : "pr-3 pl-[calc(0.75rem-1px)]",
                        className,
                    )}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={handleChange}
                    data-has-value={hasValue || undefined}
                    ref={ref}
                    {...props}
                />
                <label
                    htmlFor={inputId}
                    className={cn(
                        "pointer-events-none absolute left-3 flex items-center gap-1 origin-left select-none font-fredoka transition-all duration-200 ease-out",
                        "top-1/2 -translate-y-1/2 text-sm text-foreground/75", // Default state
                        labelFloatedStateClasses, // Floated position and size
                        labelFloatedColorClasses, // Floated text color
                        "peer-aria-[invalid=true]:text-destructive", // Invalid state
                    )}
                >
                    {icon && (
                        <span
                            className={cn(
                                "inline-flex items-center transition-all duration-200 h-4 text-base leading-none",
                                iconFloatedStateClasses,
                            )}
                        >
                            {icon}
                        </span>
                    )}
                    <span>{placeholder}</span>
                </label>
            </div>
        );
    },
);
Input.displayName = "Input";

export { Input };
