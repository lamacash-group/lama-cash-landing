"use client";

import React, {useState} from "react";
import {ArrowDownLeft} from "lucide-react";
import {clsx} from "clsx";
import {useTranslations} from "next-intl";

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

const initialFaqData: FaqItem[] = [
    { id: "item1", question: "", answer: "" },
    { id: "item2", question: "", answer: "" },
    { id: "item3", question: "", answer: "" },
    { id: "item4", question: "", answer: "" },
    { id: "item5", question: "", answer: "" },
    { id: "item6", question: "", answer: "" },
    { id: "item7", question: "", answer: "" },
    { id: "item8", question: "", answer: "" },
];

const FAQSection: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const t = useTranslations("FaqSection");

    const faqData = initialFaqData.map((item) => ({
        ...item,
        question: t(`items.${item.id}.question`),
        answer: t(`items.${item.id}.answer`),
    }));


    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="bg-[#f0f0f2] w-full pb-16 max-sm:pb-8 font-rubik">
            <div className="rounded-3xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                    <h2 className="text-3xl md:text-4xl font-medium md:font-bold tracking-tight text-neutral-900">
                        {t("title")}
                    </h2>
                    <div className="border border-neutral-800 rounded-full w-10 h-10 flex items-center justify-center">
                        <ArrowDownLeft className="w-5 h-5 text-neutral-800"/>
                    </div>
                </div>

                <div className="space-y-3.5 grid grid-cols-2 max-sm:grid-cols-1 gap-5 max-sm:gap-1">
                    {faqData.map((item) => (
                        <div
                            key={item.id}
                            className={clsx(
                                "rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer",
                                openId === item.id
                                    ? "border-neutral-900/80 bg-linear-to-b from-[#C7A7FF] via-[#dcd2ff] to-[#E3E3E3]"
                                    : "border-black bg-[#ebebef] hover:bg-neutral-100/90"
                            )}
                            onClick={() => toggleAccordion(item.id)}
                        >
                            <div className="py-3 px-5 md:py-4 md:px-6">
                                <h3
                                    className={clsx(
                                        "font-medium text-base md:text-lg text-neutral-900 flex justify-between items-center",
                                        openId === item.id ? "mb-3" : ""
                                    )}
                                >
                                    {item.question}
                                    <span
                                        className={clsx(
                                            "transform transition-transform duration-300",
                                            openId === item.id ? "rotate-180" : "rotate-0"
                                        )}
                                    >
                                      <ArrowDownLeft className="w-5 h-5 text-neutral-800"/>
                                    </span>
                                </h3>
                                <div
                                    className={clsx(
                                        "grid transition-[grid-template-rows] duration-300 ease-in-out",
                                        openId === item.id
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-sm md:text-base text-neutral-800 font-normal leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
