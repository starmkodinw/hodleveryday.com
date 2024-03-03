import React from "react";
import { getLastQuote, getSymbolImage } from "./api";
import Image from "next/image";

const Coin = async ({ symbol }: any) => {
  const data = await getLastQuote(symbol);
  const image = await getSymbolImage(symbol);
  const name = data.data[symbol][0].name;
  const price = data.data[symbol][0].quote.USD.price.toFixed(2);
  let currentSuppy = data.data[symbol][0].circulating_supply.toFixed(2);
  const infinite = data.data[symbol][0].infinite_supply;
  let marketCap = data.data[symbol][0].quote.USD.market_cap;
  if (marketCap == 0) {
    marketCap = "N/A";
  } else {
    marketCap = marketCap.toFixed(2).toString().replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
  if (currentSuppy == 0) {
    currentSuppy = "N/A";
  } else {
    currentSuppy = currentSuppy.toString().replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
  const rank = data.data[symbol][0].cmc_rank;

  return (
    <div className="flex justify-between items-center w-full mb-4 gap-4">
      <div className="flex flex-[0.1]">
        <Image src={image} width={50} height={50} alt={name} />
      </div>
      <div className="flex flex-[0.2] flex-col justify-between h-full">
        <span className="font-[600]">{name}</span>
        <span className="font-light text-[#6B6B6B] text-[0.9rem]">{price}</span>
      </div>
      <div className="flex flex-[0.1] flex-col justify-between h-full">
        <span>Rank</span>
        <span className="font-light text-[#6B6B6B] text-[0.9rem]">{rank}</span>
      </div>
      <div className="flex flex-[0.2] flex-col justify-between h-full">
        <span>Market cap</span>
        <span className="font-light text-[#6B6B6B] text-[0.9rem]">{marketCap}</span>
      </div>
      <div className="flex flex-[0.2] flex-col justify-between h-full">
        <span>Supply</span>
        <span className="font-light text-[#6B6B6B] text-[0.9rem]">{currentSuppy}</span>
      </div>
      <div className="flex flex-[0.1] flex-col justify-between h-full">
        <span>Infinite</span>
        <span className="font-light text-[#6B6B6B] text-[0.9rem]">{infinite ? "true" : "false"}</span>
      </div>
    </div>
  );
};

export default Coin;
