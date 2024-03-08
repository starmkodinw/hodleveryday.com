import React from "react";
import { getLastQuote, getSymbolImage } from "./api";
import Image from "next/image";
import { cookies } from "next/headers";

const Coin = async ({ symbol }: any) => {
  const cookieStore = cookies();  
  const theme = cookieStore.get("theme") || "light";
  const data = await getLastQuote(symbol);
  const image = await getSymbolImage(symbol);
  const name = data.data[symbol][0].name;
  const price = data.data[symbol][0].quote.USD.price.toFixed(2);
  let currentSuppy = data.data[symbol][0].circulating_supply.toFixed(2);
  let marketCap = data.data[symbol][0].quote.USD.market_cap;
  if (marketCap == 0) {
    marketCap = "N/A";
  } else {
    marketCap = formatMarketCap(marketCap)
  }
  if (currentSuppy == 0) {
    currentSuppy = "N/A";
  } else {
    currentSuppy = formatMarketCap(currentSuppy);
  }
  const rank = data.data[symbol][0].cmc_rank;

  function formatMarketCap(value: number) {
    if (value >= 1e9) {
      return (value / 1e9).toFixed(2) + ' B';
    } else if (value >= 1e6) {
      return (value / 1e6).toFixed(2) + ' M';
    } else {
      return value.toString();
    }
  }

  return (
    <div className="flex justify-between items-center w-full mb-4 gap-4">
      <div className="flex flex-[0.2] md:flex-[0.1]">
        <Image src={image} width={40} height={40} alt={name} />
      </div>
      <div className="flex flex-[0.25] md:flex-[0.2] flex-col justify-between h-full">
        <span className="font-[600]">{name}</span>
        <span className="font-light text-[#6B6B6B] text-[0.9rem]">{price}</span>
      </div>
      <div className="flex flex-[0.25] md:flex-[0.1] flex-col justify-between h-full">
        <span>Rank</span>
        <span className="font-light text-[#6B6B6B] text-[0.9rem]">{rank}</span>
      </div>
      <div className="flex flex-[0.3] md:flex-[0.2] flex-col justify-between h-full">
        <span>Market cap</span>
        <span className="font-light text-[#6B6B6B] text-[0.9rem]">
          {marketCap}
        </span>
      </div>
      <div className="md:flex flex-[0.2] flex-col justify-between h-full hidden">
        <span>Supply</span>
        <span className="font-light text-[#6B6B6B] text-[0.9rem]">
          {currentSuppy}
        </span>
      </div>
    </div>
  );
};

export default Coin;
