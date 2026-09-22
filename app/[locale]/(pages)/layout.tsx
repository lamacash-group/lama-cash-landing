import {Header} from "@/components/Header";
import React from "react";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/app/i18n/routing";
import {BinanceLine} from "@/components/BinanceLine";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: Readonly<{
    children: React.ReactNode,
    params: Promise<{ locale: string }>
}>) {
    const {locale} = await params;
    setRequestLocale(locale);

    return <>
        <header className="w-full flex flex-col gap-4 bg-[linear-gradient(10.25deg,#351d59_-9.46%,#341c55_40.87%,#000000_93.06%)]">
            <Header/>
            <BinanceLine/>
        </header>
        {children}
    </>
}
