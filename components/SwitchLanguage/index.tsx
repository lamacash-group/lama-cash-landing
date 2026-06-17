'use client'
import * as React from 'react';
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import Image from "next/image";
import {useLocale} from "next-intl";
import {setUserLocale} from "@/actions/locale";
import {useRouter} from "next/navigation";
import {useTransition} from "react";


export const SwitchLanguage = () => {

    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition()

    const setLocale = (locale:string) => {
        startTransition(async () => {
            await setUserLocale(locale);
            router.refresh();
        });
    }

    return (
        <div>
            <Select defaultValue={locale} onValueChange={(value) => setLocale(value)} disabled={isPending}>
                <SelectTrigger className="text-white px-0 py-0 border-none select-none gap-2 text-base cursor-pointer" classNameTrigger="text-white">
                    <div className="flex flex-row items-center gap-2">
                        <Image src="/earth.svg" alt="earth icon" className="cursor-pointer" width={16} height={16} />
                        <SelectValue />
                    </div>
                </SelectTrigger>
                <SelectContent position="popper" className="min-w-full">
                    <SelectItem value="uk" className="max-w-16 w-full cursor-pointer">UA</SelectItem>
                    <SelectItem value="en" className="max-w-16 w-full cursor-pointer">ENG</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};