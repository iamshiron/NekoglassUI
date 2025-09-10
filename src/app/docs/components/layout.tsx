"use client";

import type React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
                "block py-2 px-3 rounded-md transition-colors hover:bg-accent/50 text-sm",
                isActive
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground",
                className,
            )}
        >
            {children}
        </Link>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-[rgba(var(--surface-rgb),0.7)] backdrop-blur-lg p-4 sticky top-0 h-screen overflow-y-auto">
                <div className="mb-8">
                    <Link href="/" className="flex items-center gap-2 py-3">
                        <span className="font-bold text-xl">Nekoglass UI</span>
                    </Link>
                </div>

                <div className="space-y-6">
                    <div>
                        <h2 className="font-medium text-xs uppercase tracking-wider text-muted-foreground mb-2 px-3">
                            Getting Started
                        </h2>
                        <div className="space-y-1">
                            <NavItem href="/docs/introduction">
                                Introduction
                            </NavItem>
                            <NavItem href="/docs/installation">
                                Installation
                            </NavItem>
                            <NavItem href="/docs/theming">Theming</NavItem>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-medium text-xs uppercase tracking-wider text-muted-foreground mb-2 px-3">
                            Components
                        </h2>
                        <div className="space-y-1">
                            <NavItem href="/docs/components/button">
                                Button
                            </NavItem>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 py-8 px-6 max-w-4xl">{children}</main>
        </div>
    );
}
