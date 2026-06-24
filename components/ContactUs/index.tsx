import * as React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {cn} from "@/lib/utils";

type Props = {
    text:string
    inverted?: boolean,
    iconClass?: string,
    imageClass?: string,
    buttonClass?: string,
};
export const ContactUs = ({text = 'contact us', buttonClass, imageClass, inverted, iconClass}: Props) => {

    return (
        <Button variant="default" className={cn("py-2 h-12.5 max-w-80 w-full uppercase cursor-pointer px-4 " +
            "hover:bg-white/95 bg-white text-black font-getvoip font-bold text-[17px] flex flex-row gap-2", buttonClass)}>
            {text}
            <div className={cn("bg-[rgba(65,180,242,1)] rounded-full w-6 h-6 flex items-center justify-center", imageClass)}>
                <Image
                    className={cn("w-auto h-auto", inverted && "invert", iconClass)}
                    src="/telegram.svg"
                    width={13}
                    height={11}
                    alt="telegram icon"
                />
            </div>
        </Button>
    );
};