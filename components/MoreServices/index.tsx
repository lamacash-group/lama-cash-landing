import {Info} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {ContactUs} from "@/components/ContactUs";
import {UniqTooltip} from "@/components/Tooltip";
import * as React from "react";
import {useTranslations} from "next-intl";

// type TypeMoreServices = {
//     title: string,
//     image: string,
//     article: string,
//     subtitle: string,
//     description: string | React.ReactNode,
// }
//
//
// const dataMoreServices: TypeMoreServices[] = [
//     {
//         title: 'Поповнимо PayPal у будь-якій точці світу',
//         article: 'Найкращий курс',
//         image: '',
//         subtitle: 'без ризиків та блокувань',
//         description: 'Поповнюємо PayPal, щоб гроші точно залишались у вас без шансу скасувати платіж.',
//     }
// ]

const MoreServices = () => {
    const t = useTranslations('MoreServices');

    return (
        <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full h-full gap-3 px-8.5 max-[380px]:px-4 pb-20 max-sm:pb-8 pt-[7vh]">
            <div
                className="flex flex-row gap-4 relative overflow-hidden items-center justify-center w-full h-75 max-sm:h-auto min-h-37.5 px-5 py-4 bg-linear-to-b rounded-[24px] from-[#888DF4] to-[#E3E3E3] font-rubik">
                <div className="flex flex-col gap-4 w-full h-full text-[rgba(23,23,23,1)]">
                    <div
                        className="bg-[rgba(195,197,251,1)] max-sm:h-5 font-medium rounded-[15px] text-xl text-center content-center max-sm:font-normal max-sm:text-[12px] px-2 py-2 max-sm:py-0 max-w-50 max-sm:max-w-30 w-full">
                        {t('card1.badge')}
                    </div>
                    <div className="font-rubik font-medium text-base max-sm:text-[15px] uppercase">
                        {t('card1.title')}
                    </div>
                    <div className="flex flex-row gap-1 font-rubik text-sm max-sm:text-[11px] items-center">
                        <UniqTooltip trigger={
                            <div
                                className="flex flex-row gap-1 font-rubik text-sm max-sm:text-[11px] items-center max-w-fit">
                                <span className="text-nowrap">{t('card1.tooltipTrigger')}</span>
                                <Info className="w-4 h-4 max-sm:w-2.5 max-sm:h-2.5"/>
                            </div>
                        }>

                            <div className="flex flex-col gap-4 px-2 pb-2 pt-2 font-rubik text-white">
                                <span className="text-base max-sm:text-[12px]">
                                   {t('card1.tooltipDesc')}
                                </span>
                                <span className="text-base max-sm:text-[10px] font-bold">
                                    {t('card1.tooltipBold')}
                                </span>
                            </div>
                        </UniqTooltip>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-center w-full max-sm:max-w-35 h-full relative">
                    <div
                        className="absolute -rotate-12 z-0 w-full h-full max-sm:w-[90%] max-[400px]:w-full max-w-70 max-h-75 pointer-events-none">
                        <Image
                            src={'/paypal.png'}
                            alt={"crypto tokens"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="object-contain"
                        />
                    </div>
                    <Link href="https://t.me/lama_cash" className="w-full items-center justify-center flex z-10">
                        <ContactUs text={t('card1.btn')} imageClass="bg-white max-sm:h-[14px] max-sm:w-[14px]"
                                   iconClass="max-sm:w-[8px] max-sm:h-8px]"
                                   buttonClass="hover:bg-black/95 text-base text-[rgba(240,240,240,1)] max-sm:max-w-[120px] max-sm:h-[30px] max-sm:text-[9px] max-sm:py-1.5 max-sm:px-3 max-sm:rounded-[6px] uppercase font-getvoip tracking-[3%] bg-[rgba(23,23,23,1)]"
                                   inverted/>
                    </Link>
                </div>
            </div>
            <div
                className="flex flex-row gap-4 relative overflow-hidden items-center justify-center w-full h-75 max-sm:h-auto min-h-37.5 px-5 py-4 bg-linear-to-b rounded-[24px] from-[#B3E2FF] to-[#E3E3E3] font-rubik">
                <div className="flex flex-col gap-4 w-full h-full text-[rgba(23,23,23,1)]">
                    <div
                        className="bg-[rgba(208,237,255,1)] max-sm:h-5 font-medium rounded-[15px] text-xl text-center content-center max-sm:font-normal max-sm:text-[12px] px-2 py-2 max-sm:py-0 max-w-50 max-sm:max-w-30 w-full">
                        {t('card2.badge')}
                    </div>
                    <div className="font-rubik font-medium text-base max-sm:text-[15px] uppercase">
                        {t('card2.title')}
                    </div>
                </div>
                <div className="flex flex-col justify-end items-center w-full max-sm:max-w-35 h-full relative">
                    <div
                        className="absolute rotate-[-9deg] z-0 w-full h-full max-sm:w-[90%] max-[400px]:w-full max-w-70 max-h-75 pointer-events-none">
                        <Image
                            src={'/paypalwallet.png'}
                            alt={"crypto tokens"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="object-contain"
                        />
                    </div>
                    <Link href="https://t.me/lama_cash" className="w-full items-center justify-center flex z-10">
                        <ContactUs text={t('card2.btn')} imageClass="bg-white max-sm:h-[14px] max-sm:w-[14px]"
                                   iconClass="max-sm:w-[8px] max-sm:h-8px]"
                                   buttonClass="hover:bg-black/95 text-base text-[rgba(240,240,240,1)] max-sm:max-w-[120px] max-sm:h-[30px] max-sm:text-[9px] max-sm:py-1.5 max-sm:px-3 max-sm:rounded-[6px] uppercase font-getvoip tracking-[3%] bg-[rgba(23,23,23,1)]"
                                   inverted/>
                    </Link>
                </div>
            </div>
            <div
                className="flex flex-row gap-4 relative overflow-hidden items-center justify-center w-full h-75 max-sm:h-auto min-h-37.5 px-5 py-4 bg-linear-to-b rounded-[24px] from-[#B9FD94] to-[#E3E3E3] font-rubik">
                <div className="flex flex-col gap-4 w-full h-full text-[rgba(23,23,23,1)]">
                    <div
                        className="bg-[rgba(219,255,200,1)] max-sm:h-5 font-medium rounded-[15px] text-xl text-center content-center max-sm:font-normal max-sm:text-[12px] px-2 py-2 max-sm:py-0 max-w-50 max-sm:max-w-30 w-full">
                        {t('card3.badge')}
                    </div>
                    <div className="font-rubik font-medium text-base max-sm:text-[15px] uppercase">
                        {t('card3.title')}
                    </div>
                    <UniqTooltip trigger={
                        <div
                            className="flex flex-row gap-1 font-rubik text-sm max-sm:text-[11px] items-center max-w-fit">
                            <span className="text-nowrap">{t('card3.tooltipTrigger')}</span>
                            <Info className="w-4 h-4 max-sm:w-2.5 max-sm:h-2.5"/>
                        </div>
                    }>
                        <div className="flex flex-col gap-4 px-2 pb-2 pt-2 font-rubik text-white">
                                        <span className="text-base max-sm:text-[12px]">
                                            {t('card3.tooltipDesc')}
                                        </span>
                            <span className="text-base max-sm:text-[10px] font-bold">
                                           {t('card3.tooltipBold')}
                                    </span>
                        </div>
                    </UniqTooltip>
                </div>
                <div className="flex flex-col justify-end items-center w-full max-sm:max-w-35 h-full relative">
                    <div
                        className="absolute rotate-[-9deg] z-0 w-full h-full max-sm:w-[90%] max-[400px]:w-full max-w-70 max-h-75 pointer-events-none">
                        <Image
                            src={'/wise.png'}
                            alt={"crypto tokens"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="object-contain"
                        />
                    </div>
                    <Link href="https://t.me/lama_cash" className="w-full items-center justify-center flex z-10">
                        <ContactUs text={t('card3.btn')} imageClass="bg-white max-sm:h-[14px] max-sm:w-[14px]"
                                   iconClass="max-sm:w-[8px] max-sm:h-8px]"
                                   buttonClass="hover:bg-black/95 text-base text-[rgba(240,240,240,1)] max-sm:max-w-[120px] max-sm:h-[30px] max-sm:text-[9px] max-sm:py-1.5 max-sm:px-3 max-sm:rounded-[6px] uppercase font-getvoip tracking-[3%] bg-[rgba(23,23,23,1)]"
                                   inverted/>
                    </Link>
                </div>
            </div>
            <div
                className="flex flex-row gap-4 relative overflow-hidden items-center justify-center w-full h-75 max-sm:h-auto min-h-37.5 px-5 py-4 bg-linear-to-b rounded-[24px] from-[#C7A7FF] to-[#E3E3E3] font-rubik">
                <div className="flex flex-col gap-4 w-full h-full text-[rgba(23,23,23,1)]">
                    <div
                        className="bg-[rgba(216,195,255,1)] max-sm:h-5 font-medium rounded-[15px] text-xl text-center content-center max-sm:font-normal max-sm:text-[12px] px-2 py-2 max-sm:py-0 max-w-50 max-sm:max-w-30 w-full">
                        {t('card4.badge')}
                    </div>
                    <div className="font-rubik font-medium text-base max-sm:text-[15px] uppercase">
                        {t('card4.title')}
                    </div>
                    <UniqTooltip trigger={
                        <div
                            className="flex flex-row gap-1 font-rubik text-sm max-sm:text-[11px] items-center max-w-fit">
                            <span className="text-nowrap">{t('card4.tooltipTrigger')}</span>
                            <Info className="w-4 h-4 max-sm:w-2.5 max-sm:h-2.5"/>
                        </div>
                    }>
                        <div className="flex flex-col gap-4 px-2 pb-2 pt-2 font-rubik text-white">
                                <span className="text-base max-sm:text-[12px]">
                                    {t('card4.tooltipDesc')}
                                </span>
                            <span className="text-base max-sm:text-[10px] font-bold">
                                    {t('card4.tooltipBold')}
                                </span>
                        </div>
                    </UniqTooltip>
                </div>
                <div className="flex flex-col justify-end items-center w-full max-sm:max-w-35 h-full relative">
                    <div
                        className="absolute rotate-[-9deg] z-0 w-full h-full max-sm:w-[90%] max-[400px]:w-full max-w-70 max-h-75 pointer-events-none">
                        <Image
                            src={'/puzzle.png'}
                            alt={"crypto tokens"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="object-contain"
                        />
                    </div>
                    <Link href="https://t.me/lama_cash" className="w-full items-center justify-center flex z-10">
                        <ContactUs text={t('card4.btn')} imageClass="bg-white max-sm:h-[14px] max-sm:w-[14px]"
                                   iconClass="max-sm:w-[8px] max-sm:h-8px]"
                                   buttonClass="hover:bg-black/95 text-base text-[rgba(240,240,240,1)] max-sm:max-w-[120px] max-sm:h-[30px] max-sm:text-[9px] max-sm:py-1.5 max-sm:px-3 max-sm:rounded-[6px] uppercase font-getvoip tracking-[3%] bg-[rgba(23,23,23,1)]"
                                   inverted/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MoreServices;