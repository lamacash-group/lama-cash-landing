import {Provider} from "@/components/Provider";
import {Footer} from "@/components/Footer";
import React from "react";
import type {Metadata} from "next";
import {getLocale} from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();

    const descriptions: Record<string, string> = {
        uk: 'LAMA CASH - надійний криптообмінник. Миттєвий обмін USDT, BTC, ETH та інших криптовалют. Найкращі курси, гарантія AML.',
        ru: 'LAMA CASH - надежный криптообменник. Мгновенный обмен USDT, BTC, ETH и других криптовалют. Лучшие курсы, гарантия AML.',
        en: 'LAMA CASH - reliable crypto exchange. Instant USDT, BTC, ETH exchange. Best rates, AML guarantee.'
    };

    return {
        metadataBase: new URL('https://lama-cash.com'),
        title: {
            template: '%s | LAMA CASH',
            default: 'LAMA CASH - Криптообмінник'
        },
        description: descriptions[locale] || descriptions['uk'],
    };
}

export default async function LocaleLayout({
                                               children,
                                           }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {

    return <>
        <Provider>
            <div className="flex flex-col w-full overflow-hidden min-h-screen">
                {children}
                <Footer/>
            </div>
        </Provider>
    </>
}
