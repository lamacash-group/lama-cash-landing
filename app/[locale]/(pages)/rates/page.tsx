import Calculator from "@/components/Rates/Calculator";
import {routing} from "@/app/i18n/routing";
import {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {getCanonicalUrl, getAlternateLanguages} from "@/lib/seo";

type Props = {
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    setRequestLocale(locale);

    const titles: Record<string, string> = {
        uk: 'Калькулятор обміну валют LAMA CASH - актуальні курси',
        ru: 'Калькулятор обмена валют LAMA CASH - актуальные курсы',
        en: 'LAMA CASH Currency Exchange Calculator - Current Rates'
    };

    const descriptions: Record<string, string> = {
        uk: 'Розрахуйте вигоду обміну USDT, BTC, ETH на готівку або сервіси Wise, Revolut, PayPal. Швидкий та зручний калькулятор LAMA CASH.',
        ru: 'Рассчитайте выгоду обмена USDT, BTC, ETH на наличные или сервисы Wise, Revolut, PayPal. Быстрый и удобный калькулятор LAMA CASH.',
        en: 'Calculate the benefit of exchanging USDT, BTC, ETH for cash or services like Wise, Revolut, PayPal. Fast and convenient LAMA CASH calculator.'
    };

    const title = titles[locale] || titles['uk'];
    const description = descriptions[locale] || descriptions['uk'];
    const canonical = getCanonicalUrl(locale, '/rates');

    return {
        title,
        description,
        alternates: {
            canonical,
            languages: getAlternateLanguages('/rates'),
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

export default function CalculatorPage() {

    return (
        <Calculator />
    );
}
