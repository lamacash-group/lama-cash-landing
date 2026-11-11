import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/app/i18n/routing";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{ locale: string }>}): Promise<Metadata> {
    const {locale} = await params;

    setRequestLocale(locale);

    const titles: Record<string, string> = {
        uk: 'Про компанію Lama Cash',
        ru: 'О компании Lama Cash',
        en: 'About Lama Cash'
    };

    const descriptions: Record<string, string> = {
        uk: 'Дізнайтеся більше про LAMA CASH: наша команда, місія та чому тисячі клієнтів обирають наш сервіс для обміну крипти.',
        ru: 'Узнайте больше о LAMA CASH: наша команда, миссия и почему тысячи клиентов выбирают наш сервис для обмена крипты.',
        en: 'Learn more about LAMA CASH: our team, mission, and why thousands of clients choose our crypto exchange service.'
    };

    const canonical = locale === 'uk' ? 'https://lama-cash.com/about' : `https://lama-cash.com/${locale}/about`;

    return {
        title: titles[locale] || titles['uk'],
        description: descriptions[locale] || descriptions['uk'],
        alternates: {
            canonical,
            languages: {
                'uk': 'https://lama-cash.com/about',
                'ru': 'https://lama-cash.com/ru/about',
                'en': 'https://lama-cash.com/en/about',
                'x-default': 'https://lama-cash.com/about'
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

interface AboutContent {
    title: string;
    description: string;
    storyTitle: string;
    storyText1: React.ReactNode;
    storyText2: string;
    amlTitle: string;
    amlText: React.ReactNode;
    stats: Array<{ label: string; value: string }>;
    awardsTitle: string;
    awardsText: React.ReactNode;
    backToHome: string;
}

const aboutData: Record<string, AboutContent> = {
    uk: {
        title: 'Про компанію Lama Cash',
        description: 'Дізнайтеся більше про нашу історію, цінності та команду, яка стоїть за створенням надійного фінансового сервісу з 2022 року.',
        storyTitle: 'Наша історія та місія',
        storyText1: (
            <>
                Lama Cash успішно працює на ринку фінансових та криптовалютних послуг <strong>з 2022 року</strong>. Ми прагнемо зробити процес обміну криптовалют максимально прозорим, швидким та безпечним для кожного користувача.
            </>
        ),
        storyText2: 'Сьогодні ми є надійним партнером для тисяч клієнтів, забезпечуючи транзакції по всій Україні та за її межами. Наша мета — стерти межі між традиційними фінансами та цифровими активами.',
        amlTitle: 'Принципи AML та безпека',
        amlText: (
            <>
                Ми суворо дотримуємося міжнародних стандартів <strong>AML (Anti-Money Laundering)</strong> та KYC. Завдяки інноваційним технологіям, кожна транзакція проходить багаторівневу перевірку, що гарантує абсолютну чистоту коштів та повну юридичну безпеку для наших клієнтів.
            </>
        ),
        stats: [
            {label: 'Років на ринку', value: '5+'},
            {label: 'Успішних угод', value: '100K+'},
            {label: 'Активних клієнтів', value: '50K+'},
            {label: 'Підтримка', value: '24/7'},
        ],
        awardsTitle: 'Визнання та нагороди',
        awardsText: (
            <>
                Наша відданість безпеці відзначена експертами ринку. У 2025 році команда здобула престижну нагороду{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 underline font-medium">
                    NcryptoAwards 2025
                </a>.
            </>
        ),
        backToHome: 'Повернутися на головну',
    },
    ru: {
        title: 'О компании Lama Cash',
        description: 'Узнайте больше о нашей истории, ценностях и команде, которая стоит за созданием надежного финансового сервиса с 2022 года.',
        storyTitle: 'Наша история и миссия',
        storyText1: (
            <>
                Lama Cash успешно работает на рынке финансовых и криптовалютных услуг <strong>с 2022 года</strong>. Мы стремимся сделать процесс обмена криптовалют максимально прозрачным, быстрым и безопасным для каждого пользователя.
            </>
        ),
        storyText2: 'Сегодня мы являемся надежным партнером для тысяч клиентов, обеспечивая транзакции по всей Украине и за ее пределами. Наша цель — стереть границы между традиционными финансами и цифровыми активами.',
        amlTitle: 'Принципы AML и безопасность',
        amlText: (
            <>
                Мы строго соблюдаем международные стандарты <strong>AML (Anti-Money Laundering)</strong> и KYC. Благодаря инновационным технологиям каждая транзакция проходит многоуровневую проверку, что гарантирует абсолютную чистоту средств и полную юридическую безопасность для наших клиентов.
            </>
        ),
        stats: [
            {label: 'Лет на рынке', value: '5+'},
            {label: 'Успешных сделок', value: '100K+'},
            {label: 'Активных клиентов', value: '50K+'},
            {label: 'Поддержка', value: '24/7'},
        ],
        awardsTitle: 'Признание и награды',
        awardsText: (
            <>
                Наша приверженность безопасности отмечена экспертами рынка. В 2025 году команда получила престижную награду{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 underline font-medium">
                    NcryptoAwards 2025
                </a>.
            </>
        ),
        backToHome: 'Вернуться на главную',
    },
    en: {
        title: 'About Lama Cash',
        description: 'Learn more about our history, values, and the team behind creating a reliable financial service since 2022.',
        storyTitle: 'Our History and Mission',
        storyText1: (
            <>
                Lama Cash has been successfully operating in the financial and cryptocurrency services market <strong>since 2022</strong>. We strive to make the crypto exchange process as transparent, fast, and secure as possible for every user.
            </>
        ),
        storyText2: 'Today, we are a trusted partner for thousands of clients, facilitating transactions across Ukraine and beyond. Our goal is to bridge the gap between traditional finance and digital assets.',
        amlTitle: 'AML Principles and Security',
        amlText: (
            <>
                We strictly adhere to international <strong>AML (Anti-Money Laundering)</strong> and KYC standards. Thanks to innovative technologies, every transaction undergoes multi-level verification, ensuring complete fund cleanliness and full legal safety for our clients.
            </>
        ),
        stats: [
            {label: 'Years on market', value: '5+'},
            {label: 'Successful trades', value: '100K+'},
            {label: 'Active clients', value: '50K+'},
            {label: 'Support', value: '24/7'},
        ],
        awardsTitle: 'Recognition and Awards',
        awardsText: (
            <>
                Our commitment to security has been recognized by industry experts. In 2025, our team received the prestigious{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 underline font-medium">
                    NcryptoAwards 2025
                </a> award.
            </>
        ),
        backToHome: 'Back to Home',
    },
};

export default async function AboutPage({params}: {params: Promise<{ locale: string }>}) {
    const {locale} = await params;
    setRequestLocale(locale);

    const content = aboutData[locale] || aboutData.uk;

    return (
        <main
            className="min-h-screen bg-gray-950 bg-linear-to-b from-gray-950 to-purple-950/40 py-12 px-4 md:px-8 flex flex-col justify-center text-white">
            <div className="w-full max-w-6xl mx-auto space-y-8 mt-8">

                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-200">
                        {content.title}
                    </h1>
                    <p className="text-gray-300 max-w-2xl text-lg">
                        {content.description}
                    </p>
                </div>

                <div className="bg-black/20 mb-10 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

                    <div
                        className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        <div className="space-y-8 text-gray-300 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">{content.storyTitle}</h2>
                                <p className="mb-4">
                                    {content.storyText1}
                                </p>
                                <p>
                                    {content.storyText2}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">{content.amlTitle}</h2>
                                <p>
                                    {content.amlText}
                                </p>
                            </section>
                        </div>

                        <div className="space-y-8">

                            <div className="grid grid-cols-2 gap-4">
                                {content.stats.map((stat, idx) => (
                                    <div key={idx}
                                         className="bg-purple-900/10 border border-purple-500/20 rounded-2xl p-6 text-center hover:bg-purple-900/30 transition-colors">
                                        <div className="text-3xl font-bold text-purple-400 mb-1">{stat.value}</div>
                                        <div
                                            className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-black/30 border border-purple-500/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{content.awardsTitle}</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    {content.awardsText}
                                </p>

                                <div
                                    className="relative w-full h-48 rounded-xl border border-purple-500/20 overflow-hidden">
                                    <Image
                                        src="/NCryptoAwards.jpg"
                                        alt="NcryptoAwards 2025"
                                        fill
                                        className="object-cover object-center hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div
                        className="mt-12 pt-8 border-t border-purple-500/20 flex justify-between items-center relative z-10">
                        <Link href={locale === 'uk' ? '/' : `/${locale}`}
                              className="group flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium">
                            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
                            {content.backToHome}
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
