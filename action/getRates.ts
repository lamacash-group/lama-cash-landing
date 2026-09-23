"use server";

export async function getExchangeRates() {
    try {
        const api_COINKO = process.env.NEXT_PUBLIC_COINCKO || '';
        const cryptoRes = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,tron&vs_currencies=usd&x_cg_demo_api_key=${api_COINKO}`,
            { next: { revalidate: 600 } }
        );
        const cryptoData = await cryptoRes.json();

        const fiatRes = await fetch(
            'https://open.er-api.com/v6/latest/USD',
            { next: { revalidate: 600 } }
        );
        const fiatData = await fiatRes.json();

        return {
            USD: 1,
            EUR: 1 / fiatData.rates.EUR,
            UAH: 1 / fiatData.rates.UAH,
            USDT: cryptoData.tether.usd,
            BTC: cryptoData.bitcoin.usd,
            ETH: cryptoData.ethereum.usd,
            TRX: cryptoData.tron.usd,
            WISE: 1,
            REVOLUT: 1,
            PAYPAL: 1,
            PAYONEER: 1,
        };
    } catch (error) {
        console.error("Помилка завантаження курсів", error);
        return null;
    }
}