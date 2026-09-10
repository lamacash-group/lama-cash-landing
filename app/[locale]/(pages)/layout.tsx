import {Provider} from "@/components/Provider";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import React from "react";

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {


    return <>
        <Provider>
            <div className="flex flex-col w-full overflow-hidden min-h-screen">

                <main className="flex-1 flex flex-col">
                    {children}
                </main>
                <Footer/>
            </div>
        </Provider>
    </>
}
