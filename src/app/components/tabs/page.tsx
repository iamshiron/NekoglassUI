"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ArrowRightIcon,
    ArrowClockwiseIcon,
    PlusIcon,
} from "@phosphor-icons/react";

export default function Page() {
    return (
        <div className="p-6 glass-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Tabs Component</h1>

            <h2 className="text-2xl font-semibold mb-4">Basic</h2>
            <div className="mb-8">
                <Tabs defaultValue="account" className="w-full">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="billing">Billing</TabsTrigger>
                    </TabsList>
                    <div className="mt-4">
                        <TabsContent value="account">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Manage your account settings and set e-mail
                                preferences.
                            </div>
                        </TabsContent>
                        <TabsContent value="password">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Change your password here. After saving, you’ll
                                be logged out everywhere.
                            </div>
                        </TabsContent>
                        <TabsContent value="billing">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                View invoices, update payment methods, and
                                manage your plan.
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

            <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
            <div className="mb-8">
                <Tabs defaultValue="overview" className="w-full">
                    <TabsList>
                        <TabsTrigger value="overview" className="gap-2">
                            <ArrowRightIcon /> Overview
                        </TabsTrigger>
                        <TabsTrigger value="refresh" className="gap-2">
                            <ArrowClockwiseIcon /> Refresh
                        </TabsTrigger>
                        <TabsTrigger value="new" className="gap-2">
                            <PlusIcon /> New Item
                        </TabsTrigger>
                    </TabsList>
                    <div className="mt-4">
                        <TabsContent value="overview">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                A quick overview of your recent activity.
                            </div>
                        </TabsContent>
                        <TabsContent value="refresh">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Data refreshed. Here’s what changed since your
                                last visit.
                            </div>
                        </TabsContent>
                        <TabsContent value="new">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Create a new item using the form below.
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Full-width List</h2>
            <div className="mb-8">
                <Tabs defaultValue="one" className="w-full">
                    <TabsList className="w-full">
                        <TabsTrigger value="one">One</TabsTrigger>
                        <TabsTrigger value="two">Two</TabsTrigger>
                        <TabsTrigger value="three">Three</TabsTrigger>
                        <TabsTrigger value="four">Four</TabsTrigger>
                    </TabsList>
                    <div className="mt-4">
                        <TabsContent value="one">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Full-width tabs stretch triggers evenly.
                            </div>
                        </TabsContent>
                        <TabsContent value="two">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Second tab content.
                            </div>
                        </TabsContent>
                        <TabsContent value="three">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Third tab content.
                            </div>
                        </TabsContent>
                        <TabsContent value="four">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Fourth tab content.
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Vertical Orientation
            </h2>
            <div className="mb-8">
                <Tabs
                    defaultValue="profile"
                    orientation="vertical"
                    className="w-full gap-4 md:flex-row"
                >
                    <TabsList className="md:h-auto md:flex-col w-fit">
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="security">Security</TabsTrigger>
                        <TabsTrigger value="notifications">
                            Notifications
                        </TabsTrigger>
                    </TabsList>
                    <div className="mt-4 md:mt-0 md:flex-1">
                        <TabsContent value="profile">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Edit your profile details and avatar.
                            </div>
                        </TabsContent>
                        <TabsContent value="security">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Update MFA, sessions, and authorized devices.
                            </div>
                        </TabsContent>
                        <TabsContent value="notifications">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Choose which events send you alerts.
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

            <h2 className="text-2xl font-semibold mb-4">States</h2>
            <div className="mb-8">
                <Tabs defaultValue="a" className="w-full">
                    <TabsList>
                        <TabsTrigger value="a">Enabled</TabsTrigger>
                        <TabsTrigger value="b" disabled>
                            Disabled
                        </TabsTrigger>
                        <TabsTrigger value="c">Also Enabled</TabsTrigger>
                    </TabsList>
                    <div className="mt-4">
                        <TabsContent value="a">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                This tab is enabled and active.
                            </div>
                        </TabsContent>
                        <TabsContent value="c">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Another enabled tab.
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Glassmorphic Variant
            </h2>
            <div className="p-6 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg mb-8">
                <Tabs defaultValue="left" className="w-full">
                    <TabsList className="w-full">
                        <TabsTrigger value="left">Left</TabsTrigger>
                        <TabsTrigger value="middle">Middle</TabsTrigger>
                        <TabsTrigger value="right">Right</TabsTrigger>
                    </TabsList>
                    <div className="mt-4">
                        <TabsContent value="left">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Glassy surface under tabs for visual emphasis.
                            </div>
                        </TabsContent>
                        <TabsContent value="middle">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Middle content area.
                            </div>
                        </TabsContent>
                        <TabsContent value="right">
                            <div className="rounded-lg border p-4 bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                                Right content area.
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
