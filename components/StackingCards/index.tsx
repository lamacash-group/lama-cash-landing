"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StackItem {
    id: number;
    title: string;
    description: string;
    content: string;
    bgColor: string;
    offset: {
        mobile: number;
        desktop: number;
    };
}

const STACK_ITEMS: StackItem[] = [
    {
        id: 1,
        title: "Phase 1: Foundation",
        description: "Setting up core infrastructure",
        content: "Initialize repositories, configure CI/CD pipelines, and deploy initial staging environments.",
        bgColor: "bg-gradient-to-b from-[#C7A7FF] to-[#E3E3E3] text-slate-50",
        offset: { mobile: 0, desktop: 0 },
    },
    {
        id: 2,
        title: "Phase 2: Design & UI",
        description: "Crafting beautiful interfaces",
        content: "Integrate Tailwind CSS, build accessible primitives with shadcn/ui, and establish design systems.",
        bgColor: "bg-gradient-to-b from-[#B088F4] to-[#E3E3E3] text-zinc-50",
        offset: { mobile: 20, desktop: 50 },
    },
    {
        id: 3,
        title: "Phase 3: Core Features",
        description: "Developing business logic",
        content: "Implement authentication, state management, and real-time database synchronizations.",
        bgColor: "bg-gradient-to-b from-[#958DFF] to-[#E3E3E3] text-neutral-50",
        offset: { mobile: 50, desktop: 140 },
    },
];

export function ScrollStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastItemOffset = STACK_ITEMS[STACK_ITEMS.length - 1].offset;

    return (
        <div ref={containerRef} className="relative py-12 pb-[10vh]">
            <div className="w-full px-10 mx-auto rounded-[27px] flex flex-col">
                {STACK_ITEMS.map((item, index) => {
                    return (
                        <StackCard
                            key={item.id}
                            item={item}
                            index={index}
                            total={STACK_ITEMS.length}
                            lastItemOffset={lastItemOffset}
                        />
                    );
                })}
            </div>
        </div>
    );
}

interface StackCardProps {
    item: StackItem;
    index: number;
    total: number;
    lastItemOffset: { mobile: number; desktop: number };
}

function StackCard({ item, index, lastItemOffset}: StackCardProps) {


    return (
        <div
            className={cn(
                `sticky w-full flex items-start justify-center [--card-height:500px] sm:[--card-height:700px]`,
                "[--active-offset:var(--offset-mobile)] sm:[--active-offset:var(--offset-desktop)]",
                "[--active-last:var(--last-mobile)] sm:[--active-last:var(--last-desktop)]",
            )}
            style={{
                zIndex: index,
                '--offset-mobile': `${item.offset.mobile}px`,
                '--offset-desktop': `${item.offset.desktop}px`,
                '--last-mobile': `${lastItemOffset.mobile}px`,
                '--last-desktop': `${lastItemOffset.desktop}px`,
                top: `calc(6rem + var(--active-offset))`,
                height: `calc(var(--card-height) + (var(--active-last) - var(--active-offset)))`,
            } as React.CSSProperties}
        >
            <motion.div
                className="w-full h-(--card-height) origin-top"
            >
                <Card className={cn("w-full h-full border-none shadow-2xl flex flex-col justify-between p-6", item.bgColor)}>
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">{item.title}</CardTitle>
                        <CardDescription className="text-muted-foreground/80">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-lg leading-relaxed opacity-90">
                        {item.content}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
