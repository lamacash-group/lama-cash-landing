'use client'
import * as React from 'react';
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import {usePathname, useRouter} from "@/app/i18n/navigation";
import {useState, useTransition} from "react";

export const SwitchLanguage = () => {

    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('aria');

    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleLanguageChange = (newLocale: string) => {
        setIsOpen(false);
        setTimeout(() => {
            startTransition(() => {
                router.replace(pathname, { locale: newLocale });
            });
        }, 150);
    }

    return (
        <div>
            <Select
                value={locale}
                onValueChange={handleLanguageChange}
                open={isOpen}
                onOpenChange={setIsOpen}
                disabled={isPending}
            >
                <SelectTrigger aria-label={t('languageBtn')} className="text-white px-2 py-2 border-none select-none flex flex-row items-center gap-2 text-base cursor-pointer" classNameTrigger="text-white">
                    <Image src="/earth.svg" alt="earth icon" className="cursor-pointer w-[24px] h-[24px] max-sm:w-[16px] max-sm:h-[16px]" width={16} height={16} />
                    <SelectValue />
                </SelectTrigger>
                <SelectContent position="popper" className="min-w-full">
                    <SelectItem value="uk" className="max-w-16 w-full cursor-pointer">UA</SelectItem>
                    <SelectItem value="en" className="max-w-16 w-full cursor-pointer">ENG</SelectItem>
                    <SelectItem value="ru" className="max-w-16 w-full cursor-pointer">RU</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

