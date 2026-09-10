import {Provider} from "@/components/Provider";
import {Footer} from "@/components/Footer";
import React from "react";

export default async function LocaleLayout({
                                               children,
                                           }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {

    return <>
        <Provider>
            <div className="flex flex-col w-full overflow-hidden min-h-screen">
                {children}
                <Footer/>
            </div>
        </Provider>
    </>
}
