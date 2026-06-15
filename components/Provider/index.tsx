import * as React from 'react';
import {NextIntlClientProvider} from "next-intl";

type Props = {
    children: React.ReactNode;
};
export const Provider = ({children}: Props) => {
    return (
        <>
            <NextIntlClientProvider>
                {children}
            </NextIntlClientProvider>
        </>
    );
};