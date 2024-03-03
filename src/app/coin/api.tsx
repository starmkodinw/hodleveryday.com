const COIN = process.env.COIN;

export async function getLastQuote(symbol: string) {
    const response = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${symbol}`, {
        method: 'GET',
        headers: { 'X-CMC_PRO_API_KEY': `${COIN}` },
    });

    let data = await response.json();
    return data || [];
}

export async function getSymbolImage(symbol: string) {
    const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${symbol}`, {
        method: 'GET',
        headers: { 'X-CMC_PRO_API_KEY': `${COIN}` },
    });

    let data = await response.json();
    
    return data?.data?.[symbol]?.logo || '';
}

