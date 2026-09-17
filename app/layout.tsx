import {Rubik} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import {MicrosoftClarity} from "@/components/Clarity";
// import {GoogleAnalytics} from "@next/third-parties/google";
import {getLocale} from "next-intl/server";
import {GoogleTagManager} from "@next/third-parties/google";
// import Script from "next/script";

const rubikMono = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
});

const getVoip = localFont({
    src: "../fonts/GetVoIP-Grotesque.otf",
    variable: "--font-getvoip",
    weight: "400",
    style: "normal",
});

export default async function RootLayout({
                                             children
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();

    return (
        <html
            lang={locale}
            className={`${rubikMono.variable} ${getVoip.variable} h-full antialiased`}
        >
        {/*<head>*/}
        {/*    <Script*/}
        {/*        src="https://www.googletagmanager.com/gtag/js?id=AW-18403181154"*/}
        {/*        strategy="afterInteractive"*/}
        {/*    />*/}
        {/*    <Script id="google-ads-tag" strategy="afterInteractive">*/}
        {/*        {`*/}
        {/*          window.dataLayer = window.dataLayer || [];*/}
        {/*          function gtag(){dataLayer.push(arguments);}*/}
        {/*          gtag('js', new Date());*/}
        {/*          gtag('config', 'AW-18403181154');*/}
        {/*        `}*/}
        {/*    </Script>*/}
        {/*</head>*/}
        <body className="min-h-full flex flex-col font-rubik bg-[rgba(230,230,230,1)]">
        {children}
        <MicrosoftClarity/>
        {/*{process.env.NEXT_PUBLIC_GA_ID && (*/}
        {/*    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID}/>*/}
        {/*)}*/}
        {process.env.NEXT_PUBLIC_GTM_ID && (
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID}/>
        )}
        </body>
        </html>
    );
}

