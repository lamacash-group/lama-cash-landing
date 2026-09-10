import {Header} from "@/components/Header";
import {Home} from "@/components/Home";
import {ScrollStack} from "@/components/StackingCards";
import MoreServices from "@/components/MoreServices";
import {LamaCashMedia} from "@/components/LamaCashMedia";
import {Blog} from "@/components/Blog";
import {Questions} from "@/components/Questions";
import {Metadata} from "next";
import {getLocale} from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();

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
            absolute: titles[locale] || titles['uk'], // absolute отключает шаблон из layout
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
        }
    };
}

export default function Main() {

    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans w-full mx-auto min-h-screen">
            <div className="flex flex-col w-full bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)] overflow-hidden">
                <header className="w-full h-full flex flex-col gap-4">
                    <Header/>
                </header>
                <Home/>
            </div>
            <main className="w-full h-full">
                <section>
                    <ScrollStack/>
                </section>
                <section id="services">
                    <MoreServices/>
                </section>
                <section>
                    <Questions/>
                </section>
                <section id="media">
                    <LamaCashMedia/>
                </section>
                <section id="blog">
                    <Blog/>
                </section>
            </main>
        </div>
    );
}
