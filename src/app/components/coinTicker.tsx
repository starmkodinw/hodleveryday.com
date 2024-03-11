import React from "react";
import Script from "next/script";

function coinTicker() {
  const randomNumber = (Math.floor(Math.random() * 6000) + 1).toString();
  return (
    <div>
      <Script
        type="text/javascript"
        src="https://files.coinmarketcap.com/static/widget/currency.js"
      />
      <div
        className="coinmarketcap-currency-widget"
        data-currencyid={randomNumber}
        data-base="USD"
        data-secondary=""
        data-ticker="true"
        data-rank="true"
        data-marketcap="true"
        data-volume="true"
        data-statsticker="true"
        data-stats="USD"
      ></div>
    </div>
  );
}


export default coinTicker;
