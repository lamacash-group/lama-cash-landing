'use client';

import dynamic from "next/dynamic";

const ScrollStack = dynamic(() => import("@/components/StackingCards").then(mod => ({ default: mod.ScrollStack })));
const MoreServices = dynamic(() => import("@/components/MoreServices"), { ssr: false });
const LamaCashMedia = dynamic(() => import("@/components/LamaCashMedia").then(mod => ({ default: mod.LamaCashMedia })), { ssr: false });
const Blog = dynamic(() => import("@/components/Blog").then(mod => ({ default: mod.Blog })), { ssr: false });
const Questions = dynamic(() => import("@/components/Questions").then(mod => ({ default: mod.Questions })), { ssr: false });

export const ClientSections = () => {
    return (
        <>
            <section>
                <ScrollStack />
            </section>
            <section id="services">
                <MoreServices />
            </section>
            <section>
                <Questions />
            </section>
            <section id="media">
                <LamaCashMedia />
            </section>
            <section id="blog">
                <Blog />
            </section>
        </>
    );
};