import * as React from 'react';
import {useTranslations} from "next-intl";
import {ContactUs} from "@/components/ContactUs";
import {Reviews} from "@/components/Reviews";
import Link from "next/link";
import Image from "next/image";
import Calculator from "@/components/Rates/Calculator";

export const Home = () => {

    const t = useTranslations('Header');

    return (
        <div className="w-full flex flex-col gap-8 max-sm:gap-10 justify-center items-center min-h-200 h-full overflow-hidden relative" id="main">
            <h1 className="text-4xl max-sm:text-[26px] leading-tight text-white font-getvoip max-[500px]:max-w-87.5 font-bold uppercase pt-10 max-sm:pt-9 text-center px-4">
                {t('title')}
            </h1>

            <div className="w-full h-full flex justify-center relative">
                {/* Background Earth */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 w-[160vw] xl:w-full max-w-none z-10 px-4 pointer-events-none"
                    style={{top: '30%'}}
                >
                    <div className="relative w-full">
                        <Image
                            src="/earth-main.png"
                            width={800}
                            height={800}
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 800px"
                            alt="earth on main page background"
                            priority
                            className="overflow-hidden w-full h-auto relative z-10"
                        />
                    </div>
                </div>

                {/* Content Grid */}
                <div className="relative z-70 w-full max-w-7xl px-4 pb-8 flex flex-col lg:flex-row lg:items-start items-center justify-center gap-10 lg:gap-14">
                    {/* Left Column: Lama + ContactUs + Reviews + Stats */}
                    <div className="relative flex flex-col gap-4 items-center justify-center max-sm:justify-start w-full max-w-md lg:max-w-lg">
                        <div className="relative w-full max-w-95 max-sm:max-w-85 flex justify-center">
                            <Image
                                src="/lama-main.png"
                                width={350}
                                height={400}
                                sizes="(max-width: 640px) 280px, 350px"
                                alt="lama main page"
                                fetchPriority="high"
                                priority
                                className="object-contain object-bottom h-full z-30 w-full max-w-87.5 max-[500px]:max-w-70! max-sm:max-w-75 max-h-full mx-2.5"
                            />

                            <div className="absolute bottom-4 max-sm:bottom-8 left-1/2 z-70 -translate-x-1/2 flex flex-col w-full items-center gap-3">
                                <div
                                    className="p-px rounded-[15px] w-full max-w-full"
                                    style={{
                                        background: 'linear-gradient(270deg, #41B4F2 0%, #7134C2 35.58%, #FCFAFF 62.98%, #41B4F2 87.5%, #7134C2 100%)',
                                    }}
                                >
                                    <Link href="https://t.me/lama_cash" target="_blank" rel="noopener" data-event="click_tg_main">
                                        <ContactUs text={t('buttonContactUs')} buttonClass="max-w-full rounded-[15px]"/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full items-center justify-center relative pb-2 sm:pb-6 gap-6">
                            <div className="flex flex-row gap-2 items-center">
                                <Reviews/>
                                <span className="font-rubik font-light text-base max-sm:text-[11px] text-white">
                                    <span className="font-bold">
                                        400 000+
                                    </span>
                                    {"\u00A0"}
                                    {t('reviewsTitle')}
                                </span>
                            </div>
                            <div className="flex flex-row gap-5 text-[rgba(158,158,158,1)] font-getvoip">
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

                    {/* Right Column: Calculator */}
                    <div className="relative w-full max-w-md lg:max-w-120 shrink-0 max-md:px-8 mt-4 max-md:py-8 max-sm:p-0">
                        <div className="absolute -inset-6 rounded-full bg-[#b088f4]/20 blur-3xl -z-10 pointer-events-none" />
                        <Calculator sourcePage="home" />
                    </div>
                </div>

                <div className="absolute bg-[linear-gradient(180deg,rgba(23,23,23,0)_0%,rgba(25,25,25,0.9)_40.52%,#0D0D0D_70.85%)]
                sm:bg-[linear-gradient(180deg,rgba(23,23,23,0)_0%,rgba(25,25,25,0.9)_50%,#0D0D0D_80%)] bottom-0
                 w-full h-125 z-60 pointer-events-none"></div>
            </div>
        </div>
    );
};
