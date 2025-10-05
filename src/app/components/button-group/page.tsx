"use client";

import { Button } from "@/components/ui/button";
import {
    ButtonGroup,
    ButtonGroupSeparator,
    ButtonGroupText,
} from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
    return (
        <div className="p-6 space-y-10 max-w-4xl mx-auto">
            <section className="space-y-4">
                <h1 className="font-fredoka text-2xl font-semibold tracking-tight">
                    Button Group
                </h1>
                <p className="text-sm text-muted-foreground">
                    A container that groups related buttons together with
                    consistent styling. Use it to visually associate actions.
                </p>
                <div className="flex flex-col gap-12">
                    {/* Basic */}
                    <div className="space-y-3">
                        <h2 className="font-medium text-sm uppercase tracking-wide text-muted-foreground/80">
                            Basic
                        </h2>
                        <ButtonGroup aria-label="Basic button group">
                            <Button variant="outline">Button 1</Button>
                            <Button variant="outline">Button 2</Button>
                        </ButtonGroup>
                    </div>

                    {/* Sizes (using button size props) */}
                    <div className="space-y-3">
                        <h2 className="font-medium text-sm uppercase tracking-wide text-muted-foreground/80">
                            Sizes
                        </h2>
                        <div className="flex flex-col gap-4">
                            <ButtonGroup aria-label="Small size group">
                                <Button size="sm" variant="outline">
                                    Small
                                </Button>
                                <Button size="sm" variant="outline">
                                    Small
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup aria-label="Default size group">
                                <Button variant="outline">Default</Button>
                                <Button variant="outline">Default</Button>
                            </ButtonGroup>
                            <ButtonGroup aria-label="Large size group">
                                <Button size="lg" variant="outline">
                                    Large
                                </Button>
                                <Button size="lg" variant="outline">
                                    Large
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>

                    {/* Nested */}
                    <div className="space-y-3">
                        <h2 className="font-medium text-sm uppercase tracking-wide text-muted-foreground/80">
                            Nested
                        </h2>
                        <ButtonGroup
                            className="gap-2"
                            aria-label="Nested groups"
                        >
                            <ButtonGroup>
                                <Button variant="outline">A</Button>
                                <Button variant="outline">B</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button variant="outline">C</Button>
                                <Button variant="outline">D</Button>
                            </ButtonGroup>
                        </ButtonGroup>
                    </div>

                    {/* Separator (show contrast when mixing solid buttons) */}
                    <div className="space-y-3">
                        <h2 className="font-medium text-sm uppercase tracking-wide text-muted-foreground/80">
                            Separator
                        </h2>
                        <ButtonGroup
                            aria-label="Separator example"
                            className="rounded-md overflow-hidden [&>button]:rounded-none"
                        >
                            <Button variant="default" className="px-5">
                                Primary
                            </Button>
                            <ButtonGroupSeparator />
                            <Button variant="default" className="px-5">
                                Primary
                            </Button>
                        </ButtonGroup>
                    </div>

                    {/* Split (two related actions separated) */}
                    <div className="space-y-3">
                        <h2 className="font-medium text-sm uppercase tracking-wide text-muted-foreground/80">
                            Split
                        </h2>
                        <ButtonGroup
                            aria-label="Split example"
                            className="rounded-md overflow-hidden [&>button]:rounded-none"
                        >
                            <Button variant="outline" className="px-5">
                                Action
                            </Button>
                            <ButtonGroupSeparator />
                            <Button variant="outline" className="px-5">
                                Alt
                            </Button>
                        </ButtonGroup>
                    </div>

                    {/* Input */}
                    <div className="space-y-3">
                        <h2 className="font-medium text-sm uppercase tracking-wide text-muted-foreground/80">
                            Input
                        </h2>
                        <ButtonGroup aria-label="Input group">
                            <ButtonGroupText>http://</ButtonGroupText>
                            <Input
                                floatingLabel={false}
                                placeholder="domain"
                                className="w-40"
                            />
                            <ButtonGroupText>.dev</ButtonGroupText>
                        </ButtonGroup>
                    </div>

                    {/* Text with asChild / Label */}
                    <div className="space-y-3">
                        <h2 className="font-medium text-sm uppercase tracking-wide text-muted-foreground/80">
                            Text Label
                        </h2>
                        <ButtonGroup aria-labelledby="labelled-group">
                            <ButtonGroupText asChild>
                                <Label htmlFor="name" id="labelled-group">
                                    Name
                                </Label>
                            </ButtonGroupText>
                            <Input
                                id="name"
                                placeholder="Type here"
                                floatingLabel={false}
                                className="w-48"
                            />
                        </ButtonGroup>
                    </div>
                </div>
            </section>
        </div>
    );
}
