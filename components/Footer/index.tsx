import * as React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {BackToTop} from "@/components/BackToTop";
import {useTranslations} from "next-intl";


export const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="w-full h-full min-h-50 bg-[rgba(23,23,23,1)] py-10 relative bg-[linear-gradient(90deg,rgba(113,52,194,1)_-40%,rgba(23,23,23,1)_40%)]">
            {/*<div className="absolute top-0 left-0 w-full md:w-[60%] h-full bg-[radial-gradient(50%_50%_at_50%_50%,#7134C2_0%,#171717_100%)] -z-10 pointer-events-none"></div>*/}
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-20 max-sm:gap-10 justify-center items-center px-9">
                    <div className="flex flex-col w-full justify-center items-center text-center font-rubik text-[rgba(240,240,240,1)] gap-1 max-w-75">
                        <span className="font-bold max-sm:font-normal text-base max-sm:text-[9px]">
                           {t('supportTitle')}
                        </span>
                        <span className="font-light max-sm:font-normal text-base max-sm:text-[8px] max-sm:max-w-37">
                            {t('supportDesc')}
                        </span>
                        <Link href="https://t.me/lama_cash_manager" className="w-full items-center justify-center flex mt-4 min-h-6 min-w-6">
                        <Button
                            className="bg-[rgba(65,180,242,1)] flex flex-row gap-2.5 max-w-100 w-full max-sm:max-w-35 min-h-7.5 h-full rounded-[6px] px-2 py-1"
                        >
                            <span>
                                <svg width="20" height="17" viewBox="0 0 20 17" className="sm:w-7.5! sm:h-7.5!" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.3039 0.145931C15.6653 1.23889 4.35212 5.92491 1.22617 7.20206C-0.870219 8.02006 0.356958 8.78703 0.356958 8.78703C0.356958 8.78703 2.14659 9.40088 3.68051 9.86074C5.21462 10.3211 6.03245 9.8097 6.03245 9.8097L13.2417 4.95221C15.7985 3.21378 15.185 4.64564 14.5711 5.25914C13.2417 6.58856 11.0429 8.68477 9.20255 10.3722C8.38437 11.0881 8.79355 11.7016 9.15151 12.0083C10.4806 13.1334 14.1114 15.4342 14.3156 15.5878C15.3955 16.3525 17.5203 17.4532 17.8435 15.1274L19.1217 7.09999C19.531 4.3901 19.94 1.88489 19.9909 1.16896C20.1445 -0.569819 18.3039 0.145931 18.3039 0.145931Z"
                                        fill="white"/>
                                </svg>

                            </span>
                            <div className="flex flex-col text-center">
                                <span className="font-bold max-sm:font-normal uppercase text-base max-sm:text-[9px] text-white">
                                   {t('telegramBtnTitle')}
                                </span>
                                <span className="font-light max-sm:font-normal text-base max-sm:text-[8px] text-[rgba(178,227,253,1)]">
                                    {t('telegramBtnDesc')}
                                </span>
                            </div>
                        </Button>
                        </Link>
                    </div>
                    <div className="relative w-full max-w-87.5 h-full flex flex-col justify-center items-center -mt-25 max-md:-mt-18 z-20">
                        <Image
                            src={'/lama-footer.png'}
                            alt={"lama cash footer telegram link"}
                            width={1200}
                            height={1250}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="w-full h-auto object-cover relative z-20"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[linear-gradient(180deg,rgba(23,23,23,0)_0%,rgba(23,23,23,1)_100%)] z-30 pointer-events-none"></div>
                    </div>
                </div>
                <div className="flex flex-row relative items-center justify-center max-sm:justify-start px-10 gap-9">
                    <Image src="/lama-logo.svg"
                           alt="lama cash logo footer"
                           className="w-60 h-auto max-sm:w-16"
                           width={104} height={14} />
                    <div className="flex flex-row gap-7">
                        <Link href="https://t.me/lama_cash" aria-label="Telegram" className="items-center justify-center flex">
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" className="sm:w-7.5 sm:h-7.5" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.946273 5.65052C4.45992 4.17712 8.71016 2.08026 12.3939 0.663481C15.7941 -0.583255 15.7375 -0.243262 15.2274 3.15695C14.8307 5.87718 14.3774 8.59732 13.924 11.3176C13.7539 12.6211 13.0739 13.3011 11.6572 12.5077L7.23677 9.39082C6.6134 8.88079 6.78344 8.48408 7.29348 7.97404L11.3738 4.12041C12.4506 3.04372 11.9404 2.64702 10.6937 3.49705L5.08329 7.29395C4.28987 7.8607 3.43984 7.86072 2.5331 7.57735L0.60628 6.89726C-0.640456 6.44393 0.322905 5.9339 0.946273 5.65052Z" fill="white"/>
                            </svg>
                        </Link>
                        <Link href="https://www.tiktok.com/@lama.change" aria-label="TikTok" className="items-center justify-center flex">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="sm:w-7.5 sm:h-7.5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.66167 2.60879C9.05282 1.90091 8.73381 0.986183 8.75907 0.0548521L6.48357 0V0.227925V9.73855C5.87096 12.4686 1.91988 11.7562 2.3154 8.97856C2.5361 7.70975 3.89918 6.92912 5.11069 7.37039V5.0487C2.47331 4.58953 -0.026066 6.68863 0.000205288 9.36296C0.230728 15.1627 8.54933 15.1636 8.78014 9.36296C8.72197 9.15539 8.75445 5.29034 8.74622 4.9644C9.78091 5.60819 10.9848 5.92994 12.2039 5.88895V3.49105C11.0769 3.49105 10.2167 3.19138 9.66167 2.60879Z" fill="white"/>
                        </svg>
                        </Link>
                        <Link href="https://www.instagram.com/lama_cash" aria-label="Insagram" className="items-center justify-center flex">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="sm:w-7.5 sm:h-7.5" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.70271 0H10.0268C12.0583 0 13.7295 1.67113 13.7295 3.70272V9.99403C13.7295 12.0256 12.0583 13.6967 10.0268 13.6967H3.70271C1.67113 13.6967 0 12.0256 0 9.99403V3.70272C0 1.67113 1.67113 0 3.70271 0ZM10.551 2.39205C10.977 2.39205 11.3375 2.75251 11.3375 3.17849C11.3375 3.60447 10.977 3.96494 10.551 3.96494C10.0923 3.96494 9.76461 3.60447 9.76461 3.17849C9.76461 2.75244 10.0923 2.39205 10.551 2.39205ZM6.84834 3.1129H6.88113C8.91272 3.1129 10.6166 4.81683 10.6166 6.84834C10.6166 8.91265 8.91264 10.5838 6.88113 10.5838H6.84834C4.81675 10.5838 3.14562 8.91265 3.14562 6.84834C3.14562 4.81683 4.81675 3.1129 6.84834 3.1129ZM6.84834 4.39084H6.88113C8.22459 4.39084 9.3387 5.50495 9.3387 6.84841C9.3387 8.22467 8.22459 9.3387 6.88113 9.3387H6.84834C5.50488 9.3387 4.39077 8.22459 4.39077 6.84841C4.39084 5.50495 5.50488 4.39084 6.84834 4.39084ZM3.73543 1.17963H9.99396C11.4029 1.17963 12.5498 2.32646 12.5498 3.73551V9.96131C12.5498 11.3703 11.403 12.5171 9.99396 12.5171H3.73543C2.32646 12.5171 1.17963 11.3703 1.17963 9.96131V3.73551C1.17963 2.32646 2.32646 1.17963 3.73543 1.17963Z" fill="white"/>
                            </svg>
                        </Link>
                        <Link href="https://youtube.com/@lama_cash?si=COXy_OKci7oiECin" aria-label="Youtube" className="items-center justify-center flex">
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="sm:w-7.5 sm:h-7.5" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.88033 0.226018C5.76402 0.0753406 7.98679 0 9.68208 0C11.3774 0 13.5624 0.0753406 15.4837 0.226018C17.7064 0.41442 18.8366 0.791111 19.138 3.01388C19.2887 4.03101 19.364 5.42495 19.364 6.8566C19.364 8.28815 19.2887 9.7198 19.138 10.6993C18.8367 12.9597 17.7065 13.2988 15.4837 13.4871C13.5624 13.6755 11.3774 13.7131 9.68208 13.7131C7.98679 13.7131 5.76402 13.6754 3.88033 13.4871C1.65767 13.2987 0.489758 12.9597 0.188403 10.6993C0.0753396 9.7198 0 8.28826 0 6.8566C0 5.42506 0.0753396 4.03112 0.188403 3.01388C0.489758 0.791111 1.65767 0.41442 3.88033 0.226018Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.72168 3.95508L12.7699 6.85589L7.72168 9.79443V3.95508Z" fill="#171717"/>
                            </svg>
                        </Link>
                        <BackToTop />
                    </div>
                </div>
            </div>
        </footer>
    );
};