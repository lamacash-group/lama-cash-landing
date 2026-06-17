'use server';

import { cookies } from 'next/headers';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function setUserLocale(locale: string) {

    const cookieStore = await cookies();

    cookieStore.set(COOKIE_NAME, locale, { maxAge: 60 * 60 * 24 * 365 });
}