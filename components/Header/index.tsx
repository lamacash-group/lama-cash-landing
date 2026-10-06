'use client';
import * as React from 'react';
import Image from 'next/image';
import {ShieldCheck} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Link, useRouter} from '@/app/i18n/navigation';
import {SwitchLanguage} from "@/components/SwitchLanguage";
import {DrawerMenu} from "@/components/DrawerMenu";
import {
    menuItems,
    FALLBACK_TRANSLATIONS,
    type TranslationKeys,
} from "./nav-items";

export const Header = () => {
    const t = useTranslations('Header');
    const router = useRouter();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>,
                          href: string,
                          block?: ScrollLogicalPosition) => {

        if (!href.startsWith('#')) {
            return;
        }

        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            e.preventDefault();
            element.scrollIntoView({
                behavior: 'smooth',
                block: block || 'start',
            });
        } else {
            e.preventDefault();
            router.push('/' + href);
        }
    };

    const getLabel = (key: TranslationKeys) => {
        try {
            if (t.has(key)) {
                return t(key);
            }
        } catch {
            // fallback
        }
        return FALLBACK_TRANSLATIONS[key] || key;
    };

    return (
        <div className="flex flex-row justify-between w-full items-center gap-4 pt-14 pb-8 max-sm:pb-6 px-9 max-sm:px-8">
            <Link href="/" className="cursor-pointer shrink-0" aria-label="LAMA CASH Home">
                <Image
                    src="/lama-logo.svg"
                    alt="lama cash logo"
                    className="w-48 sm:w-56 lg:w-72 xl:w-80 h-auto max-sm:w-26"
                    width={104}
                    height={14}
                    priority
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex flex-row gap-14 max-lg:gap-4">
                <nav className="hidden md:flex items-center gap-2 lg:gap-6 xl:gap-8">
                    {menuItems.map((item) => {
                        const isVerify = item.key === 'verifyManager';
                        const label = getLabel(item.key);

                        return (
                            <Link
                                key={item.key}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href, item.block)}
                                className={
                                    isVerify
                                        ? "inline-flex items-center gap-1.5 font-medium text-xs lg:text-sm xl:text-base text-white hover:text-white/80 transition-colors whitespace-nowrap"
                                        : "font-normal lg:font-medium text-xs lg:text-sm xl:text-base text-white hover:text-white/80 transition-colors whitespace-nowrap"
                                }
                            >
                                {isVerify && (
                                    <ShieldCheck className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-white shrink-0" />
                                )}
                                <span>{label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex flex-row items-center gap-6 max-sm:gap-4 shrink-0">
                    <SwitchLanguage />
                    <DrawerMenu />
                </div>
            </div>
        </div>
    );
};
