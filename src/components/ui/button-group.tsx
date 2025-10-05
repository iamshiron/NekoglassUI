import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

// Base structural + orientation variants only; stylistic utilities appended separately
const buttonGroupVariants = cva("flex w-fit items-stretch", {
    variants: {
        orientation: {
            horizontal:
                "flex-row [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
            vertical:
                "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
        },
    },
    defaultVariants: {
        orientation: "horizontal",
    },
});

// Shared glass surface utilities for non-button textual segments
const textBaseClasses =
    "bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border border-[rgba(var(--surface-rgb),0.7)] text-foreground";

// Common interactive focus layering for any direct child focusable element
const focusChildUtility =
    "[&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1";

// Compose final root class additions (not variant dependent)
const buttonGroupRootExtras = cn(
    focusChildUtility,
    // When nested groups appear, add spacing between them
    "has-[>[data-slot=button-group]]:gap-2",
    // --- Input wrapper normalization (floating label wrapper) ---
    // Style direct wrapper divs that contain an immediate input as if they were buttons
    "[&>div:has(>input)]:flex [&>div:has(>input)]:items-stretch [&>div:has(>input)]:bg-[rgba(var(--surface-rgb),0.55)] [&>div:has(>input)]:backdrop-blur-sm [&>div:has(>input)]:border [&>div:has(>input)]:border-[rgba(var(--surface-rgb),0.7)] [&>div:has(>input)]:rounded-md",
    // Remove inner input's own border/background/radius so wrapper provides unified surface
    "[&>div:has(>input)>input]:border-0 [&>div:has(>input)>input]:bg-transparent [&>div:has(>input)>input]:shadow-none [&>div:has(>input)>input]:rounded-none",
    // Hide floating label element if present inside group for a simpler inline layout
    "[&>div:has(>input)>label]:hidden",
    // Apply same corner clipping rules to input wrappers as to buttons
    "[&>div:has(>input):not(:first-child)]:rounded-l-none [&>div:has(>input):not(:first-child)]:border-l-0 [&>div:has(>input):not(:last-child)]:rounded-r-none",
);

interface ButtonGroupProps
    extends React.ComponentProps<"div">,
        VariantProps<typeof buttonGroupVariants> {
    /**
     * Disables the child button scale transform on hover to prevent visual overlap
     * between adjacent buttons. When true (default), a subtle ring + elevation
     * effect is used instead of scaling.
     */
    disableChildScale?: boolean;
}

function ButtonGroup({
    className,
    orientation,
    disableChildScale = true,
    ...props
}: ButtonGroupProps) {
    const antiOverlapClasses = disableChildScale
        ? // Cancel hover scaling, preserve original slight lift (we do NOT override the existing hover:-translate-y-0.5 from the Button)
          // Keep active press scale feedback.
          "[&>button]:hover:scale-100 [&>button]:active:scale-95 [&>button]:transition-transform [&>a]:hover:scale-100 [&>a]:active:scale-95 [&>a]:transition-transform"
        : undefined;

    return (
        <div
            data-slot="button-group"
            data-orientation={orientation}
            className={cn(
                buttonGroupVariants({ orientation }),
                buttonGroupRootExtras,
                antiOverlapClasses,
                className,
            )}
            {...props}
        />
    );
}

function ButtonGroupText({
    className,
    asChild = false,
    ...props
}: React.ComponentProps<"div"> & {
    asChild?: boolean;
}) {
    const Comp = asChild ? Slot : "div";

    return (
        <Comp
            className={cn(
                textBaseClasses,
                "flex items-center gap-2 rounded-md px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 transition-colors",
                className,
            )}
            {...props}
        />
    );
}

function ButtonGroupSeparator({
    className,
    orientation = "vertical",
    ...props
}: React.ComponentProps<typeof Separator>) {
    return (
        <Separator
            data-slot="button-group-separator"
            orientation={orientation}
            className={cn(
                // Prevent separator from expanding; ensure consistent 1px thickness
                // Vertical orientation (default here) -> tall line (h-full w-px)
                // Horizontal orientation -> wide line (w-full h-px)
                "relative !m-0 self-stretch flex-none shrink-0 bg-border/70 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
                className,
            )}
            {...props}
        />
    );
}

export {
    ButtonGroup,
    ButtonGroupSeparator,
    ButtonGroupText,
    buttonGroupVariants,
};
