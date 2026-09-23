"use client";
import {useState, useEffect, useCallback} from "react";
import {currencies, locations, Currency, Location} from "@/lib/data/calculator-mocks";
import {CurrencySelector} from "@/components/Rates/CurrencySelector";
import {LocationSelector} from "@/components/Rates/LocationSelector";
import Image from "next/image";
import {ChevronDown} from "lucide-react";
import {getExchangeRates} from "@/action/getRates";

const EXCHANGE_FEES: Record<string, number> = {
    "PAYPAL-USDT": 0,
    "BTC-WISE": 0,
    "USDT-UAH": 0,
    "DEFAULT": 0
};

export default function Calculator() {
    const [giveCurrency, setGiveCurrency] = useState<Currency>(currencies[0]);
    const [getCurrency, setGetCurrency] = useState<Currency>(currencies[1]);
    const [location, setLocation] = useState<Location>(locations[0]);

    const [giveAmount, setGiveAmount] = useState<string>("1000");
    const [rates, setRates] = useState<Record<string, number> | null>(null);

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
        if (!rates) return "0";

        const giveRateInUsd = rates[giveTicker] || 1;
        const getRateInUsd = rates[getTicker] || 1;

        const feeKey = `${giveTicker}-${getTicker}`;
        const feePercent = EXCHANGE_FEES[feeKey] || EXCHANGE_FEES["DEFAULT"];

        const rawAmountGet = (amount * giveRateInUsd) / getRateInUsd;
        const feeMultiplier = 1 - (feePercent / 100);
        const finalAmountGet = rawAmountGet * feeMultiplier;

        return finalAmountGet.toFixed(4);
    }, [rates]);

    const getAmount = (() => {
        const amount = parseFloat(giveAmount);
        if (isNaN(amount) || !rates) return "0";
        return calculateExchange(amount, giveCurrency.ticker, getCurrency.ticker);
    })();


    return (
        <div className="min-h-[85vh] bg-[#F0F0F0] font-rubik text-black py-10 px-8 md:px-8 content-center">
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
                    <div className="space-y-6">
                        {/* Give */}
                        <div>
                            <label className="text-sm text-center md:text-start text-[#171717] mb-2 block">Ви віддаєте</label>
                            <div className="flex max-md:border max-md:border-gray-500 max-md:rounded-[10px] p-1 bg-transparent items-center relative">
                                <button onClick={() => { setActiveSelector('give'); setIsGiveSelectorOpen(true); }}
                                        className="md:absolute cursor-pointer bg-linear-to-b from-[#B088F4] to-[#E3E3E3] px-3 py-4 rounded-[10px] flex items-center justify-between gap-3 min-w-min">
                                    <span className="md:font-bold font-medium text-base md:text-lg">{giveCurrency.ticker}</span>
                                    <ChevronDown  width={18} height={18} />
                                </button>
                                <input type="number" value={giveAmount} onChange={(e) => setGiveAmount(e.target.value)} pattern="[0-9,. ]*"
                                       className="w-full px-3 py-3 md:h-15 md:ml-4 md:border md:rounded-xl bg-transparent text-right font-bold text-xl max-md:outline-none pr-4"/>
                            </div>
                        </div>

                        {/* Get */}
                        <div>
                            <label className="text-sm text-center md:text-start text-[#171717] mb-2 block">Ви отримуєте</label>
                            <div className="flex max-md:border max-md:border-gray-500 max-md:rounded-[10px] p-1 bg-transparent items-center relative">
                                <button onClick={() => { setActiveSelector('get'); setIsGetSelectorOpen(true); }}
                                        className="md:absolute cursor-pointer bg-linear-to-b from-[#B088F4] to-[#E3E3E3] px-3 py-4 rounded-[10px] flex items-center justify-between gap-3 min-w-min">
                                    <span className="md:font-bold font-medium text-base md:text-lg">{getCurrency.ticker}</span>
                                    <ChevronDown  width={18} height={18} />
                                </button>
                                <input type="number" value={getAmount} readOnly
                                       className="w-full px-3 py-3 md:h-15 md:ml-4 md:border md:rounded-xl bg-transparent text-right font-bold text-xl max-md:outline-none pr-4"/>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="text-sm text-center md:text-start text-[#171717] mb-2 block">Локація</label>
                            <button onClick={() => setIsLocationSelectorOpen(true)}
                                    className="w-full px-3 py-3 cursor-pointer md:h-15 max-md:h-16.5 md:border md:rounded-xl max-md:border max-md:border-gray-500 max-md:rounded-[10px] flex items-center justify-between font-semibold">
                                <span>{location.country}, {location.city}</span>
                                <span className="text-gray-400">▼</span>
                            </button>
                        </div>

                        {/* Action */}
                        <button
                            className="w-full py-4 rounded-xl bg-[#171717] text-[#F0F0F0] font-getvoip uppercase font-bold text-lg hover:bg-black transition-colors">
                            ОБМІНЯТИ
                        </button>
                    </div>
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