'use client';
import * as React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import {Menu, X, ShieldCheck} from "lucide-react";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link, useRouter} from "@/app/i18n/navigation";
import {cn} from "@/lib/utils";
import {
    menuItems,
    FALLBACK_TRANSLATIONS,
    type TranslationKeys,
    type NavItem,
} from "@/components/Header/nav-items";

export { menuItems, type TranslationKeys, type NavItem };

interface DrawerMenuProps {
    className?: string;
}

export const DrawerMenu = ({ className }: DrawerMenuProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const t = useTranslations('Header');
    const router = useRouter();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, block?: ScrollLogicalPosition) => {
        setIsOpen(false);

        if (!href.startsWith('#')) {
            return;
        }

        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            e.preventDefault();
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: block || 'start',
                });
            }, 300);
        } else {
            e.preventDefault();
            setTimeout(() => {
                router.push('/' + href);
            }, 300);
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
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
                <Button
                    size="icon-lg"
                    className={cn(
                        "md:hidden text-white hover:opacity-80 transition-opacity cursor-pointer",
                        className
                    )}
                    aria-label="Open menu"
                >
                    <Menu className="size-8 max-sm:size-7" strokeWidth={2} />
                </Button>
            </DrawerTrigger>

            <DrawerContent className="bg-[rgba(240,240,240,1)] border-t border-gray-300 z-100">
                <div className="w-full pb-8 px-6">
                    <DrawerHeader className="sr-only">
                        <DrawerTitle>
                            {getLabel('navigation' as TranslationKeys) || 'Навігація'}
                        </DrawerTitle>
                        <DrawerDescription>
                            navigation burger menu
                        </DrawerDescription>
                    </DrawerHeader>

                    <div className="flex items-center justify-between w-full pt-4 pb-4">
                        <Link href="/" onClick={() => setIsOpen(false)} aria-label="LAMA CASH Home">
                            <Image
                                src="/lama-logo.svg"
                                alt="lama cash logo"
                                className="w-32 h-auto brightness-0"
                                width={104}
                                height={14}
                            />
                        </Link>
                        <DrawerClose asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-neutral-800 hover:text-black hover:bg-black/5 rounded-full cursor-pointer"
                                aria-label="Close menu"
                            >
                                <X className="size-6 text-neutral-800" strokeWidth={2} />
                            </Button>
                        </DrawerClose>
                    </div>

                    <nav className="flex flex-col items-center gap-4 mt-2 mx-auto max-w-sm">
                        {menuItems.map((item) => {
                            const isVerify = item.key === 'verifyManager';
                            const label = getLabel(item.key);

                            return (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href, item.block)}
                                    className={cn(
                                        "py-2 w-full text-center transition-colors text-xl font-medium text-[#171717] underline-offset-4 hover:underline",
                                        isVerify
                                            ? "inline-flex items-center justify-center gap-2  hover:text-black"
                                            : "text-gray-800 hover:text-black"
                                    )}
                                >
                                    {isVerify && (
                                        <ShieldCheck className="size-5.5 text-neutral-900 shrink-0" />
                                    )}
                                    <span>{label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </DrawerContent>
        </Drawer>
    );
};
