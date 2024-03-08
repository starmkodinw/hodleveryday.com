import { unstable_noStore as noStore } from 'next/cache';
const COIN = process.env.COIN;

export async function getLastQuote(symbol: string) {
    noStore();
    const response = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${symbol}`, {
        method: 'GET',
        headers: { 'X-CMC_PRO_API_KEY': `${COIN}` },
    });

    let data = await response.json();
    return data || [];
}

export async function getSymbolImage(symbol: string) {
    noStore();
    const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${symbol}`, {
        method: 'GET',
        headers: { 'X-CMC_PRO_API_KEY': `${COIN}` },
    });

    let data = await response.json();
    
    return data?.data?.[symbol]?.logo || '';
}

