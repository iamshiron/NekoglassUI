"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { HeartIcon, AirplaneIcon } from "@phosphor-icons/react";

export default function Page() {
    const [newsletter, setNewsletter] = React.useState(false);
    const [marketingEmails, setMarketingEmails] = React.useState(true);
    return (
        <div className="p-6 glass-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Checkbox Component</h1>
            <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
            <div className="flex flex-col gap-4 mb-10 max-w-md">
                <div className="flex items-center gap-3">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center gap-3">
                    <Checkbox id="updates" defaultChecked />
                    <Label htmlFor="updates">Receive product updates</Label>
                </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Without Checkmark</h2>
            <div className="flex flex-col gap-4 mb-10 max-w-md">
                <div className="flex items-center gap-3">
                    <Checkbox hideCheckmark={true} id="terms2" />
                    <Label htmlFor="terms2">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center gap-3">
                    <Checkbox
                        hideCheckmark={true}
                        id="updates2"
                        defaultChecked
                    />
                    <Label htmlFor="updates2">Receive product updates</Label>
                </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Custom Icons</h2>
            <div className="flex flex-col gap-4 mb-10 max-w-md">
                <div className="flex items-center gap-3">
                    <Checkbox
                        icon={<HeartIcon size={14} weight="fill" />}
                        id="heart"
                    />
                    <Label htmlFor="heart">I heart this product</Label>
                </div>
                <div className="flex items-center gap-3">
                    <Checkbox
                        icon={<AirplaneIcon weight="fill" />}
                        id="airplane"
                        defaultChecked
                    />
                    <Label htmlFor="airplane">I want to fly</Label>
                </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Controlled State</h2>
            <div className="flex flex-col gap-4 mb-10 max-w-md">
                <div className="flex items-center justify-between gap-3 p-3 rounded-lg border bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                    <div className="flex items-center gap-3">
                        <Checkbox
                            id="newsletter"
                            checked={newsletter}
                            onCheckedChange={(v) => setNewsletter(v === true)}
                        />
                        <Label htmlFor="newsletter">Weekly newsletter</Label>
                    </div>
                    <span className="text-sm text-muted-foreground">
                        {newsletter ? "Enabled" : "Disabled"}
                    </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-3 rounded-lg border bg-[rgba(var(--surface-rgb),0.55)] backdrop-blur-sm border-[rgba(var(--surface-rgb),0.7)]">
                    <div className="flex items-center gap-3">
                        <Checkbox
                            id="marketing"
                            checked={marketingEmails}
                            onCheckedChange={(v) =>
                                setMarketingEmails(v === true)
                            }
                        />
                        <Label htmlFor="marketing">Marketing emails</Label>
                    </div>
                    <button
                        type="button"
                        className="text-sm underline hover:no-underline"
                        onClick={() => setMarketingEmails((s) => !s)}
                    >
                        Toggle
                    </button>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Disabled & Read-only
            </h2>
            <div className="flex flex-col gap-4 mb-10 max-w-md">
                <div className="flex items-center gap-3">
                    <Checkbox id="disabled-1" disabled defaultChecked />
                    <Label htmlFor="disabled-1" className="opacity-70">
                        Disabled (checked)
                    </Label>
                </div>
                <div className="flex items-center gap-3">
                    <Checkbox id="disabled-2" disabled />
                    <Label htmlFor="disabled-2" className="opacity-70">
                        Disabled (unchecked)
                    </Label>
                </div>
                <div className="flex items-center gap-3">
                    <Checkbox id="readonly" checked aria-readonly="true" />
                    <Label htmlFor="readonly">Read-only selection</Label>
                </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Group Example</h2>
            <fieldset className="flex flex-col gap-3 mb-8 max-w-md">
                <legend className="text-sm font-medium mb-1">
                    Notification preferences
                </legend>
                <div className="flex items-center gap-3">
                    <Checkbox id="email-notify" defaultChecked />
                    <Label htmlFor="email-notify">Email</Label>
                </div>
                <div className="flex items-center gap-3">
                    <Checkbox id="sms-notify" />
                    <Label htmlFor="sms-notify">SMS</Label>
                </div>
                <div className="flex items-center gap-3">
                    <Checkbox id="push-notify" />
                    <Label htmlFor="push-notify">Push</Label>
                </div>
            </fieldset>
        </div>
    );
}
