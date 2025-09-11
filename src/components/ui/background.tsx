import * as React from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

export interface BackgroundBlob {
    /** Unique key/id – if omitted index is used */
    id?: string | number;
    /** Tailwind position+size classes (e.g. "top-[5%] left-[5%] w-[400px] h-[400px]") */
    className?: string;
    /** CSS variable or token for blob color. Defaults cascade through array. */
    color?: string; // expects something like 'var(--primary)' OR 'rgba(var(--surface-rgb),0.4)'
    /** Animation duration in seconds (one direction before alternate) */
    duration?: number;
    /** Alternate animation delay offset (seconds) */
    delay?: number;
    /** Optional custom motion target delta for x/y/scale animation */
    translate?: { x?: number; y?: number };
    scale?: { from?: number; to?: number };
    /** Opacity (final base opacity) */
    opacity?: number;
}

export interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Array of blob descriptors. Defaults to two themed blobs. */
    blobs?: BackgroundBlob[];
    /** If true, always animates even when user prefers reduced motion. */
    forceMotion?: boolean;
    /** Whether to render in a portal-like absolute layer (position: fixed). */
    fixed?: boolean;
    /** Z-index for container (defaults -10) */
    zIndex?: number;
    /** Blur intensity utility (default "blur-[150px]") */
    blurClassName?: string;
    /** Show radial vignette overlay */
    vignette?: boolean;
    /** Global intensity multiplier (0 - 1) applied to each blob's base opacity */
    intensity?: number;
    /** Preset selection controlling default blob set when `blobs` prop omitted */
    preset?: "full" | "triple" | "dual";
    /**
     * Multiplier applied to every blob scale range (default 1).
     * Example: globalScale={1.2} softly expands all blobs & their motion arcs without changing layout classes.
     */
    globalScale?: number;
    /**
     * Multiplier applied to translation deltas (x & y) for all blobs (default 1).
     * Increase slightly (e.g. 1.15) on ultra‑wide hero sections to avoid static feel.
     */
    translateFactor?: number;
    /**
     * Override easing function passed to the motion transition (defaults to linear for subtle continuous drift).
     * Accepts any Framer Motion easing signature.
     */
    easing?: Transition["ease"]; // Reuse Framer Motion's accepted easing types
}

const defaultBlobs: BackgroundBlob[] = [
    {
        id: "primary",
        className:
            "top-[10%] left-[8%] w-[520px] h-[520px] md:w-[600px] md:h-[600px]",
        color: "var(--primary)",
        duration: 55,
        translate: { x: 70, y: 45 },
        scale: { from: 0.78, to: 1.08 },
        opacity: 0.22,
    },
    {
        id: "accent",
        className:
            "top-[16%] right-[10%] w-[460px] h-[460px] md:w-[540px] md:h-[540px]",
        color: "var(--accent)",
        duration: 62,
        translate: { x: -60, y: 40 },
        scale: { from: 0.8, to: 1.05 },
        opacity: 0.2,
    },
    {
        id: "secondary",
        className:
            "bottom-[12%] left-[55%] -translate-x-1/2 w-[580px] h-[580px] md:w-[660px] md:h-[660px]",
        color: "var(--secondary)",
        duration: 68,
        translate: { x: 80, y: 55 },
        scale: { from: 0.74, to: 1.06 },
        opacity: 0.21,
    },
];

export const Background = React.forwardRef<HTMLDivElement, BackgroundProps>(
    (
        {
            blobs,
            forceMotion = false,
            fixed = true,
            zIndex = -10,
            blurClassName = "blur-[150px]",
            vignette = true,
            intensity = 1,
            preset = "full",
            className,
            globalScale = 1,
            translateFactor = 1,
            easing = "linear",
            children,
            ...rest
        },
        ref,
    ) => {
        const reduce = useReducedMotion();
        const shouldAnimate = forceMotion || !reduce;

        // Derive effective blobs: explicit > preset selection
        let effectiveBlobs: BackgroundBlob[];
        if (blobs?.length) {
            effectiveBlobs = blobs;
        } else {
            if (preset === "dual") {
                effectiveBlobs = defaultBlobs.slice(0, 2); // primary + accent
            } else if (preset === "triple") {
                effectiveBlobs = defaultBlobs.slice(0, 3); // add secondary
            } else {
                effectiveBlobs = defaultBlobs; // full set
            }
        }

        return (
            <div
                ref={ref}
                aria-hidden
                {...rest}
                className={cn(
                    "pointer-events-none select-none",
                    fixed && "fixed inset-0",
                    !fixed && "absolute inset-0",
                    className,
                )}
                style={{ zIndex }}
            >
                {effectiveBlobs.map((b, i) => {
                    const {
                        id = i,
                        className: blobPos = "",
                        color,
                        duration = 22,
                        delay = 0,
                        translate = {},
                        scale = {},
                        opacity = 0.35,
                    } = b;
                    const { x = 40, y = 20 } = translate;
                    const { from = 0.9, to = 1.1 } = scale;

                    // Apply global multipliers.
                    const xEff = x * translateFactor;
                    const yEff = y * translateFactor;
                    const fromEff = from * globalScale;
                    const toEff = to * globalScale;

                    // Organic keyframe path (adds slight rotation-like drift)
                    const keyframes = shouldAnimate
                        ? {
                              scale: [fromEff, toEff, fromEff],
                              x: [0, xEff, 0],
                              y: [0, yEff * 0.6, 0],
                              filter: [
                                  "blur(150px)",
                                  "blur(158px)",
                                  "blur(150px)",
                              ],
                          }
                        : undefined;

                    return (
                        <motion.div
                            key={id}
                            className={cn(
                                "rounded-full opacity-40",
                                "will-change-transform mix-blend-screen",
                                blurClassName,
                                blobPos,
                            )}
                            style={{
                                background: color || `var(--primary)`,
                                opacity: Math.max(
                                    0,
                                    Math.min(1, opacity * intensity),
                                ),
                                position: "absolute",
                            }}
                            initial={
                                shouldAnimate
                                    ? { scale: fromEff, filter: "blur(150px)" }
                                    : false
                            }
                            animate={keyframes}
                            transition={
                                shouldAnimate
                                    ? ({
                                          duration,
                                          repeat: Infinity,
                                          delay,
                                          ease: easing ?? "linear",
                                      } as Transition)
                                    : undefined
                            }
                        />
                    );
                })}
                {
                    children /* allow layering other decorative children if desired */
                }
                {/* Optional vignette overlay */}
                {vignette && (
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_35%_35%,rgba(var(--surface-rgb),0.18),transparent_60%)]" />
                )}
            </div>
        );
    },
);

Background.displayName = "Background";

export default Background;
