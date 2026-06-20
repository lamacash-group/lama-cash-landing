import * as React from 'react';
import {NextIntlClientProvider} from "next-intl";
import {TooltipProvider} from "@/components/ui/tooltip";

type Props = {
    children: React.ReactNode;
};
export const Provider = ({children}: Props) => {
    return (
        <>
            <NextIntlClientProvider>
                <TooltipProvider>
                    {children}
                </TooltipProvider>
            </NextIntlClientProvider>
        </>
    );
};