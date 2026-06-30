'use client'
import * as React from 'react';
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import {setUserLocale} from "@/actions/locale";
import {useRouter} from "next/navigation";
import {useTransition} from "react";


export const SwitchLanguage = () => {

    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition()
    const t = useTranslations('aria');

    const setLocale = (locale:string) => {
        startTransition(async () => {
            await setUserLocale(locale);
            router.refresh();
        });
    }

    return (
        <div>
            <Select defaultValue={locale} onValueChange={(value) => setLocale(value)} disabled={isPending}>
                <SelectTrigger aria-label={t('languageBtn')} className="text-white px-2 py-2 border-none select-none flex flex-row items-center gap-2 text-base cursor-pointer" classNameTrigger="text-white">
                    <Image src="/earth.svg" alt="earth icon" className="cursor-pointer w-[24px] h-[24px] max-sm:w-[16px] max-sm:h-[16px]" width={16} height={16} />
                    <SelectValue />
                </SelectTrigger>
                <SelectContent position="popper" className="min-w-full">
                    <SelectItem value="uk" className="max-w-16 w-full cursor-pointer">UA</SelectItem>
                    <SelectItem value="en" className="max-w-16 w-full cursor-pointer">ENG</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};