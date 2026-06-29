'use client'
import * as React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import {ContactUs} from "@/components/ContactUs";
import {Reviews} from "@/components/Reviews";
import Link from "next/link";


export const Home = () => {

    const t = useTranslations('Header');

    return (
        <div className="w-full flex flex-col gap-10 max-sm:gap-10 justify-center items-center min-h-200 max-sm:h-dvh h-full overflow-hidden relative">
            <h1 className="text-4xl max-sm:text-[26px] leading-tight text-white font-getvoip max-[500px]:max-w-87.5 font-bold uppercase pt-10 max-sm:pt-9 text-center px-4">
                {t('title')}
            </h1>
            <div className="w-full h-full flex justify-center relative">
                <div className="absolute left-1/2 -translate-x-1/2 w-[160vw] xl:w-full max-w-none z-10 px-4"
                     style={{top: '30%'}}>
                    <Image
                        className="overflow-hidden w-full h-auto"
                        src="/earth-main.png"
                        width={2000}
                        height={2000}
                        alt="earth on main page background"
                        priority
                    />
                </div>
                <div className="absolute bg-[linear-gradient(180deg,rgba(23,23,23,0)_0%,rgba(25,25,25,0.9)_40.52%,#0D0D0D_70.85%)]
                sm:bg-[linear-gradient(180deg,rgba(23,23,23,0)_0%,rgba(25,25,25,0.9)_50%,#0D0D0D_80%)] bottom-0
                 w-full h-125 z-60"></div>
                <div className="relative flex flex-col gap-1 items-center justify-center max-sm:justify-start w-full px-4">

                    <div className="relative w-full max-w-95 max-sm:max-w-85 flex justify-center">
                        <Image
                            className="object-contain object-bottom h-full z-30 w-full max-w-87.5 max-[500px]:max-w-70! max-sm:max-w-75 max-h-full"
                            src="/lama-main.png"
                            width={1000}
                            height={1000}
                            alt="lama main page"
                            priority
                        />

                        <div className="absolute bottom-4 max-sm:bottom-8 left-1/2 z-70 -translate-x-1/2 flex flex-col w-full items-center gap-3">
                            <div
                                className="p-px rounded-[15px] w-full max-w-full"
                                style={{
                                    background: 'linear-gradient(270deg, #41B4F2 0%, #7134C2 35.58%, #FCFAFF 62.98%, #41B4F2 87.5%, #7134C2 100%)',
                                }}
                            >
                                <Link href="https://t.me/lama_cash">
                                    <ContactUs text= {t('buttonContactUs')} buttonClass="max-w-full rounded-[15px]"/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full h-full items-center justify-center relative max-sm:justify-center max-sm:h-25 pb-11 max-sm:pb-0 max-sm:flex-1">
                        <div className="flex flex-row gap-2 items-center pb-10 z-70 max-sm:absolute max-sm:bottom-full max-sm:p-0">
                            <Reviews/>
                            <span className="font-rubik font-light text-base max-sm:text-[9px] text-white">
                            <span className="font-bold">
                                400 000+
                            </span>
                                {"\u00A0"}
                                {t('reviewsTitle')}
                        </span>
                        </div>
                        <div className="flex flex-row gap-5 text-[rgba(158,158,158,1)] font-getvoip z-70">
                            <div className="flex flex-col gap-1.5 text-center">
                                <span className="font-bold uppercase max-sm:text-[22px] text-3xl">2025</span>
                                <span className="font-light max-sm:text-[9px] font-rubik text-sm max-w-40 max-sm:max-w-25">{t('yearsAchieve')}</span>
                            </div>
                            <div className="flex flex-col gap-1.5 text-center">
                                <span className="font-bold uppercase max-sm:text-[22px] text-3xl">300K+</span>
                                <span className="font-light max-sm:text-[9px] font-rubik text-sm max-w-40 max-sm:max-w-25">{t('socialCount')}</span>
                            </div>
                            <div className="flex flex-col gap-1.5 text-center">
                                <span className="font-bold uppercase max-sm:text-[22px] text-3xl">500+</span>
                                <span className="font-light max-sm:text-[9px] font-rubik text-sm max-w-40 max-sm:max-w-25">{t('reviewsClient')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};