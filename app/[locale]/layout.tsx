import {Provider} from "@/components/Provider";
import {Footer} from "@/components/Footer";
import React from "react";
import type {Metadata} from "next";
import {getMessages, setRequestLocale} from "next-intl/server";
import {routing} from "@/app/i18n/routing";
import {hasLocale} from "next-intl";
import {notFound} from "next/navigation";
import {MicrosoftClarity} from "@/components/Clarity";
import {GoogleAnalytics} from "@next/third-parties/google";
import "../globals.css";
import {Rubik} from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

type Props = {
    params: Promise<{ locale: string }>;
};

const rubikMono = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
});

const getVoip = localFont({
    src: "../../fonts/GetVoIP-Grotesque.otf",
    variable: "--font-getvoip",
    weight: "400",
    style: "normal",
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {locale} = await params;

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
            images: [{url: '/og/og-image.png', width: 1200, height: 630}],
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
                                               params,
                                           }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {

    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html
            lang={locale}
            className={`${rubikMono.variable} ${getVoip.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col font-rubik bg-[rgba(230,230,230,1)]">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}}
        />
        <Provider locale={locale} messages={messages}>
            <div className="flex flex-col w-full overflow-x-clip min-h-screen">
                {children}
                <Footer/>
            </div>
        </Provider>
        <MicrosoftClarity/>
        {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
            // <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID}/>
        )}
        <Script id="google-ads-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', 'AW-18403181154');
            `}
        </Script>
        </body>
        </html>
    )

}
