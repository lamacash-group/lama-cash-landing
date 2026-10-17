"use client";
import React, { useState, useEffect, useCallback } from "react";
import { currencies, locations, Currency, Location } from "@/lib/data/calculator-mocks";
import { CurrencySelector } from "@/components/Rates/CurrencySelector";
import { LocationSelector } from "@/components/Rates/LocationSelector";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { getExchangeRates } from "@/action/getRates";

const EXCHANGE_FEES: Record<string, number> = {
    "PAYPAL-USDT": 0,
    "BTC-WISE": 0,
    "USDT-UAH": 0,
    "DEFAULT": 0
};

const DEFAULT_RATES: Record<string, number> = {
    USD: 1,
    EUR: 1.08,
    UAH: 0.024,
    USDT: 1,
    BTC: 95000,
    ETH: 2700,
    TRX: 0.25,
    WISE: 1,
    REVOLUT: 1,
    PAYPAL: 1,
    PAYONEER: 1,
};

export interface CalculatorProps {
    initialGiveTicker?: string;
    initialGetTicker?: string;
    initialCityName?: string;
    initialCitySlug?: string;
    initialAmount?: string;
    variant?: "page" | "card";
    className?: string;
    sourcePage?: "rates" | "exchange" | "city";
}

function findCurrency(ticker?: string): Currency | undefined {
    if (!ticker) return undefined;
    const clean = ticker.toUpperCase().trim();
    const exact = currencies.find((c) => c.ticker.toUpperCase() === clean);
    if (exact) return exact;
    return currencies.find((c) => clean.includes(c.ticker.toUpperCase()));
}

function findLocation(cityName?: string): Location | undefined {
    if (!cityName) return undefined;
    const clean = cityName.toLowerCase().trim();
    return locations.find((l) => {
        const city = l.city.toLowerCase();
        return city === clean || clean.includes(city) || city.includes(clean);
    });
}

export default function Calculator({
    initialGiveTicker,
    initialGetTicker,
    initialCityName,
    initialAmount = "1000",
    variant = "page",
    className = "",
}: CalculatorProps = {}) {
    const defaultGive = findCurrency(initialGiveTicker) || currencies[3] || currencies[0];
    const defaultGet = findCurrency(initialGetTicker) || currencies[0] || currencies[1];
    const defaultLoc = findLocation(initialCityName) || locations[0];

    const [giveCurrency, setGiveCurrency] = useState<Currency>(defaultGive);
    const [getCurrency, setGetCurrency] = useState<Currency>(defaultGet);
    const [location, setLocation] = useState<Location>(defaultLoc);

    const [giveAmount, setGiveAmount] = useState<string>(initialAmount);
    const [rates, setRates] = useState<Record<string, number>>(DEFAULT_RATES);

    const [isGiveSelectorOpen, setIsGiveSelectorOpen] = useState(false);
    const [isGetSelectorOpen, setIsGetSelectorOpen] = useState(false);
    const [isLocationSelectorOpen, setIsLocationSelectorOpen] = useState(false);

    const [activeSelector, setActiveSelector] = useState<'give' | 'get' | null>(null);

    useEffect(() => {
        getExchangeRates().then((data) => {
            if (data) {
                setRates(data);
            }
        });
    }, []);

    const calculateExchange = useCallback((amount: number, giveTicker: string, getTicker: string) => {
        const currentRates = rates || DEFAULT_RATES;
        const giveRateInUsd = currentRates[giveTicker] || 1;
        const getRateInUsd = currentRates[getTicker] || 1;

        const feeKey = `${giveTicker}-${getTicker}`;
        const feePercent = EXCHANGE_FEES[feeKey] || EXCHANGE_FEES["DEFAULT"];

        const rawAmountGet = (amount * giveRateInUsd) / getRateInUsd;
        const feeMultiplier = 1 - (feePercent / 100);
        const finalAmountGet = rawAmountGet * feeMultiplier;

        if (finalAmountGet >= 100) {
            return finalAmountGet.toFixed(2);
        }
        return finalAmountGet.toFixed(4);
    }, [rates]);

    const getAmount = (() => {
        const amount = parseFloat(giveAmount.replace(/\s/g, "").replace(",", "."));
        if (isNaN(amount) || amount <= 0) return "0";
        return calculateExchange(amount, giveCurrency.ticker, getCurrency.ticker);
    })();

    const handleExchange = (e: React.FormEvent) => {
        e.preventDefault();
        const cleanAmount = giveAmount.trim() || "0";
        const message = encodeURIComponent(
            `Вітаю! Хочу обміняти ${cleanAmount} ${giveCurrency.ticker} на ${getAmount} ${getCurrency.ticker} у місті ${location.city}.`
        );
        const telegramUrl = `https://t.me/lama_cash_manager?text=${message}`;
        window.open(telegramUrl, "_blank", "noopener,noreferrer");
    };

    const cardContent = (
        <form onSubmit={handleExchange} className="space-y-6">
            {/* Give */}
            <div>
                <label className="text-sm text-center md:text-start text-[#171717] mb-2 block font-medium">Ви віддаєте</label>
                <div className="flex max-md:border max-md:border-gray-500 max-md:rounded-[10px] p-1 bg-transparent items-center relative">
                    <button
                        type="button"
                        onClick={() => { setActiveSelector('give'); setIsGiveSelectorOpen(true); }}
                        className="md:absolute cursor-pointer bg-linear-to-b from-[#B088F4] to-[#E3E3E3] px-3 py-4 rounded-[10px] flex items-center justify-between gap-3 min-w-min z-10 text-[#171717]"
                    >
                        <span className="md:font-bold font-medium text-base md:text-lg">{giveCurrency.ticker}</span>
                        <ChevronDown width={18} height={18} />
                    </button>
                    <input
                        type="number"
                        value={giveAmount}
                        onChange={(e) => setGiveAmount(e.target.value)}
                        pattern="[0-9,. ]*"
                        className="w-full px-3 py-3 md:h-15 md:ml-4 md:border md:border-gray-300 md:rounded-xl text-right font-bold text-xl max-md:outline-none pr-4 text-[#171717]"
                    />
                </div>
            </div>

            {/* Get */}
            <div>
                <label className="text-sm text-center md:text-start text-[#171717] mb-2 block font-medium">Ви отримуєте</label>
                <div className="flex max-md:border max-md:border-gray-500 max-md:rounded-[10px] p-1 bg-transparent items-center relative">
                    <button
                        type="button"
                        onClick={() => { setActiveSelector('get'); setIsGetSelectorOpen(true); }}
                        className="md:absolute cursor-pointer bg-linear-to-b from-[#B088F4] to-[#E3E3E3] px-3 py-4 rounded-[10px] flex items-center justify-between gap-3 min-w-min z-10 text-[#171717]"
                    >
                        <span className="md:font-bold font-medium text-base md:text-lg">{getCurrency.ticker}</span>
                        <ChevronDown width={18} height={18} />
                    </button>
                    <input
                        type="number"
                        value={getAmount}
                        readOnly
                        className="w-full px-3 py-3 md:h-15 md:ml-4 md:border md:border-gray-300 md:rounded-xl text-right font-bold text-xl max-md:outline-none pr-4 text-[#171717]"
                    />
                </div>
            </div>

            {/* Location */}
            <div>
                <label className="text-sm text-center md:text-start text-[#171717] mb-2 block font-medium">Локація</label>
                <button
                    type="button"
                    onClick={() => setIsLocationSelectorOpen(true)}
                    className="w-full px-4 py-3 cursor-pointer md:h-15 max-md:h-16.5 md:border md:border-gray-300 md:rounded-xl max-md:border max-md:border-gray-500 max-md:rounded-[10px] flex items-center justify-between font-semibold  text-[#171717]"
                >
                    <span>{location.country}, {location.city}</span>
                    <span className="text-gray-400">▼</span>
                </button>
            </div>

            {/* Action */}
            <div>
                <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#171717] text-[#F0F0F0] font-getvoip uppercase font-bold text-lg hover:bg-black transition-colors cursor-pointer"
                >
                    ОБМІНЯТИ
                </button>
            </div>
        </form>
    );

    if (variant === "card") {
        return (
            <div className={`relative bg-white/95 backdrop-blur-xl font-rubik p-6 md:p-8 rounded-[1.75rem] border border-white/25 shadow-2xl shadow-black/30 w-full text-[#171717] ${className}`}>
                {cardContent}

                <CurrencySelector
                    isOpen={isGiveSelectorOpen || isGetSelectorOpen}
                    onOpenChange={(open) => {
                        setIsGiveSelectorOpen(open);
                        setIsGetSelectorOpen(open);
                    }}
                    selectedCurrency={activeSelector === 'give' ? giveCurrency : getCurrency}
                    onSelect={(c) => {
                        if (activeSelector === 'give') setGiveCurrency(c);
                        else setGetCurrency(c);
                        setIsGiveSelectorOpen(false);
                        setIsGetSelectorOpen(false);
                    }}
                />
                <LocationSelector
                    isOpen={isLocationSelectorOpen}
                    onOpenChange={setIsLocationSelectorOpen}
                    selectedLocation={location}
                    onSelect={(l) => {
                        setLocation(l);
                        setIsLocationSelectorOpen(false);
                    }}
                />
            </div>
        );
    }

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
                <div className="md:bg-white/50 backdrop-blur-md font-rubik p-6 md:p-8 md:rounded-3xl md:shadow-2xl w-full mx-auto md:mx-0">
                    {cardContent}
                </div>
            </div>

            <CurrencySelector
                isOpen={isGiveSelectorOpen || isGetSelectorOpen}
                onOpenChange={(open) => {
                    setIsGiveSelectorOpen(open);
                    setIsGetSelectorOpen(open);
                }}
                selectedCurrency={activeSelector === 'give' ? giveCurrency : getCurrency}
                onSelect={(c) => {
                    if (activeSelector === 'give') setGiveCurrency(c);
                    else setGetCurrency(c);
                    setIsGiveSelectorOpen(false);
                    setIsGetSelectorOpen(false);
                }}
            />
            <LocationSelector
                isOpen={isLocationSelectorOpen}
                onOpenChange={setIsLocationSelectorOpen}
                selectedLocation={location}
                onSelect={(l) => {
                    setLocation(l);
                    setIsLocationSelectorOpen(false);
                }}
            />
        </div>
    );
}
