import React from "react";
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
        uk: 'Юридична інформація',
        ru: 'Юридическая информация',
        en: 'Legal Information'
    };

    const descriptions: Record<string, string> = {
        uk: 'Юридична інформація та умови використання сервісу LAMA CASH — прозорість і безпека кожної угоди.',
        ru: 'Юридическая информация и условия использования сервиса LAMA CASH — прозрачность и безопасность каждой сделки.',
        en: 'Legal information and terms of use for the LAMA CASH service — transparency and security in every transaction.'
    };

    const title = titles[locale] || titles['uk'];
    const description = descriptions[locale] || descriptions['uk'];
    const canonical = locale === 'uk' ? 'https://lama-cash.com/legal' : `https://lama-cash.com/${locale}/legal`;

    return {
        title,
        description,
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

interface LegalContent {
    title: string;
    addressLabel: string;
    addressValue: string;
    emailLabel: string;
    phoneLabel: string;
}

const legalData: Record<string, LegalContent> = {
    uk: {
        title: 'Юридична інформація',
        addressLabel: 'Адреса',
        addressValue: 'Грецька площа, 3/4, Одеса, Одеська область, Україна, 65000',
        emailLabel: 'Email',
        phoneLabel: 'Телефон',
    },
    ru: {
        title: 'Юридическая информация',
        addressLabel: 'Адрес',
        addressValue: 'Греческая площадь, 3/4, Одесса, Одесская область, Украина, 65000',
        emailLabel: 'Email',
        phoneLabel: 'Телефон',
    },
    en: {
        title: 'Legal Information',
        addressLabel: 'Address',
        addressValue: 'Gretska Square, 3/4, Odesa, Odesa Oblast, Ukraine, 65000',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
    },
};

export default async function LegalPage({params}: {params: Promise<{ locale: string }>}) {
    const {locale} = await params;
    setRequestLocale(locale);

    const content = legalData[locale] || legalData.uk;

    return (
        <div className="flex flex-col w-full overflow-hidden">
            <div className="min-h-screen w-full bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)] py-10 px-4 md:px-8 font-sans">
                <div
                    className="max-w-3xl mx-auto bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl text-white/80">

                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">{content.title}</h1>

                    <div className="space-y-4 text-sm md:text-base leading-relaxed">
                        <p>
                            <strong className="text-white">{content.addressLabel}:</strong> {content.addressValue}
                        </p>
                        <p>
                            <strong className="text-white">{content.emailLabel}:</strong> <a href="mailto:supportlamacash@gmail.com"
                                                                                             className="text-[#5ce1e6] hover:underline">supportlamacash@gmail.com</a>
                        </p>
                        <p>
                            <strong className="text-white">{content.phoneLabel}:</strong> <a href="tel:+380935996385"
                                                                                             className="text-[#5ce1e6] hover:underline">+38
                            (093) 599 63 85</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
