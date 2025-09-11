"use client";

import type React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Background } from "@/components/ui/background";

// Data model for docs navigation (extend here to add more components)
const componentPages = [
    { title: "Button", href: "/docs/components/button" },
    { title: "Input", href: "/docs/components/input" },
    { title: "Label", href: "/docs/components/label" },
    { title: "Background", href: "/docs/components/background" },
];

const gettingStartedPages = [
    { title: "Introduction", href: "/docs/introduction" },
    { title: "Installation", href: "/docs/installation" },
    { title: "Theming", href: "/docs/theming" },
];

// Combine for sidebar groups
const navGroups: {
    heading: string;
    items: { title: string; href: string }[];
}[] = [
    { heading: "Getting Started", items: gettingStartedPages },
    { heading: "Components", items: componentPages },
];

// Navigation item component with active state
function NavItem({
    href,
    children,
    className,
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            className={cn(
                "group relative flex items-center gap-2 py-2 px-3 rounded-md text-sm transition-colors",
                "hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70",
                isActive
                    ? "bg-accent text-accent-foreground font-medium shadow-sm"
                    : "text-muted-foreground",
                className,
            )}
        >
            {/* Active indicator bar */}
            <span
                className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-primary transition-opacity",
                    isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-40",
                )}
                aria-hidden
            />
            <span className="relative z-10">{children}</span>
        </Link>
    );
}

function PrevNextNav() {
    const pathname = usePathname();
    // Normalize trailing slash
    const normalized =
        pathname.endsWith("/") && pathname.length > 1
            ? pathname.slice(0, -1)
            : pathname;

    const index = componentPages.findIndex((p) => normalized === p.href);
    if (index === -1) return null; // Only show on component pages

    const prev = index > 0 ? componentPages[index - 1] : null;
    const next =
        index < componentPages.length - 1 ? componentPages[index + 1] : null;

    return (
        <nav
            aria-label="Component page navigation"
            className="mt-12 pt-8 border-t border-border flex flex-row items-stretch gap-4"
        >
            <div className="flex-1">
                {prev ? (
                    <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start"
                    >
                        <Link href={prev.href} className="group">
                            <ArrowLeftIcon className="h-4 w-4" />
                            <span className="flex flex-col text-left">
                                <span className="text-[12px] font-normal tracking-wider text-muted-foreground -mb-0.5">
                                    Previous
                                </span>
                                {prev.title}
                            </span>
                        </Link>
                    </Button>
                ) : (
                    <div className="opacity-40 text-muted-foreground text-sm select-none px-1">
                        Start of list
                    </div>
                )}
            </div>
            <div className="flex-1 text-right">
                {next ? (
                    <Button
                        asChild
                        variant="outline"
                        className="w-full justify-end"
                    >
                        <Link href={next.href} className="group">
                            <span className="flex flex-col text-right">
                                <span className="text-[12px] font-normal tracking-wider text-muted-foreground -mb-0.5">
                                    Next
                                </span>
                                {next.title}
                            </span>
                            <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                    </Button>
                ) : (
                    <div className="opacity-40 text-muted-foreground text-sm select-none px-1">
                        End of list
                    </div>
                )}
            </div>
        </nav>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        void pathname;
        setOpen(false);
    }, [pathname]);

    // Prevent body scroll when sidebar open (mobile)
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [open]);

    // Listen for toggle requests from global SiteHeader hamburger (mobile)
    useEffect(() => {
        const handler = () => setOpen((o) => !o);
        window.addEventListener("docs-sidebar:toggle", handler);
        return () => window.removeEventListener("docs-sidebar:toggle", handler);
    }, []);

    // Header height supplied via CSS var --site-header-height (set in SiteHeader)
    return (
        <div className="flex min-h-screen">
            <Background />

            {/* Skip link */}
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground shadow-lg"
            >
                Skip to content
            </a>
            {/* Sidebar (desktop) */}
            <aside
                className={cn(
                    "hidden md:flex w-64 shrink-0 border-r border-border bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-xl p-4",
                    // position & sizing accounting for global header
                    "sticky overflow-hidden",
                    "top-[var(--site-header-height,0px)]",
                    "h-[calc(100vh-var(--site-header-height,0px))]",
                )}
            >
                <div className="flex flex-col w-full">
                    <div className="space-y-7">
                        {navGroups.map((group) => (
                            <div key={group.heading}>
                                <h2 className="font-medium text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                                    <span className="px-3 block">
                                        {group.heading}
                                    </span>
                                </h2>
                                <div className="space-y-1">
                                    {group.items.map((item) => (
                                        <NavItem
                                            key={item.href}
                                            href={item.href}
                                        >
                                            {item.title}
                                        </NavItem>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
            {/* Mobile sidebar overlay */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 z-40 transition-opacity",
                    open
                        ? "bg-black/40 backdrop-blur-sm"
                        : "pointer-events-none opacity-0",
                )}
                onClick={() => setOpen(false)}
                aria-hidden
            />
            <aside
                className={cn(
                    "md:hidden fixed z-50 top-0 left-0 h-full w-72 border-r border-border bg-[rgba(var(--surface-rgb),0.85)] backdrop-blur-xl p-4 transition-transform ease-out duration-300 flex flex-col",
                    open ? "translate-x-0" : "-translate-x-full",
                )}
                aria-label="Documentation navigation"
            >
                <div className="mb-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 py-2">
                        <span className="font-bold text-lg tracking-tight">
                            Nekoglass UI
                        </span>
                    </Link>
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        className="rounded-lg"
                        onClick={() => setOpen(false)}
                        aria-label="Toggle documentation navigation"
                    >
                        <XIcon className="h-5 w-5" />
                    </Button>
                </div>
                <div className="space-y-7 pr-2 overflow-hidden">
                    {navGroups.map((group) => (
                        <div key={group.heading}>
                            <h2 className="font-medium text-[11px] uppercase tracking-wider text-muted-foreground mb-2 px-3">
                                {group.heading}
                            </h2>
                            <div className="space-y-1">
                                {group.items.map((item) => (
                                    <NavItem key={item.href} href={item.href}>
                                        {item.title}
                                    </NavItem>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
            {/* Content area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Global header handles mobile toggle now */}
                <main
                    id="main"
                    className="flex-1 py-10 px-6 md:px-10 xl:px-14 max-w-4xl w-full mx-auto"
                >
                    {children}
                    <PrevNextNav />
                </main>
            </div>
        </div>
    );
}
