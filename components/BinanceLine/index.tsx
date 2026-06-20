'use client'
import * as React from 'react';
import {useEffect, useState} from "react";

type CryptoData = {
    symbol: string;
    price: string;
};

export const BinanceLine = () => {

    const [currency, setCurrency] = useState<CryptoData[]>([]);

    useEffect(() => {
        const fetchCrypto = async () => {
            try {
                const symbolsObj = ["BTCUSDT","ETHUSDT","SOLUSDT","ETCUSDT","LTCUSDT"];
                const symbolsStr = JSON.stringify(symbolsObj);
                const safeUrl = `https://api.binance.com/api/v3/ticker/price?symbols=${encodeURIComponent(symbolsStr)}`;

                const response = await fetch(safeUrl);
                const result = await response.json();

                const formattedData = result.map((item: CryptoData) => ({
                    symbol: item.symbol.replace(/USDT|USD/, ''),
                    price: parseFloat(item.price).toFixed(2)
                }));

                setCurrency(formattedData);
            } catch (error) {
                console.error("Ошибка при получении данных Binance:", error);
            }
        };
        fetchCrypto();
    }, [])

    if (currency.length === 0) return <></>;

    const repeatedData = [...currency, ...currency, ...currency, ...currency, ...currency,
        ...currency, ...currency, ...currency, ...currency, ...currency, ...currency, ...currency];

    return (
        <div className="w-full overflow-hidden bg-[rgba(255,255,255,0.1)] border-y border-[rgba(255,255,255,0.1)] flex select-none">
            <div className="flex animate-marquee whitespace-nowrap min-w-max py-1.5 max-sm:text-[8px]">
                {repeatedData.map((coin, index) => (
                    <div key={index} className="flex items-center gap-1.5 mx-1 text-[rgba(158,158,158,1)]">
                        {/* Название монеты (светлое, жирное) */}
                        <span className="font-bold text-xs uppercase tracking-wider">
                            {coin.symbol}
                        </span>
                        {/* Цена монеты (серая, более тусклая) */}
                        <span className="text-xs font-light">
                            ${coin.price}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};