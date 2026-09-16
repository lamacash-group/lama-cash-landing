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

    const ogLocales: Record<string, string> = {
        uk: 'uk_UA',
        ru: 'ru_RU',
        en: 'en_US'
    };

    return {
        metadataBase: new URL('https://lama-cash.com'),
        title: {
            template: '%s | LAMA CASH',
            default: 'LAMA CASH - Криптообмінник'
        },
        description: descriptions[locale] || descriptions['uk'],
        openGraph: {
            type: 'website',
            siteName: 'LAMA CASH',
            locale: ogLocales[locale] || 'uk_UA',
            images: [{ url: '/og/og-image.png', width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
        },
    };
}

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LAMA CASH",
    "url": "https://lama-cash.com",
    "logo": "https://lama-cash.com/logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+38-093-599-63-85",
        "contactType": "customer service",
        "email": "support@lama-cash.com",
        "availableLanguage": ["Ukrainian", "Russian", "English"]
    },
    "sameAs": [
        "https://t.me/lamacash_manager",
        "https://www.tiktok.com/@lama.cash",
        "https://www.instagram.com/lama.cash"
    ]
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LAMA CASH",
    "url": "https://lama-cash.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://lama-cash.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

export default async function LocaleLayout({
                                               children,
                                           }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {

    return <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Provider>
            <div className="flex flex-col w-full overflow-hidden min-h-screen">
                {children}
                <Footer/>
            </div>
        </Provider>
    </>
}
