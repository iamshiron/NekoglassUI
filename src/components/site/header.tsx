"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { NavItem } from "../ui/nav-item";
import { motion } from "framer-motion";

import { GithubLogoIcon } from "@phosphor-icons/react";

const navItems = [
    { href: "/components", label: "Components" },
    { href: "/examples", label: "Examples" },
    { href: "/about", label: "About" },
    {
        href: "https://github.com/iamshiron/NekoglassUI",
        label: "GitHub",
        icon: <GithubLogoIcon />,
    },
];

export function SiteHeader() {
    const pathname = usePathname();
    const needsNav = pathname.startsWith("/components");

    const handleToggleSidebar = React.useCallback(() => {
        window.dispatchEvent(new Event("docs-sidebar:toggle"));
    }, []);

    const headerRef = React.useRef<HTMLElement | null>(null);

    return (
        <>
            <motion.header
                ref={(el: HTMLElement | null) => {
                    // keep the original ref for external use
                    headerRef.current = el;

                    // cleanup previous handler if any
                    const prev = window.__nekoglass_header_scroll_handler;
                    if (prev) {
                        try {
                            window.removeEventListener("scroll", prev);
                        } catch {}
                        delete window.__nekoglass_header_scroll_handler;
                    }

                    if (!el) return;

                    // initial styles for smooth transform (respects reduced motion by disabling transition)
                    const reduce =
                        typeof window !== "undefined" &&
                        window.matchMedia &&
                        window.matchMedia("(prefers-reduced-motion: reduce)")
                            .matches;
                    el.style.willChange = "transform, opacity";
                    el.style.transform = "translateY(0)";
                    el.style.opacity = "1";
                    el.style.transition = reduce
                        ? "none"
                        : "transform 200ms ease, opacity 200ms ease";

                    // simple scroll direction detector stored on window to persist across remounts
                    window.__nekoglass_last_scroll =
                        window.__nekoglass_last_scroll ?? window.scrollY;
                    let ticking = false;
                    const threshold = 2;

                    const handler = () => {
                        if (ticking) return;
                        ticking = true;
                        requestAnimationFrame(() => {
                            const current = window.scrollY;
                            const last = window.__nekoglass_last_scroll || 0;

                            if (current - last > threshold && current > 20) {
                                // scrolling down -> hide
                                if (!reduce) {
                                    el.style.transform = "translateY(-140px)";
                                    el.style.opacity = "0";
                                } else {
                                    // for reduced motion still hide but without transition
                                    el.style.transition = "none";
                                    el.style.transform = "translateY(-140px)";
                                    el.style.opacity = "0";
                                }
                            } else if (last - current > threshold) {
                                // scrolling up -> show
                                if (!reduce) {
                                    el.style.transform = "translateY(0)";
                                    el.style.opacity = "1";
                                } else {
                                    el.style.transition = "none";
                                    el.style.transform = "translateY(0)";
                                    el.style.opacity = "1";
                                }
                            }

                            window.__nekoglass_last_scroll = current;
                            ticking = false;
                        });
                    };

                    window.addEventListener("scroll", handler, {
                        passive: true,
                    });
                    window.__nekoglass_header_scroll_handler = handler;
                }}
                className={cn(
                    "bg-background/35 backdrop-blur-lg border-foreground/25 border-[1px]",
                    "fixed z-40 top-4 left-1/2 -translate-x-1/2 max-w-5xl px-4 sm:px-6",
                    "text-card-foreground rounded-xl backdrop-blur-sm",
                    "py-3 flex items-center justify-between gap-4 shadow-sm",
                )}
            >
                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                    >
                        <span className="font-bold font-fredoka text-2xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            NekoglassUI
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <NavItem key={item.href} href={item.href}>
                                {item.icon}
                                {item.label}
                            </NavItem>
                        ))}
                    </nav>
                </div>
            </motion.header>

            {needsNav && (
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="fixed top-4 left-4 rounded-lg md:hidden z-10"
                    onClick={handleToggleSidebar}
                    aria-label="Toggle documentation navigation"
                >
                    <ListIcon className="h-5 w-5" />
                </Button>
            )}
        </>
    );
}

SiteHeader.displayName = "SiteHeader";
