import {Header} from "@/components/Header";
import {Home} from "@/components/Home";
import dynamic from "next/dynamic";
import {Metadata} from "next";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {BinanceLine} from "@/components/BinanceLine";
import * as React from "react";
import {routing} from "@/app/i18n/routing";
import FAQSection from "@/components/FaqSection";
import ReviewsSection from "@/components/Reviews/ReviewsSection";
import ManagerCheckBanner from "@/components/ManagerCheckBanner";

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

    const title = titles[locale] || titles['uk'];
    const description = descriptions[locale] || descriptions['uk'];
    const canonical = locale === 'uk' ? 'https://lama-cash.com' : `https://lama-cash.com/${locale}`;

    return {
        title: {
            absolute: title,
        },
        description,
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
            title,
            description,
            url: canonical,
            siteName: "LAMA CASH",
            type: "website",
            locale: locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "uk_UA",
            images: [
                {
                    url: "/og/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og/og-image.png"],
        },
    };
}

export default async function Main({params}: {params: Promise<{ locale: string }>}) {
    const {locale} = await params;
    setRequestLocale(locale);
    const tFaq = await getTranslations("FaqSection");

    const faqItems = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"];
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": tFaq(`items.${item}.question`),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": tFaq(`items.${item}.answer`),
            },
        })),
    };

    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans w-full mx-auto min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="flex flex-col w-full bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)] overflow-hidden">
                <div className="w-full h-full flex flex-col gap-4">
                    <Header/>
                    <BinanceLine/>
                </div>
                <Home/>
            </div>
            <main className="w-full h-full">
                <section id="manager_verification">
                    <ManagerCheckBanner />
                </section>
                <section id="services">
                    <ScrollStack />
                </section>
                <section id="universal_unit">
                    <MoreServices />
                </section>
                <section>
                    <Questions />
                </section>
                <section id="media">
                    <LamaCashMedia />
                </section>
                <section id="reviews">
                    <ReviewsSection/>
                </section>
                <section id="blog">
                    <Blog />
                </section>
                <section id="faq">
                    <FAQSection/>
                </section>
            </main>
        </div>
    );
}
