"use client";
import React, {useRef} from "react";
import {motion} from "framer-motion";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {ChevronRight, Info} from "lucide-react";
import {ContactUs} from "@/components/ContactUs";
import Link from "next/link";
import {UniqTooltip} from "@/components/Tooltip";
import {useTranslations} from "next-intl";

interface StackItem {
    id: number;
    title: string;
    titleClass?: string;
    titleContent?: string | React.JSX.Element;
    description: string;
    additDescription?: string;
    content: string | React.JSX.Element;
    bgColor: string;
    offset: {
        mobile: number;
        desktop: number;
    };
}

const FirstCard = () => {
    const t = useTranslations('ScrollStack.card1');

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full h-max flex justify-center items-center">

                <div className="relative w-full max-w-150 aspect-3/2">

                    <Image
                        src={'/ukraine-map.svg'}
                        alt={"Ukraine map logo"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-contain"
                    />

                    <div className="absolute w-full h-full left-[-20%] rotate-[-28.29deg] z-20">
                        <Image
                            src={'/pack-dollars.png'}
                            alt={"pack dollars"}
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="absolute w-full h-full left-[17%] rotate-[-160deg] scale-y-[-1] z-10">
                        <Image
                            src={'/coin-trc.png'}
                            alt={"coin trc"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="object-contain"
                        />
                    </div>

                </div>
            </div>
            <span className="font-rubik font-light text-base pt-4 pb-3 max-sm:text-[12px] text-[#171717] text-center">
                {t('euNote')}
            </span>
            <Link href="https://t.me/lama_cash" className="w-full items-center justify-center flex">
                <ContactUs text={t('btn')} imageClass="bg-white"
                           buttonClass="hover:bg-black/95 text-base text-[rgba(240,240,240,1)] tracking-[3%] bg-[rgba(23,23,23,1)]"
                           inverted/>
            </Link>
        </div>
    )
}

const FishCardTitleContent = () => {

    return (
        <>
            <div
                className="flex justify-center items-center max-sm:w-5 max-sm:h-5 w-10 h-10 bg-transparent max-sm:border border-2 border-black rounded-full">
                <Image src={'/trc.svg'} alt="trc logo" width={9} height={9}
                       className="max-sm:w-2.5 max-sm:h-2.5 h-4 w-4"/>
            </div>
            <ChevronRight className="text-black max-sm:w-3"/>
            <div
                className="flex justify-center items-center max-sm:w-5 max-sm:h-5 w-10 h-10 bg-transparent max-sm:border border-2 border-black rounded-full">
                <Image src={'/dollar.svg'} alt="trc logo" width={9} height={9}
                       className="max-sm:w-2 max-sm:h-2.75 h-4 w-4"/>
            </div>
        </>
    )
}

const SecondCard = () => {
    const t = useTranslations('ScrollStack.card2');

    return (
        <div className="flex flex-col h-full items-center justify-center w-full">
            <div className="w-full h-full flex justify-center items-center">

                <div className="relative w-full max-w-150 aspect-3/2">
                    <Image
                        src={'/tokens.png'}
                        alt={"crypto tokens"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-contain"
                    />

                </div>
            </div>
            <Link href="https://t.me/lama_cash" className="w-full items-center justify-center flex">
                <ContactUs text={t('btn')} imageClass="bg-white"
                           buttonClass="hover:bg-black/95 text-base text-[rgba(240,240,240,1)] tracking-[3%] bg-[rgba(23,23,23,1)]"
                           inverted/>
            </Link>
        </div>
    )
}

const SecondCardTitleContent = () => {

    return (
        <>
            <div className="flex flex-row -space-x-1.5 items-center">

                <div
                    className="flex justify-center items-center max-sm:w-5 max-sm:h-5 w-10 h-10 max-sm:border border-2 border-black rounded-full relative z-10 bg-[rgba(179,142,243,1)]">
                    <Image src={'/trc.svg'} alt="trc logo" width={9} height={9}
                           className="max-sm:w-2.5 max-sm:h-2.5 h-4 w-4"/>
                </div>

                <div
                    className="flex justify-center items-center max-sm:w-5 max-sm:h-5 w-10 h-10 max-sm:border border-2 border-black rounded-full relative z-20 bg-[rgba(179,142,243,1)]">
                    <Image src={'/ethereum.svg'} alt="ethereum logo" width={7} height={12}
                           className="max-sm:w-2.5 max-sm:h-3 h-6 w-6"/>
                </div>

                <div
                    className="flex justify-center items-center max-sm:w-5 max-sm:h-5 w-10 h-10 max-sm:border border-2 border-black rounded-full relative z-30 bg-[rgba(179,142,243,1)]">
                    <Image src={'/btc.svg'} alt="btc logo" width={9} height={9}
                           className="max-sm:w-2 max-sm:h-3 h-6 w-6"/>
                </div>

            </div>
        </>
    )
}

const ThirdCard = () => {
    const t = useTranslations('ScrollStack.card3');

    return (
        <div className="flex flex-col h-full items-center justify-center w-full">
            <div className="w-full h-full flex justify-center items-center">

                <div className="relative w-full max-w-150 aspect-3/2">
                    <Image
                        src={'/cards.png'}
                        alt={"all available cards privat, mono, lama cash pay"}
                        fill
                        className="object-contain"
                    />

                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-1 font-rubik font-light text-base pt-4 pb-3 max-sm:text-[12px] text-[#171717] text-center">

                <UniqTooltip trigger={<div className="flex flex-wrap justify-center items-center gap-1 font-rubik font-light text-base max-sm:text-[12px] text-[#171717] text-center">
                    <span>{t('euNotePrefix')}</span>
                    <span>{t('euNoteLink')}</span>
                    <Info className="w-4 h-4 max-sm:w-2.5 max-sm:h-2.5"/>
                </div>}>
                    <div className="flex flex-col gap-4 px-2 pb-2 pt-2 font-rubik text-white ">
                        <div className="flex flex-row justify-between items-center">
                                <span className="text-base max-sm:text-[12px] font-bold">
                                    {t('whyUsTitle')}
                                </span>
                        </div>
                        <div className="flex flex-col">
                                <span className="text-base max-sm:text-[10px] font-bold">
                                   {t('bestRateTitle')}
                                </span>
                            <span className="text-base max-sm:text-[10px]">
                                    {t('bestRateDesc')}
                                </span>
                        </div>
                        <div className="flex flex-col">
                                <span className="text-base max-sm:text-[10px] font-bold">
                                  {t('instantTitle')}
                                </span>
                            <span className="text-base max-sm:text-[10px]">
                                   {t('instantDesc')}
                                </span>
                        </div>
                        <div className="flex flex-col">
                                <span className="text-base max-sm:text-[10px] font-bold">
                                   {t('safeTitle')}
                                </span>
                            <span className="text-base max-sm:text-[10px]">
                                  {t('safeDesc')}
                            </span>
                        </div>
                    </div>
                </UniqTooltip>
            </div>
            <Link href="https://t.me/lama_cash" className="w-full items-center justify-center flex">
                <ContactUs text={t('btn')} imageClass="bg-white"
                           buttonClass="hover:bg-black/95 text-base text-[rgba(240,240,240,1)] tracking-[3%] bg-[rgba(23,23,23,1)]"
                           inverted/>
            </Link>
        </div>
    )
}

const ThirdCardTitleContent = () => {

    return (
        <>
            <div
                className="flex justify-center items-center max-sm:w-5 max-sm:h-5 w-10 h-10 bg-transparent max-sm:border border-2 border-black rounded-full">
                <Image src={'/dollar.svg'} alt="trc logo" width={9} height={9}
                       className="max-sm:w-2.5 max-sm:h-2.5 h-4 w-4"/>
            </div>
            <ChevronRight className="text-black max-sm:w-3"/>
            <div
                className="flex justify-center items-center max-sm:w-5 max-sm:h-5 w-10 h-10 bg-transparent max-sm:border border-2 border-black rounded-full">
                <Image src={'/wallet.svg'} alt="trc logo" width={9} height={9}
                       className="max-sm:w-3 max-sm:h-2.5 h-5 w-5"/>
            </div>
        </>
    )
}

export function ScrollStack() {

    const t1 = useTranslations('ScrollStack.card1');
    const t2 = useTranslations('ScrollStack.card2');
    const t3 = useTranslations('ScrollStack.card3');

    const STACK_ITEMS: StackItem[] = [
        {
            id: 1,
            title: t1('title'),
            titleClass: "bg-[rgba(95,246,186,1)] max-sm:h-5 rounded-[15px] text-xl text-black text-center content-center max-sm:font-normal max-sm:text-[12px] px-2 py-2 max-sm:py-0 max-w-45 max-sm:max-w-20 w-full",
            titleContent: <FishCardTitleContent/>,
            description: t1('description'),
            additDescription: t1('additDescription'),
            content: <FirstCard/>,
            bgColor: "bg-gradient-to-b from-[#C7A7FF] to-[#E3E3E3] text-slate-50",
            offset: {mobile: 0, desktop: 0},
        },
        {
            id: 2,
            title: t2('title'),
            titleClass: "bg-[rgba(235,223,255,1)] max-sm:h-5 rounded-[15px] text-xl text-black text-center content-center max-sm:font-normal max-sm:text-[12px] px-2 py-2 max-sm:py-0 max-w-45 max-sm:max-w-25 w-full",
            titleContent: <SecondCardTitleContent/>,
            description: t2('description'),
            additDescription: t2('additDescription'),
            content: <SecondCard/>,
            bgColor: "bg-gradient-to-b from-[#B088F4] to-[#E3E3E3] text-zinc-50",
            offset: {mobile: 60, desktop: 80},
        },
        {
            id: 3,
            title: t3('title'),
            titleClass: "bg-[rgba(235,223,255,1)] max-sm:h-5 rounded-[15px] text-xl text-black text-center content-center max-sm:font-normal max-sm:text-[12px] px-2 py-2 max-sm:py-0 max-w-50 max-sm:max-w-30 w-full",
            titleContent: <ThirdCardTitleContent/>,
            description: t3('description'),
            additDescription: t3('additDescription'),
            content: <ThirdCard/>,
            bgColor: "bg-gradient-to-b from-[#958DFF] to-[#E3E3E3] text-neutral-50",
            offset: {mobile: 230, desktop: 230},
        },
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const lastItemOffset = STACK_ITEMS[STACK_ITEMS.length - 1].offset;


    return (
        <div ref={containerRef} className="relative pt-12">
            <div className="w-full px-8.5 max-[380px]:px-4 mx-auto rounded-[27px] flex flex-col">
                {STACK_ITEMS.map((item, index) => {
                    return (
                        <StackCard
                            key={item.id}
                            item={item}
                            index={index}
                            total={STACK_ITEMS.length}
                            lastItemOffset={lastItemOffset}
                        />
                    );
                })}
            </div>
        </div>
    );
}

interface StackCardProps {
    item: StackItem;
    index: number;
    total: number;
    lastItemOffset: { mobile: number; desktop: number };
}

function StackCard({item, index, lastItemOffset}: StackCardProps) {


    return (
        <div
            className={cn(
                `sticky w-full flex items-start justify-center [--card-height:600px] max-[500px]:[--card-height:550px] sm:[--card-height:750px]`,
                "[--active-offset:var(--offset-mobile)] sm:[--active-offset:var(--offset-desktop)]",
                "[--active-last:var(--last-mobile)] sm:[--active-last:var(--last-desktop)]",
            )}
            style={{
                zIndex: index,
                '--offset-mobile': `${item.offset.mobile}px`,
                '--offset-desktop': `${item.offset.desktop}px`,
                '--last-mobile': `${lastItemOffset.mobile}px`,
                '--last-desktop': `${lastItemOffset.desktop}px`,
                top: `calc(3rem + var(--active-offset))`,
                height: `calc(var(--card-height) + (var(--active-last) - var(--active-offset)))`,
            } as React.CSSProperties}
        >
            <motion.div
                className="w-full h-(--card-height) origin-top"
            >
                <Card
                    className={cn("w-full h-full border-none font-rubik shadow-2xl flex flex-col justify-between p-5", item.bgColor)}>
                    <CardHeader className="max-sm:px-1">
                        <div className="flex flex-row gap-4 justify-between">
                            <CardTitle className={cn("font-rubik", item.titleClass)}>{item.title}</CardTitle>
                            <div className="flex flex-row gap-1 items-center">
                                {item.titleContent}
                            </div>
                        </div>
                        <CardDescription
                            className="font-rubik font-medium text-black text-4xl max-sm:text-2xl uppercase pt-8 max-sm:pt-6 max-sm:pb-0">
                            {item.description}
                            <div
                                className="font-rubik text-base max-sm:text-[13px] text-[#171717] px-1.5 py-4.5 max-sm:pb-0 normal-case">
                                {item.additDescription}
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-lg h-full font-rubik px-0">
                        {item.content}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}

