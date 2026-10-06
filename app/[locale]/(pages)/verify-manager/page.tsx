import React from "react";
import {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/app/i18n/routing";
import VerifyManager from "@/components/VerifyManager";

type Props = {
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;

    const titles: Record<string, string> = {
        uk: "Перевірка менеджера Telegram",
        ru: "Проверка менеджера Telegram",
        en: "Verify Telegram Manager",
    };

    const descriptions: Record<string, string> = {
        uk: "Перевірте справжність менеджера LAMA CASH у Telegram. Захистіть себе від шахраїв та фейкових акаунтів.",
        ru: "Проверьте подлинность менеджера LAMA CASH в Telegram. Защитите себя от мошенников и фейковых аккаунтов.",
        en: "Verify the authenticity of the LAMA CASH Telegram manager. Protect yourself from scammers and fake accounts.",
    };

    const canonical = `https://lama-cash.com/${locale}/verify-manager`;

    return {
        title: titles[locale] || titles["uk"],
        description: descriptions[locale] || descriptions["uk"],
        alternates: {
            canonical,
            languages: {
                uk: "https://lama-cash.com/uk/verify-manager",
                ru: "https://lama-cash.com/ru/verify-manager",
                en: "https://lama-cash.com/en/verify-manager",
                "x-default": "https://lama-cash.com/uk/verify-manager",
            },
        },
        openGraph: {
            title: titles[locale] || titles["uk"],
            description: descriptions[locale] || descriptions["uk"],
            url: canonical,
        },
        twitter: {
            card: "summary_large_image",
            title: titles[locale] || titles["uk"],
            description: descriptions[locale] || descriptions["uk"],
        },
    };
}

export default async function VerifyManagerPage({params}: Props) {
    const {locale} = await params;
    setRequestLocale(locale);

    return <VerifyManager/>;
}
