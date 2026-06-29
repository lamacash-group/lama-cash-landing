import * as React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useTranslations} from "next-intl";


export const LamaCashMedia = () => {
    const t = useTranslations('LamaMedia');


    return (
        <div
            className="flex flex-col w-full h-full bg-[rgba(23,23,23,1)] gap-15 px-10 py-10 max-[380px]:px-6 max-[380px]:gap-10 pb-[7vh]">
            <div className="w-full text-center text-5xl font-getvoip font-bold uppercase max-sm:text-lg tracking-[3%]">
                <span className="bg-[linear-gradient(90deg,#F0E5FF_0%,#C89EFF_29.81%,#AC71FA_62.98%,#E5D2FF_87.5%,#7134C2_100%)] bg-clip-text text-transparent">
                    {t('title')}
                </span>
            </div>
            <div className="grid grid-cols-2 gap-11 sm:gap-y-20 justify-items-center px-4">
                <div className="flex flex-col gap-4 max-w-sm">
                    <div className="relative w-full h-full mx-auto flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-[-0.75rem_-0.75rem_0.75rem_-0.75rem] bg-[rgba(60,21,127,1)] rounded-[2.5rem] blur-xs z-10"></div>
                        <div
                            className="absolute -inset-4 bg-[linear-gradient(180deg,#17171700_50%,#171717_87.13%)] z-30"></div>
                        <Image
                            src={'/lama-media1.png'}
                            alt={"lama cash social media - tik tok"}
                            width={900}
                            height={1200}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="w-full h-auto object-cover relative z-20"
                        />
                        <div
                            className="flex flex-row gap-2 text-white absolute inset-0 z-40 items-end justify-center w-full h-full">
                            <div className="flex items-center gap-2">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                     className="w-7.5 h-7.5 max-sm:w-3.75 max-sm:h-3.75"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.24918" cy="3.53433" r="3.53433" fill="white"/>
                                    <path
                                        d="M7.24902 7.06836C10.8881 7.06836 13.908 9.71163 14.498 13.1826H0C0.590002 9.71167 3.61004 7.06848 7.24902 7.06836Z"
                                        fill="white"/>
                                </svg>
                                <span className="font-bold font-getvoip text-3xl max-sm:text-base">
                                275 000+
                            </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-px rounded-[6px] bg-[linear-gradient(270deg,#41B4F2_0%,#7134C2_35.58%,#FCFAFF_62.98%,#41B4F2_87.5%,#7134C2_100%)]">

                        <Link href="https://www.tiktok.com/@lama.cash" className="w-full items-center justify-center flex">
                            <Button
                                className="w-full max-sm:h-7.5 h-15 flex items-center justify-center rounded-[6px] text-[rgba(23,23,23,1)] font-bold text-base font-getvoip tracking-[3%] max-sm:text-[9px] bg-white uppercase">
                                <div className="flex items-center gap-1">
                            <span>
                                tik tok
                            </span>
                                    <span
                                        className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-[rgba(23,23,23,1)] rounded-full flex items-center justify-center">
                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="w-4! h-4! max-sm:w-2! max-sm:h-2!">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.01454 3.35227C2.99682 3.35227 2.97905 3.35227 2.96133 3.35227V4.45166C2.83719 4.41617 2.73082 4.39846 2.60668 4.39846C1.93286 4.39846 1.40086 4.93046 1.40086 5.58656C1.40086 6.02986 1.66686 6.43772 2.03923 6.63275C1.89737 6.43767 1.82644 6.18944 1.82644 5.94116C1.82644 5.28506 2.3584 4.75312 3.01454 4.75312C3.13868 4.75312 3.26277 4.77083 3.36919 4.80632V3.38772C3.26282 3.37004 3.13868 3.35227 3.01454 3.35227ZM1.11719 7.69675C1.59598 8.19326 2.26979 8.51242 3.01454 8.51242C4.45087 8.51242 5.6212 7.35981 5.6212 5.9412V3.03311C6.1532 3.5119 6.84473 3.74241 7.55404 3.6892V2.28831C7.41218 2.3238 7.27032 2.3238 7.14618 2.28831V3.3345C6.43687 3.38771 5.72757 3.1572 5.19561 2.6784V5.58651C5.19561 7.00512 4.04301 8.15772 2.60668 8.15772C2.057 8.15777 1.54277 7.98047 1.11719 7.69675ZM6.13548 1.70316C5.79855 1.33078 5.60352 0.834261 5.62124 0.355469H5.23115C5.31975 0.887471 5.67441 1.41943 6.13548 1.70316Z"
                                  fill="#FF2E56"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2.60666 2.99674C1.17033 2.99674 0 4.14936 0 5.58569C0 6.45457 0.443303 7.23481 1.11717 7.69583C0.691583 7.23481 0.425583 6.61415 0.425583 5.94033C0.425583 4.53949 1.54275 3.38689 2.96131 3.3514V3.03219C2.83717 3.01452 2.7308 2.99674 2.60666 2.99674ZM7.14616 2.28744V1.93279C6.7915 2.00372 6.43685 1.89731 6.13541 1.70228C6.41913 2.0215 6.75606 2.23428 7.14616 2.28744ZM5.23103 0.354645C5.21331 0.230504 5.19559 0.12414 5.19559 0H3.79471V3.29823V5.58573C3.79471 6.24183 3.26275 6.77383 2.60666 6.77383C2.39387 6.77383 2.21652 6.72062 2.03921 6.63197C2.26973 6.93341 2.62438 7.12848 3.01447 7.12848C3.68829 7.12848 4.22029 6.59652 4.22029 5.94038V3.65289V0.354645H5.23103Z"
                                  fill="#23F1E7"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M1.11732 7.6967C1.5429 7.98042 2.05713 8.15772 2.60685 8.15772C4.04318 8.15772 5.19579 7.00512 5.19579 5.58651V2.6784C5.72775 3.1572 6.43705 3.38771 7.14635 3.3345V2.28831C6.75621 2.2351 6.41933 2.02232 6.13561 1.70316C5.67458 1.41943 5.31993 0.887471 5.23123 0.355469H4.22049V3.65371V5.9412C4.22049 6.5973 3.68853 7.1293 3.01467 7.1293C2.62458 7.1293 2.26992 6.93423 2.03941 6.63279C1.66704 6.43772 1.40104 6.02991 1.40104 5.5866C1.40104 4.93051 1.93299 4.39851 2.60685 4.39851C2.73099 4.39851 2.83737 4.41623 2.96151 4.45172V3.35232C1.5429 3.38781 0.425781 4.54042 0.425781 5.94126C0.425734 6.61503 0.691735 7.23563 1.11732 7.6967Z"
                                  fill="white"/>
                            </svg>
                            </span>
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 max-w-sm">
                    <div className="relative w-full h-full mx-auto flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-[-0.75rem_-0.75rem_0.75rem_-0.75rem] bg-[rgba(60,21,127,1)] rounded-[2.5rem] blur-xs z-10"></div>
                        <div
                            className="absolute -inset-4 bg-[linear-gradient(180deg,#17171700_50%,#171717_87.13%)] z-30"></div>
                        <Image
                            src={'/lama-media2.png'}
                            alt={"lama cash social media - tik tok number two"}
                            width={900}
                            height={1200}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="w-full h-auto object-cover relative z-20"
                        />
                        <div
                            className="flex flex-row gap-2 text-white absolute inset-0 z-40 items-end justify-center w-full h-full">
                            <div className="flex items-center gap-2">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                     className="w-7.5 h-7.5 max-sm:w-3.75 max-sm:h-3.75"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.24918" cy="3.53433" r="3.53433" fill="white"/>
                                    <path
                                        d="M7.24902 7.06836C10.8881 7.06836 13.908 9.71163 14.498 13.1826H0C0.590002 9.71167 3.61004 7.06848 7.24902 7.06836Z"
                                        fill="white"/>
                                </svg>
                                <span className="font-bold font-getvoip text-3xl max-sm:text-base">
                                98 000 +
                            </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-px rounded-[6px] bg-[linear-gradient(270deg,#FF2E56_0%,#23F1E7_35.58%,#FCFAFF_62.98%,#23F1E7_87.5%,#FD3058_100%)]">
                        <Link href="https://www.tiktok.com/@lama.change" className="w-full items-center justify-center flex">
                        <Button
                            className="w-full max-sm:h-7.5 h-15 flex items-center justify-center rounded-[6px] text-[rgba(23,23,23,1)] font-bold text-base font-getvoip tracking-[3%] max-sm:text-[9px] bg-white uppercase">
                            <div className="flex items-center gap-1">
                            <span>
                                tik tok
                            </span>
                                <span
                                    className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-[rgba(23,23,23,1)] rounded-full flex items-center justify-center">
                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="w-4! h-4! max-sm:w-2! max-sm:h-2!">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.01454 3.35227C2.99682 3.35227 2.97905 3.35227 2.96133 3.35227V4.45166C2.83719 4.41617 2.73082 4.39846 2.60668 4.39846C1.93286 4.39846 1.40086 4.93046 1.40086 5.58656C1.40086 6.02986 1.66686 6.43772 2.03923 6.63275C1.89737 6.43767 1.82644 6.18944 1.82644 5.94116C1.82644 5.28506 2.3584 4.75312 3.01454 4.75312C3.13868 4.75312 3.26277 4.77083 3.36919 4.80632V3.38772C3.26282 3.37004 3.13868 3.35227 3.01454 3.35227ZM1.11719 7.69675C1.59598 8.19326 2.26979 8.51242 3.01454 8.51242C4.45087 8.51242 5.6212 7.35981 5.6212 5.9412V3.03311C6.1532 3.5119 6.84473 3.74241 7.55404 3.6892V2.28831C7.41218 2.3238 7.27032 2.3238 7.14618 2.28831V3.3345C6.43687 3.38771 5.72757 3.1572 5.19561 2.6784V5.58651C5.19561 7.00512 4.04301 8.15772 2.60668 8.15772C2.057 8.15777 1.54277 7.98047 1.11719 7.69675ZM6.13548 1.70316C5.79855 1.33078 5.60352 0.834261 5.62124 0.355469H5.23115C5.31975 0.887471 5.67441 1.41943 6.13548 1.70316Z"
                                  fill="#FF2E56"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2.60666 2.99674C1.17033 2.99674 0 4.14936 0 5.58569C0 6.45457 0.443303 7.23481 1.11717 7.69583C0.691583 7.23481 0.425583 6.61415 0.425583 5.94033C0.425583 4.53949 1.54275 3.38689 2.96131 3.3514V3.03219C2.83717 3.01452 2.7308 2.99674 2.60666 2.99674ZM7.14616 2.28744V1.93279C6.7915 2.00372 6.43685 1.89731 6.13541 1.70228C6.41913 2.0215 6.75606 2.23428 7.14616 2.28744ZM5.23103 0.354645C5.21331 0.230504 5.19559 0.12414 5.19559 0H3.79471V3.29823V5.58573C3.79471 6.24183 3.26275 6.77383 2.60666 6.77383C2.39387 6.77383 2.21652 6.72062 2.03921 6.63197C2.26973 6.93341 2.62438 7.12848 3.01447 7.12848C3.68829 7.12848 4.22029 6.59652 4.22029 5.94038V3.65289V0.354645H5.23103Z"
                                  fill="#23F1E7"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M1.11732 7.6967C1.5429 7.98042 2.05713 8.15772 2.60685 8.15772C4.04318 8.15772 5.19579 7.00512 5.19579 5.58651V2.6784C5.72775 3.1572 6.43705 3.38771 7.14635 3.3345V2.28831C6.75621 2.2351 6.41933 2.02232 6.13561 1.70316C5.67458 1.41943 5.31993 0.887471 5.23123 0.355469H4.22049V3.65371V5.9412C4.22049 6.5973 3.68853 7.1293 3.01467 7.1293C2.62458 7.1293 2.26992 6.93423 2.03941 6.63279C1.66704 6.43772 1.40104 6.02991 1.40104 5.5866C1.40104 4.93051 1.93299 4.39851 2.60685 4.39851C2.73099 4.39851 2.83737 4.41623 2.96151 4.45172V3.35232C1.5429 3.38781 0.425781 4.54042 0.425781 5.94126C0.425734 6.61503 0.691735 7.23563 1.11732 7.6967Z"
                                  fill="white"/>
                            </svg>
                            </span>
                            </div>
                        </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 max-w-sm">
                    <div className="relative w-full h-full mx-auto flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-[-0.75rem_-0.75rem_0.75rem_-0.75rem] bg-[rgba(60,21,127,1)] rounded-[2.5rem] blur-xs z-10"></div>
                        <div
                            className="absolute -inset-4 bg-[linear-gradient(180deg,#17171700_50%,#171717_87.13%)] z-30"></div>
                        <Image
                            src={'/lama-media3.png'}
                            alt={"lama cash social media - instagram"}
                            width={900}
                            height={1200}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="w-full h-auto object-cover relative z-20"
                        />
                        <div
                            className="flex flex-row gap-2 text-white absolute inset-0 z-40 items-end justify-center w-full h-full">
                            <div className="flex items-center gap-2">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                     className="w-7.5 h-7.5 max-sm:w-3.75 max-sm:h-3.75"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.24918" cy="3.53433" r="3.53433" fill="white"/>
                                    <path
                                        d="M7.24902 7.06836C10.8881 7.06836 13.908 9.71163 14.498 13.1826H0C0.590002 9.71167 3.61004 7.06848 7.24902 7.06836Z"
                                        fill="white"/>
                                </svg>
                                <span className="font-bold font-getvoip text-3xl max-sm:text-base">
                                65 000 +
                            </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-px rounded-[6px] bg-[linear-gradient(90deg,#188AFC_0%,#BF3CD5_39.9%,#D240B4_68.75%,#FCCC0A_100%)]">
                        <Link href="https://www.instagram.com/lama_cash" className="w-full items-center justify-center flex">
                        <Button
                            className="w-full max-sm:h-7.5 h-15 flex items-center justify-center rounded-[6px] text-[rgba(23,23,23,1)] font-bold text-base font-getvoip tracking-[3%] max-sm:text-[9px] bg-white uppercase">
                            <div className="flex items-center gap-1">
                            <span>
                                INSTAGRAM
                            </span>
                                <span
                                    className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-[rgba(23,23,23,1)] rounded-full flex items-center justify-center">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="w-4! h-4! max-sm:w-2! max-sm:h-2!">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M2.15127 0H5.82553C7.00588 0 7.9768 0.970924 7.9768 2.15127V5.80652C7.9768 6.98687 7.00588 7.95779 5.82553 7.95779H2.15127C0.970922 7.95779 0 6.98687 0 5.80652V2.15127C0 0.970924 0.970922 0 2.15127 0ZM6.13015 1.38978C6.37764 1.38978 6.58707 1.59921 6.58707 1.8467C6.58707 2.09419 6.37764 2.30363 6.13015 2.30363C5.86364 2.30363 5.67322 2.09419 5.67322 1.8467C5.67322 1.59916 5.8636 1.38978 6.13015 1.38978ZM3.97887 1.80859H3.99793C5.17828 1.80859 6.16821 2.79857 6.16821 3.97888C6.16821 5.17824 5.17823 6.14916 3.99793 6.14916H3.97887C2.79852 6.14916 1.8276 5.17824 1.8276 3.97888C1.8276 2.79857 2.79852 1.80859 3.97887 1.80859ZM3.97887 2.55107H3.99793C4.77848 2.55107 5.42577 3.19837 5.42577 3.97892C5.42577 4.77852 4.77848 5.42577 3.99793 5.42577H3.97887C3.19833 5.42577 2.55103 4.77848 2.55103 3.97892C2.55107 3.19837 3.19833 2.55107 3.97887 2.55107ZM2.17028 0.685361H5.80648C6.62509 0.685361 7.29144 1.35167 7.29144 2.17033V5.78751C7.29144 6.60612 6.62513 7.27243 5.80648 7.27243H2.17028C1.35167 7.27243 0.685361 6.60612 0.685361 5.78751V2.17033C0.685361 1.35167 1.35167 0.685361 2.17028 0.685361Z"
                                      fill="url(#paint0_linear_2091_529)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_2091_529" x1="0.291684" y1="0.666569" x2="7.65799"
                                                    y2="7.3268" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0496FB"/>
                                        <stop offset="0.1383" stopColor="#3F72FF"/>
                                        <stop offset="0.2795" stopColor="#784AFF"/>
                                        <stop offset="0.4211" stopColor="#B038EE"/>
                                        <stop offset="0.5656" stopColor="#CD40BE"/>
                                        <stop offset="0.7198" stopColor="#FF415A"/>
                                        <stop offset="0.8647" stopColor="#F7941E"/>
                                        <stop offset="0.9807" stopColor="#FFE800"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            </span>
                            </div>
                        </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 max-w-sm">
                    <div className="relative w-full h-full mx-auto flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-[-0.75rem_-0.75rem_0.75rem_-0.75rem] bg-[rgba(60,21,127,1)] rounded-[2.5rem] blur-xs z-10"></div>
                        <div
                            className="absolute -inset-4 bg-[linear-gradient(180deg,#17171700_50%,#171717_87.13%)] z-30"></div>
                        <Image
                            src={'/lama-media4.png'}
                            alt={"lama cash social media - YouTube"}
                            width={900}
                            height={1200}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="w-full h-auto object-cover relative z-20"
                        />
                        <div
                            className="flex flex-row gap-2 text-white absolute inset-0 z-40 items-end justify-center w-full h-full">
                            <div className="flex items-center gap-2">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                     className="w-7.5 h-7.5 max-sm:w-3.75 max-sm:h-3.75"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.24918" cy="3.53433" r="3.53433" fill="white"/>
                                    <path
                                        d="M7.24902 7.06836C10.8881 7.06836 13.908 9.71163 14.498 13.1826H0C0.590002 9.71167 3.61004 7.06848 7.24902 7.06836Z"
                                        fill="white"/>
                                </svg>
                                <span className="font-bold font-getvoip text-3xl max-sm:text-base">
                                    23 000 +
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-px rounded-[6px] bg-[linear-gradient(90deg,#FE0000_0%,#610000_47.6%,#FE0000_100%)]">
                        <Link href="https://youtube.com/@lama_cash?si=COXy_OKci7oiECin" className="w-full items-center justify-center flex">
                        <Button
                            className="w-full max-sm:h-7.5 h-15 flex items-center justify-center rounded-[6px] text-[rgba(23,23,23,1)] font-bold text-base font-getvoip tracking-[3%] max-sm:text-[9px] bg-white uppercase">
                            <div className="flex items-center gap-1">
                            <span>
                                You tube
                            </span>
                                <span
                                    className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-[rgba(23,23,23,1)] rounded-full flex items-center justify-center">
                                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                         className="w-4! h-4! max-sm:w-2! max-sm:h-2!">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M1.74208 0.101471C2.58776 0.0338243 3.58568 0 4.34678 0C5.10788 0 6.08886 0.0338243 6.95143 0.101471C7.94929 0.186054 8.4567 0.35517 8.59204 1.35308C8.65969 1.80973 8.69351 2.43554 8.69351 3.07828C8.69351 3.72097 8.65969 4.36371 8.59204 4.80347C8.45674 5.81827 7.94934 5.9705 6.95143 6.05503C6.08886 6.13962 5.10788 6.15651 4.34678 6.15651C3.58568 6.15651 2.58776 6.13957 1.74208 6.05503C0.744214 5.97045 0.219877 5.81827 0.0845835 4.80347C0.0338238 4.36371 0 3.72102 0 3.07828C0 2.43559 0.0338238 1.80977 0.0845835 1.35308C0.219877 0.35517 0.744214 0.186054 1.74208 0.101471Z"
                                      fill="#FE0000"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M3.46777 1.77539L5.73419 3.07771L3.46777 4.39698V1.77539Z" fill="#171717"/>
                                    </svg>



                            </span>
                            </div>
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};