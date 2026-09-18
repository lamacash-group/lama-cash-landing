import React from "react";
import {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/app/i18n/routing";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{ locale: string }>}): Promise<Metadata> {
    const {locale} = await params;

    const titles: Record<string, string> = {
        uk: 'Юридична інформація',
        ru: 'Юридическая информация',
        en: 'Legal Information'
    };

    const descriptions: Record<string, string> = {
        uk: 'Юридична інформація та умови використання сервісу LAMA CASH — прозорість і безпека кожної угоди.',
        ru: 'Юридическая информация и условия использования сервиса LAMA CASH — прозрачность и безопасность каждой сделки.',
        en: 'Legal information and terms of use for the LAMA CASH service — transparency and security in every transaction.'
    };

    const canonical = locale === 'uk' ? 'https://lama-cash.com/legal' : `https://lama-cash.com/${locale}/legal`;

    return {
        title: titles[locale] || titles['uk'],
        description: descriptions[locale] || descriptions['uk'],
        alternates: {
            canonical,
            languages: {
                'uk': 'https://lama-cash.com/legal',
                'ru': 'https://lama-cash.com/ru/legal',
                'en': 'https://lama-cash.com/en/legal',
                'x-default': 'https://lama-cash.com/legal'
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

export default async function LegalPage({params}: {params: Promise<{ locale: string }>}) {
    const {locale} = await params;
    setRequestLocale(locale);

    return (
        <div className="flex flex-col w-ful overflow-hidden">

            <div className="min-h-screen w-full bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)] py-10 px-4 md:px-8 font-sans">
                <div
                    className="max-w-3xl mx-auto bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl text-white/80">

                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">Юридична інформація</h1>

                    <div className="space-y-4 text-sm md:text-base leading-relaxed">
                        <p>
                            <strong className="text-white">Адреса:</strong> Грецька площа, 3/4, Одеса, Одеська область,
                            Україна, 65000
                        </p>
                        <p>
                            <strong className="text-white">Email:</strong> <a href="mailto:supportlamacash@gmail.com"
                                                                              className="text-[#5ce1e6] hover:underline">supportlamacash@gmail.com</a>
                        </p>
                        <p>
                            <strong className="text-white">Телефон:</strong> <a href="tel:+380935996385"
                                                                                className="text-[#5ce1e6] hover:underline">+38
                            (093) 599 63 85</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}