'use client'
import * as React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import {ContactUs} from "@/components/ContactUs";


export const Home = () => {

    const t = useTranslations('HomePage');


    return (
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center px-4 py-4">
            <h1 className="text-4xl leading-tight text-white font-getvoip pt-10 max-sm:pt-9 text-center">
                Обмін,
                який
                не змушує чекати
            </h1>
            <div className="w-full h-full flex justify-center items-center">
                <Image
                    className="overflow-hidden bg-cover"
                    src="/earth-main.png"
                    width={750}
                    height={750}
                    alt="logo on main page"
                    priority
                />
            </div>
            <ContactUs text={'зв’язатись з нами'}/>

            <div className="flex flex-row gap-5 text-[rgba(158,158,158,1)] font-getvoip">
                <div className="flex flex-col gap-1.5 text-center">
                    <span className="font-bold uppercase max-sm:text-[22px] text-3xl">2025</span>
                    <span className="font-light max-sm:text-[9px] font-rubik text-sm max-w-40 max-sm:max-w-25">Найкращий сервіс криптообміну</span>
                </div>
                <div className="flex flex-col gap-1.5 text-center">
                    <span className="font-bold uppercase max-sm:text-[22px] text-3xl">300K+</span>
                    <span className="font-light max-sm:text-[9px] font-rubik text-sm max-w-40 max-sm:max-w-25">підписників у соціальних мераж</span>
                </div>
                <div className="flex flex-col gap-1.5 text-center">
                    <span className="font-bold uppercase max-sm:text-[22px] text-3xl">500+</span>
                    <span className="font-light max-sm:text-[9px] font-rubik text-sm max-w-40 max-sm:max-w-25">відгуків щасливих клієнтів</span>
                </div>
            </div>

            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                <a
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="dark:invert"
                        src="/vercel.svg"
                        alt="Vercel logomark"
                        width={16}
                        height={16}
                    />
                    Deploy Now
                </a>
                <a
                    className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Documentation
                </a>
            </div>
        </div>
    );
};