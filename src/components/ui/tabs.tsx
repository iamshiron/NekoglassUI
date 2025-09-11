"use client";

import type * as React from "react";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

// Simple context to notify TabsList when the active value changes
const TabsUnderlineContext = createContext<{ value?: string } | null>(null);

function Tabs({
    className,
    onValueChange,
    value,
    defaultValue,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
    const [active, setActive] = useState<string | undefined>(
        (value as string | undefined) ?? (defaultValue as string | undefined),
    );

    // Sync internal active tracker when controlled value changes
    useEffect(() => {
        if (value !== undefined) setActive(value as string);
    }, [value]);

    const handleChange = (v: string) => {
        onValueChange?.(v);
        if (value === undefined) setActive(v); // uncontrolled only
    };

    return (
        <TabsUnderlineContext.Provider value={{ value: active }}>
            <TabsPrimitive.Root
                data-slot="tabs"
                className={cn("flex flex-col gap-1", className)}
                value={value}
                defaultValue={defaultValue}
                onValueChange={handleChange}
                {...props}
            />
        </TabsUnderlineContext.Provider>
    );
}

function TabsList({
    className,
    children,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
    const ctx = useContext(TabsUnderlineContext);
    const reduce = useReducedMotion();
    const listRef = useRef<HTMLDivElement | null>(null);
    const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
        "horizontal",
    );
    const [indicator, setIndicator] = useState<
        { left: number; width: number } | { top: number; height: number } | null
    >(null);

    const measure = useCallback(() => {
        const list = listRef.current;
        if (!list) return;
        // Read orientation from DOM attribute each time to stay in sync with Radix
        const attr =
            (list.getAttribute("data-orientation") as
                | "horizontal"
                | "vertical"
                | null) ?? "horizontal";
        if (attr !== orientation) setOrientation(attr);
        const activeEl = list.querySelector<HTMLElement>(
            "[data-state='active']",
        );
        if (!activeEl) {
            setIndicator(null);
            return;
        }
        const listRect = list.getBoundingClientRect();
        const elRect = activeEl.getBoundingClientRect();
        if (attr === "vertical") {
            setIndicator({
                top: elRect.top - listRect.top,
                height: elRect.height,
            });
        } else {
            setIndicator({
                left: elRect.left - listRect.left,
                width: elRect.width,
            });
        }
    }, [orientation]);

    useEffect(() => {
        // consume ctx value so dependency is meaningful
        void ctx?.value;
        // re-measure when active value changes
        measure();
        // next frame to catch layout shifts
        const id = requestAnimationFrame(measure);
        return () => cancelAnimationFrame(id);
    }, [measure, ctx?.value]);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;
        const ro = new ResizeObserver(() => measure());
        ro.observe(list);
        const win = () => measure();
        window.addEventListener("resize", win);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", win);
        };
    }, [measure]);

    return (
        <TabsPrimitive.List
            ref={listRef}
            data-slot="tabs-list"
            className={cn(
                // Underline-style tabs: relative for indicator positioning
                // Horizontal
                "relative inline-flex h-10 w-fit items-center gap-6 text-foreground",
                // Vertical adjustments
                "data-[orientation=vertical]:h-auto data-[orientation=vertical]:inline-flex data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-2",
                className,
            )}
            {...props}
        >
            {/* children (triggers) */}
            {children}
            {/* moving underline indicator */}
            <motion.span
                aria-hidden="true"
                className={cn(
                    "pointer-events-none absolute z-10 rounded-full bg-primary",
                    orientation === "vertical"
                        ? "left-0 w-[2px]"
                        : "bottom-0 h-[2px]",
                )}
                animate={
                    indicator
                        ? orientation === "vertical"
                            ? {
                                  opacity: 1,
                                  top: (
                                      indicator as {
                                          top: number;
                                          height: number;
                                      }
                                  ).top,
                                  height: (
                                      indicator as {
                                          top: number;
                                          height: number;
                                      }
                                  ).height,
                                  width: 1,
                              }
                            : {
                                  opacity: 1,
                                  left: (
                                      indicator as {
                                          left: number;
                                          width: number;
                                      }
                                  ).left,
                                  width: (
                                      indicator as {
                                          left: number;
                                          width: number;
                                      }
                                  ).width,
                              }
                        : orientation === "vertical"
                          ? { opacity: 0, height: 0 }
                          : { opacity: 0, width: 0 }
                }
                initial={false}
                transition={
                    reduce
                        ? { duration: 0 }
                        : {
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                              mass: 0.4,
                          }
                }
                style={
                    orientation === "vertical"
                        ? {
                              top: (indicator as { top?: number })?.top ?? 0,
                              height:
                                  (indicator as { height?: number })?.height ??
                                  0,
                          }
                        : {
                              left: (indicator as { left?: number })?.left ?? 0,
                              width:
                                  (indicator as { width?: number })?.width ?? 0,
                          }
                }
            />
        </TabsPrimitive.List>
    );
}

function TabsTrigger({
    className,
    asChild,
    children,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
    const reduce = useReducedMotion();
    // If consumer provides asChild, respect it and do not force motion wrapper
    if (asChild) {
        return (
            <TabsPrimitive.Trigger
                data-slot="tabs-trigger"
                asChild
                className={cn(
                    // Underline-style trigger (asChild): no chip, just text
                    "group relative inline-flex h-10 items-center justify-center whitespace-nowrap px-1 text-sm font-medium",
                    // Colors
                    "text-foreground/80 hover:text-foreground data-[state=active]:text-foreground",
                    // Focus visibility
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-sm",
                    // Disabled
                    "disabled:pointer-events-none disabled:opacity-50",
                    // Orientation-specific layout
                    "data-[orientation=vertical]:justify-start data-[orientation=vertical]:pl-3 data-[orientation=vertical]:pr-4",
                    // Optional icon size normalization
                    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    className,
                )}
                {...props}
            />
        );
    }
    return (
        <TabsPrimitive.Trigger data-slot="tabs-trigger" asChild {...props}>
            <motion.button
                whileHover={
                    reduce
                        ? undefined
                        : {
                              y: -1,
                              transition: { duration: 0.18, ease: "easeOut" },
                          }
                }
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className={cn(
                    // Underline-style trigger: text only; shared moving indicator handles underline
                    "group relative inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap px-1 text-sm font-medium transition-all",
                    // Colors
                    "text-foreground/80 hover:text-foreground data-[state=active]:text-foreground",
                    // Focus
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-sm",
                    // Disabled
                    "disabled:pointer-events-none disabled:opacity-50",
                    // Orientation-specific
                    "data-[orientation=vertical]:justify-start data-[orientation=vertical]:pl-3 data-[orientation=vertical]:pr-4",
                    // Icon normalization
                    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    className,
                )}
                type="button"
            >
                {children}
            </motion.button>
        </TabsPrimitive.Trigger>
    );
}

function TabsContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
    const reduce = useReducedMotion();
    return (
        <TabsPrimitive.Content data-slot="tabs-content" asChild {...props}>
            {/* Static wrapper holds borders/padding; inner motion only fades content */}
            <div className={cn("flex-1 outline-none", className)}>
                <motion.div
                    initial={reduce ? undefined : { opacity: 0, x: 15 }}
                    animate={reduce ? undefined : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </TabsPrimitive.Content>
    );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
