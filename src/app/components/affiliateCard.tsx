import React from "react";

function affiliateCard() {
  return (
    <div>
      <figure className="kg-card kg-bookmark-card">
        <a
          className="kg-bookmark-container"
          href="https://hodleveryday.com/?ref=ninjaarmyza.ghost.io"
        >
          <div className="kg-bookmark-content">
            <div className="kg-bookmark-title">HODL!!! | hodleveryday.com</div>
            <div className="kg-bookmark-description">hodleveryday.com เว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร และบทวิเคราะห์เกี่ยวกับคริปโตเคอร์เรนซี่ เหมาะสำหรับนักลงทุนทุกระดับ ไม่ว่าจะเป็นมือใหม่หรือมืออาชีพ</div>
            <div className="kg-bookmark-metadata">
              <span className="kg-bookmark-author">hodleveryday</span>
            </div>
          </div>
          <div className="kg-bookmark-thumbnail">
            <img
              src="https://hodleveryday.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpixel%20-%20logo.badb0d19.png&amp;w=384&amp;q=75"
              alt=""
            />
          </div>
        </a>
      </figure>
      <figure className="kg-card kg-bookmark-card">
        <a
          className="kg-bookmark-container"
          href="https://accounts.binance.com/register?ref=35250104"
        >
          <div className="kg-bookmark-content">
            <div className="kg-bookmark-title">
              Bitcoin Exchange | Cryptocurrency Exchange | Binance
            </div>
            <div className="kg-bookmark-description">
              Binance cryptocurrency exchange - We operate the worlds biggest
              bitcoin exchange and altcoin crypto exchange in the world by
              volume
            </div>
            <div className="kg-bookmark-metadata">
              <span className="kg-bookmark-author">Binance</span>
            </div>
          </div>
          <div className="kg-bookmark-thumbnail">
            <img
              src="https://public.bnbstatic.com/static/images/common/ogImage.jpg"
              alt=""
            />
          </div>
        </a>
      </figure>
    </div>
  );
}

export default affiliateCard;
