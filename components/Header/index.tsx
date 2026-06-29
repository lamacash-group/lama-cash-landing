import * as React from 'react';
import Image from 'next/image';
import Link from "next/link";
import {SwitchLanguage} from "@/components/SwitchLanguage";
import {BinanceLine} from "@/components/BinanceLine";
import {DrawerMenu} from "@/components/DrawerMenu";


export const Header = () => {
    return (
        <>
            <div className="flex flex-row justify-between w-full items-center gap-4 pt-14 pb-8 max-sm:pb-6 px-9">
                <Link href="/" className="cursor-pointer">
                    <Image src="/lama-logo.svg"
                           alt="lama cash logo"
                           className="w-80 h-auto max-sm:w-26"
                           width={104} height={14} />
                </Link>
                <div className="flex flex-row gap-10">

                    <SwitchLanguage/>

                    <DrawerMenu/>
                </div>
            </div>

            <BinanceLine/>
        </>
    );
};