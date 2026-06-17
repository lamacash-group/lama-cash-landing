import * as React from 'react';
import Image from 'next/image';
import Link from "next/link";
import {SwitchLanguage} from "@/components/SwitchLanguage";
import {Menu} from "lucide-react";
import {BinanceLine} from "@/components/BinanceLine";


export const Header = () => {
    return (
        <header className="w-full h-full flex flex-col gap-4">
            <div className="flex flex-row justify-between w-full items-center gap-4 pt-16 pb-8 max-sm:pb-6 px-9">
                <Link href="/" className="cursor-pointer">
                    <Image src="/lama-logo.svg" alt="lama cash logo" width={104} height={14} />
                </Link>
                <div className="flex flex-row gap-10">

                    <SwitchLanguage/>

                    <button
                        type="button"
                        className="text-white hover:opacity-80 transition-opacity cursor-pointer"
                        aria-label="Open menu"
                    >
                        {/* Иконка из lucide-react. Можно менять размер (w-7 h-7) и толщину линий (strokeWidth) */}
                        <Menu className="w-7 h-7" strokeWidth={2} />
                    </button>
                </div>
            </div>

            <BinanceLine/>
        </header>
    );
};