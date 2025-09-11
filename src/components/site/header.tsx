"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const primaryNav: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/docs/components/button" },
    { label: "Background", href: "/docs/components/background" },
    { label: "Inputs", href: "/docs/components/input" },
];

export function SiteHeader() {
    const pathname = usePathname();
    const isDocs = pathname.startsWith("/docs");

    const handleToggleSidebar = React.useCallback(() => {
        window.dispatchEvent(new Event("docs-sidebar:toggle"));
    }, []);

    const headerRef = React.useRef<HTMLElement | null>(null);

    // Expose header height as CSS variable for layouts that need to offset (e.g., docs sidebar)
    React.useEffect(() => {
        const el = headerRef.current;
        if (!el) return;
        function setVar(target: HTMLElement) {
            const h = target.getBoundingClientRect().height;
            document.documentElement.style.setProperty(
                "--site-header-height",
                `${h}px`,
            );
        }
        setVar(el);
        const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target instanceof HTMLElement) setVar(entry.target);
            }
        });
        ro.observe(el);
        const handleResize = () => {
            if (headerRef.current) setVar(headerRef.current);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className={cn(
                "sticky top-0 z-40 w-full",
                "bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-b border-[rgba(var(--surface-rgb),0.7)]",
                "shadow-sm px-4 sm:px-6 py-3 flex items-center gap-4",
            )}
        >
            {isDocs && (
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="rounded-lg md:hidden"
                    onClick={handleToggleSidebar}
                    aria-label="Toggle documentation navigation"
                >
                    <ListIcon className="h-5 w-5" />
                </Button>
            )}

            <div className="flex items-center gap-2">
                <Link
                    href="/"
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                >
                    <span className="font-bold text-2xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        NekoglassUI
                    </span>
                </Link>
            </div>
        </header>
    );
}

SiteHeader.displayName = "SiteHeader";
