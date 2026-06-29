'use client'
import * as React from 'react';
import {
    Drawer,
    DrawerContent, DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import Link from "next/link";
import {useTranslations} from "next-intl";

type TranslationKeys = 'services' | 'media' | 'blog';

const menuItems: { key: TranslationKeys; href: string; block: ScrollLogicalPosition }[] = [
    { key: 'services', href: '#services', block: 'start' },
    { key: 'media', href: '#media', block: 'start' },
    { key: 'blog', href: '#blog', block: 'start' },
];

export const DrawerMenu = (

) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const t = useTranslations('Header');


    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, block:ScrollLogicalPosition) => {
        e.preventDefault();
        setIsOpen(false);

        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: block,
                });
            }, 300);
        }
    };


    return (
        <>
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                    <Button
                        size="icon-lg"
                        className="text-white hover:opacity-80 transition-opacity cursor-pointer"
                        aria-label="Open menu"
                    >
                        <Menu className="size-8 max-sm:size-7" strokeWidth={2} />
                    </Button>
                </DrawerTrigger>

                <DrawerContent className="bg-[rgba(240,240,240,1)] border-t border-gray-300 z-100">
                    <div className="mx-auto w-full max-w-sm pb-8">
                        <DrawerHeader>
                            <DrawerTitle className="text-center font-bold text-xl text-[rgba(23,23,23,1)] sr-only">
                                {t('navigation')}
                                navigation
                            </DrawerTitle>
                            <DrawerDescription className="sr-only">
                               navigation burger menu
                            </DrawerDescription>
                        </DrawerHeader>

                        <nav className="flex flex-col items-center gap-6 mt-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href, item.block as ScrollLogicalPosition)}
                                    className="text-xl font-medium text-gray-800 hover:text-black transition-colors underline-offset-4 hover:underline py-2 w-full text-center"
                                >
                                    {t(item.key)}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    );
};