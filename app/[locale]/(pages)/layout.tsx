import {Header} from "@/components/Header";
import React from "react";

export default async function LocaleLayout({
                                               children,
                                           }: Readonly<{
    children: React.ReactNode;
}>) {


    return <>
        <header className="w-full flex flex-col gap-4 bg-[linear-gradient(10.25deg,#351d59_-9.46%,#341c55_40.87%,#000000_93.06%)]">
            <Header/>
        </header>
        {children}
    </>
}
