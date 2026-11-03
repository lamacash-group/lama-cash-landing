"use client";

import React from "react";
import Image from "next/image";
import Calculator, { CalculatorProps } from "@/components/Rates/Calculator";

export default function RatesHero(props: CalculatorProps) {
    const { className = "", ...calcProps } = props;

    return (
        <div className={`min-h-[85vh] bg-[#F0F0F0] font-rubik text-black py-10 px-8 md:px-8 content-center ${className}`}>
            <div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-8 items-center">
                {/* Left Column */}
                <div className="flex flex-row gap-6 justify-between">
                    <h1 className="text-4xl font-medium md:text-8xl md:font-bold uppercase leading-tight">
                        ВВОДЬ<br/>ОБМІНЮЙ<br/>ЗАБИРАЙ
                    </h1>
                    <div className="w-24 h-24 md:w-36 md:h-36 shrink-0 md:animate-[spin_10s_linear_infinite]">
                        <Image
                            src="/checkedByLama.svg"
                            alt="Перевірено Ламою"
                            width={100}
                            height={100}
                            className="w-full h-full object-contain drop-shadow-lg"
                        />
                    </div>
                </div>

                {/* Right Column (Calculator) */}
                <div className="w-full mx-auto md:mx-0">
                    <Calculator
                        {...calcProps}
                        className="md:bg-white/50 backdrop-blur-md p-6 md:p-8 md:rounded-3xl md:shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
