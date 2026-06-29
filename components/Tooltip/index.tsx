'use client'
import * as React from 'react';
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Info, X} from "lucide-react";
import {ReactNode, useState} from "react";
import {cn} from "@/lib/utils";

type Props = {
    triggerClass?: string,
    trigger?: ReactNode,
    children: ReactNode,
};


export const UniqTooltip = ({trigger, children, triggerClass}: Props) => {

    const [open, setOpen] = useState(false)

    return (
        <Tooltip open={open}>
            <TooltipTrigger asChild>
                <button
                    type="button"
                    className={cn('cursor-pointer w-fit', triggerClass)}
                    onClick={() => setOpen(true)}
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    onTouchStart={() => setOpen(true)}
                    onKeyDown={(e) => {
                        e.preventDefault();
                        e.key === 'Enter' && setOpen(!open);
                    }}
                >
                    {trigger || <Info className="w-4 h-4 max-sm:w-2.5 max-sm:h-2.5" onClick={()=>setOpen(false)} />}
                </button>
            </TooltipTrigger>
            <TooltipContent className={`bg-[rgba(23,23,23,1)] rounded-[20px] ${!children ? 'hidden' : ''}`}>
                <div className="flex flex-row gap-1">
                    {children}
                    <div className="w-6 h-6 pt-2">
                        <X className="text-white cursor-pointer" onClick={() => setOpen(false)}/>
                    </div>
                </div>
            </TooltipContent>
        </Tooltip>
    );
};