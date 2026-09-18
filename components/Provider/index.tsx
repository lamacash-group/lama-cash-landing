import * as React from 'react';
import {AbstractIntlMessages, NextIntlClientProvider} from "next-intl";
import {TooltipProvider} from "@/components/ui/tooltip";

type Props = {
    children: React.ReactNode;
    messages: AbstractIntlMessages;
    locale: string;
};

export const Provider = ({children, messages, locale}: Props) => {
    return (
        <>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <TooltipProvider delayDuration={0}>
                    {children}
                </TooltipProvider>
            </NextIntlClientProvider>
        </>
    );
};