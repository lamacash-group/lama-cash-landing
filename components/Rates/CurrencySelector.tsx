"use client";

import {useState, useEffect} from "react";
import {Dialog, DialogContent, DialogHeader} from "@/components/ui/dialog";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle} from "@/components/ui/drawer";
import {ChevronLeft} from "lucide-react";
import {currencies, Currency} from "@/lib/data/calculator-mocks";
import Image from "next/image";

interface CurrencySelectorProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    selectedCurrency: Currency | null;
    onSelect: (currency: Currency) => void;
}

const categories = ["Всі", "Валюта", "Банки", "Платіжні системи", "Інші сервіси"];

export function CurrencySelector({isOpen, onOpenChange, selectedCurrency, onSelect}: CurrencySelectorProps) {
    const [activeCategory, setActiveCategory] = useState("Всі");
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkMedia = () => setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
        checkMedia();
        window.addEventListener("resize", checkMedia);
        return () => window.removeEventListener("resize", checkMedia);
    }, []);

    const filteredCurrencies = activeCategory === "Всі"
        ? currencies
        : currencies.filter((c) => c.category === activeCategory);

    const Content = (
        <div className="flex flex-col h-full overflow-hidden">
            <div className="p-4 flex-1 overflow-hidden flex flex-col">

                {/* Filter Pills */}
                <div className="flex flex-wrap w-full gap-2 pb-4 mb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`grow px-4 py-2 rounded-[6px] cursor-pointer whitespace-nowrap text-sm border ${
                                activeCategory === cat
                                    ? "bg-[#171717] text-white border-[#171717]"
                                    : "bg-transparent text-black border-[#171717]"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto space-y-2">
                    {filteredCurrencies.map((currency) => (
                        <div
                            key={currency.id}
                            onClick={() => onSelect(currency)}
                            className={`flex items-center gap-3 px-1 rounded-[5px] cursor-pointer ${
                                selectedCurrency?.id === currency.id ? "bg-[#5FF6BA]" : "hover:bg-gray-50"
                            }`}
                        >
                            <div className={`w-8 h-8 rounded-full overflow-hidden shrink-0 flex items-center justify-center ${!currency.iconPath ? currency.iconPlaceholderColor : 'bg-transparent'}`}>
                                {currency.iconPath && (
                                    <Image
                                        src={currency.iconPath}
                                        alt={currency.ticker}
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-contain"
                                    />
                                )}
                            </div>
                            <div>
                                <div className="font-semibold">{currency.ticker}</div>
                                {/*<div className="text-xs text-gray-500">{currency.name}</div>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 flex gap-4 bg-white font-getvoip">
                <button
                    onClick={() => onOpenChange(false)}
                    className="flex-1 flex items-center cursor-pointer justify-evenly gap-2 py-3 rounded-[6px] border border-[#171717] font-bold text-base max-md:text-[10px] uppercase"
                >
                    <ChevronLeft className="w-5 h-5"/>
                    НАЗАД
                </button>
                <button
                    onClick={() => onOpenChange(false)}
                    className="flex-1 py-3 rounded-[6px] cursor-pointer bg-[#171717] text-white font-bold text-base max-md:text-[10px] uppercase"
                >
                    РАХУЄМО
                </button>
            </div>
        </div>
    );

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onOpenChange={onOpenChange}>
                <DialogContent className="max-w-md h-[80vh] flex flex-col p-0">
                    <DialogHeader className="p-2">
                        {/*<DialogTitle>Виберіть валюту</DialogTitle>*/}
                    </DialogHeader>
                    {Content}
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent className="h-[85vh]">
                <DrawerHeader className="hidden">
                    <DrawerTitle>Виберіть валюту</DrawerTitle>
                </DrawerHeader>
                {Content}
            </DrawerContent>
        </Drawer>
    );
}
