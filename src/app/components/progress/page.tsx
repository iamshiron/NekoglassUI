"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

export default function Page() {
    const [animatedValue, setAnimatedValue] = React.useState(0);

    React.useEffect(() => {
        const id = setInterval(() => {
            setAnimatedValue((v) => (v >= 100 ? 0 : v + 5));
        }, 250);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="p-6 glass-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Progress Component</h1>

            <h2 className="text-2xl font-semibold mb-4">Basic</h2>
            <div className="space-y-4 mb-8">
                <div>
                    <div className="mb-2 text-sm text-muted-foreground">0%</div>
                    <Progress value={0} />
                </div>
                <div>
                    <div className="mb-2 text-sm text-muted-foreground">
                        25%
                    </div>
                    <Progress value={25} />
                </div>
                <div>
                    <div className="mb-2 text-sm text-muted-foreground">
                        50%
                    </div>
                    <Progress value={50} />
                </div>
                <div>
                    <div className="mb-2 text-sm text-muted-foreground">
                        75%
                    </div>
                    <Progress value={75} />
                </div>
                <div>
                    <div className="mb-2 text-sm text-muted-foreground">
                        100%
                    </div>
                    <Progress value={100} />
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
            <div className="space-y-4 mb-8">
                <div>
                    <div className="mb-2 text-sm text-muted-foreground">
                        Thin (h-1)
                    </div>
                    <Progress value={60} className="h-1" />
                </div>
                <div>
                    <div className="mb-2 text-sm text-muted-foreground">
                        Default (h-2)
                    </div>
                    <Progress value={60} className="h-2" />
                </div>
                <div>
                    <div className="mb-2 text-sm text-muted-foreground">
                        Comfort (h-3)
                    </div>
                    <Progress value={60} className="h-3" />
                </div>
                <div>
                    <div className="mb-2 text-sm text-muted-foreground">
                        Chunky (h-4)
                    </div>
                    <Progress value={60} className="h-4" />
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
                Glassmorphic Surface
            </h2>
            <div className="mb-8 p-6 rounded-xl bg-[rgba(var(--surface-rgb),0.55)] border border-[rgba(var(--surface-rgb),0.7)] backdrop-blur-sm space-y-4">
                <Progress value={30} />
                <Progress value={55} />
                <Progress value={85} />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Animated</h2>
            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Uploading…</span>
                    <span className="font-medium">{animatedValue}%</span>
                </div>
                <Progress
                    value={animatedValue}
                    aria-label={`Progress ${animatedValue}%`}
                />
            </div>
        </div>
    );
}
