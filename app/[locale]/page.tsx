import {Header} from "@/components/Header";
import {Home} from "@/components/Home";
import dynamic from "next/dynamic";
import {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {BinanceLine} from "@/components/BinanceLine";
import * as React from "react";
import {routing} from "@/app/i18n/routing";

const ScrollStack = dynamic(() => import("@/components/StackingCards").then(mod => ({ default: mod.ScrollStack })));
const MoreServices = dynamic(() => import("@/components/MoreServices"));
const LamaCashMedia = dynamic(() => import("@/components/LamaCashMedia").then(mod => ({ default: mod.LamaCashMedia })));
const Blog = dynamic(() => import("@/components/Blog").then(mod => ({ default: mod.Blog })));
const Questions = dynamic(() => import("@/components/Questions").then(mod => ({ default: mod.Questions })));

type Props = {
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;

    const titles: Record<string, string> = {
        uk: 'Криптообмінник LAMA CASH - обмін USDT на готівку',
        ru: 'Криптообменник LAMA CASH - обмен USDT на наличные',
        en: 'LAMA CASH - USDT to cash exchange'
    };

    const descriptions: Record<string, string> = {
        uk: 'Швидкий обмін крипти: вивід USDT, купівля BTC/ETH, поповнення карток, PayPal/Wise без ризиків.',
        ru: 'Быстрый обмен крипты: вывод USDT, покупка BTC/ETH, пополнение карт, PayPal/Wise без рисков.',
        en: 'Fast crypto exchange: USDT withdrawal, BTC/ETH purchase, card top-ups, PayPal/Wise risk-free.'
    };

    const canonical = locale === 'uk' ? 'https://lama-cash.com' : `https://lama-cash.com/${locale}`;

    return {
        title: {
            absolute: titles[locale] || titles['uk'],
        },
        description: descriptions[locale] || descriptions['uk'],
        alternates: {
            canonical,
            languages: {
                'uk': 'https://lama-cash.com',
                'ru': 'https://lama-cash.com/ru',
                'en': 'https://lama-cash.com/en',
                'x-default': 'https://lama-cash.com'
            }
        },
        openGraph: {
            title: titles[locale] || titles['uk'],
            description: descriptions[locale] || descriptions['uk'],
            url: canonical,
        },
        twitter: {
            card: 'summary_large_image',
            title: titles[locale] || titles['uk'],
            description: descriptions[locale] || descriptions['uk'],
        },
    };
}

export default async function Main({params}: {params: Promise<{ locale: string }>}) {
    const {locale} = await params;
    setRequestLocale(locale);

    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans w-full mx-auto min-h-screen">
            <div className="flex flex-col w-full bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)] overflow-hidden">
                <div className="w-full h-full flex flex-col gap-4">
                    <Header/>
                    <BinanceLine/>
                </div>
                <Home/>
            </div>
            <main className="w-full h-full">
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
            </main>
        </div>
    );
}
