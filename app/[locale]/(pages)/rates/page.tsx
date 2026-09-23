import Calculator from "@/components/Rates/Calculator";
import {routing} from "@/app/i18n/routing";
import {Metadata} from "next";

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
        uk: 'Калькулятор обміну валют LAMA CASH - актуальні курси',
        ru: 'Калькулятор обмена валют LAMA CASH - актуальные курсы',
        en: 'LAMA CASH Currency Exchange Calculator - Current Rates'
    };

    const descriptions: Record<string, string> = {
        uk: 'Розрахуйте вигоду обміну USDT, BTC, ETH на готівку або сервіси Wise, Revolut, PayPal. Швидкий та зручний калькулятор LAMA CASH.',
        ru: 'Рассчитайте выгоду обмена USDT, BTC, ETH на наличные или сервисы Wise, Revolut, PayPal. Быстрый и удобный калькулятор LAMA CASH.',
        en: 'Calculate the benefit of exchanging USDT, BTC, ETH for cash or services like Wise, Revolut, PayPal. Fast and convenient LAMA CASH calculator.'
    };

    const canonical = `https://lama-cash.com/${locale}/rates`;

    return {
        title: titles[locale] || titles['uk'],
        description: descriptions[locale] || descriptions['uk'],
        alternates: {
            canonical,
            languages: {
                'uk': 'https://lama-cash.com/uk/rates.',
                'ru': 'https://lama-cash.com/ru/rates/',
                'en': 'https://lama-cash.com/en/rates/',
                'x-default': 'https://lama-cash.com/uk/rates/'
            }
        },
        openGraph: {
            title: titles[locale] || titles['uk'],
            description: descriptions[locale] || descriptions['uk'],
            url: canonical,
        },
    };
}

export default function CalculatorPage() {

    return (
        <Calculator />
    );
}
