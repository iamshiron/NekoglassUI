import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-0.5 active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-in-out group",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 group-hover:[&_svg]:rotate-12",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-lg hover:bg-destructive/90 group-hover:[&_svg]:rotate-12",
                outline:
                    "border border-solid bg-[rgba(var(--surface-rgb),0.55)] text-foreground shadow-lg backdrop-blur-sm hover:bg-accent hover:text-accent-foreground group-hover:[&_svg]:rotate-12",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/80 group-hover:[&_svg]:rotate-12",
                ghost: "hover:bg-accent hover:text-accent-foreground group-hover:[&_svg]:rotate-12",
                link: "text-primary underline-offset-4 hover:underline",
                success:
                    "bg-success text-success-foreground shadow-lg hover:bg-success/90 group-hover:[&_svg]:rotate-12",
                warning:
                    "bg-warning text-warning-foreground shadow-lg hover:bg-warning/90 group-hover:[&_svg]:rotate-12",
                info:
                    "bg-info text-info-foreground shadow-lg hover:bg-info/90 group-hover:[&_svg]:rotate-12",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-9 rounded-full px-4",
                lg: "h-12 rounded-full px-8",
                icon: "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
