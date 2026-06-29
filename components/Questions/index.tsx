import * as React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Reviews} from "@/components/Reviews";
import Link from "next/link";
import {useTranslations} from "next-intl";


export const Questions = () => {

    const t = useTranslations('Questions');

    return (
        <div className="w-full h-full min-h-50 bg-[rgba(23,23,23,1)] py-10 relative bg-[linear-gradient(180deg,#472672_0%,#171717_55%)] pb-[3vh]">
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-15 max-sm:gap-10 justify-center items-center px-9">
                    <div className="flex flex-col gap-4 max-sm:gap-3 w-full justify-center items-center text-center font-rubik text-[rgba(240,240,240,1)] max-w-75">
                        <div className="flex flex-col gap-2 items-center">
                            <Reviews/>
                            <span className="font-rubik font-light text-base max-sm:text-[9px] text-white">
                            <span className="font-bold">
                                {t('trustCount')}
                            </span>
                                {"\u00A0"}
                                {t('trustText')}
                            </span>
                        </div>
                        <span className="font-light max-sm:font-normal text-base max-sm:text-[10px] max-sm:max-w-37">
                            {t('remainingQuestions')}
                        </span>
                        <Link href="https://t.me/lama_cash" className="w-full items-center justify-center flex">
                            <Button
                                className="bg-[rgba(65,180,242,1)] hover:bg-[rgba(65,180,242,1)]/95 mt-4 flex flex-row gap-2.5 max-w-100 w-full max-sm:max-w-35 min-h-7.5 h-full rounded-[6px] px-2 py-1"
                            >
                                <div
                                    className="font-bold max-sm:font-normal uppercase text-base max-sm:text-[9px] text-whitetext-center">
                                    {t('btn')}
                                </div>
                                <span>
                                <svg width="20" height="17" viewBox="0 0 20 17" className="sm:w-7.5! sm:h-7.5!"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.3039 0.145931C15.6653 1.23889 4.35212 5.92491 1.22617 7.20206C-0.870219 8.02006 0.356958 8.78703 0.356958 8.78703C0.356958 8.78703 2.14659 9.40088 3.68051 9.86074C5.21462 10.3211 6.03245 9.8097 6.03245 9.8097L13.2417 4.95221C15.7985 3.21378 15.185 4.64564 14.5711 5.25914C13.2417 6.58856 11.0429 8.68477 9.20255 10.3722C8.38437 11.0881 8.79355 11.7016 9.15151 12.0083C10.4806 13.1334 14.1114 15.4342 14.3156 15.5878C15.3955 16.3525 17.5203 17.4532 17.8435 15.1274L19.1217 7.09999C19.531 4.3901 19.94 1.88489 19.9909 1.16896C20.1445 -0.569819 18.3039 0.145931 18.3039 0.145931Z"
                                        fill="white"/>
                                </svg>

                            </span>
                            </Button>
                        </Link>
                    </div>
                    <div
                        className="relative w-full max-w-87.5 h-full flex flex-col justify-center items-center -mt-25 max-md:-mt-16 z-20">
                        <Image
                            src={'/lama-service.png'}
                            alt={"lama cash footer telegram link"}
                            width={1200}
                            height={1250}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="w-full h-auto object-cover relative z-20"
                        />
                        <div
                            className="absolute bottom-0 left-0 w-full h-[60%] bg-[linear-gradient(180deg,rgba(23,23,23,0)_0%,rgba(23,23,23,1)_100%)] z-30 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};