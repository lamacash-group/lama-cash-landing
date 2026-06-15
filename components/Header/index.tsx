import * as React from 'react';
import Image from 'next/image';
import Link from "next/link";


export const Header = () => {
    return (
        <header className="w-full h-full">
            <div className="flex flex-row justify-between w-full items-center gap-4 px-9 pt-16 pb-11">
                <Link href="/" className="cursor-pointer">
                    <Image src="/lama-logo.svg" alt="lama cash logo" width={104} height={14} />
                </Link>
                <div>
                    <Image src="/earth.svg" alt="lama cash logo" className="cursor-pointer" width={14} height={14} />

                </div>
            </div>
        </header>
    );
};