"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./button";

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
    const isActive = pathname === href || pathname.startsWith(`${href}`);

    return (
        <Button
            className="w-full text-left p-0"
            variant={isActive ? "accent" : "ghost"}
        >
            <Link
                className="w-full p-4 h-full flex items-center gap-2 text-left"
                href={href}
            >
                {children}
            </Link>
        </Button>
    );
}

export { NavItem };
