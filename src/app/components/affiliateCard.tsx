import React from "react";
import Image from "next/image";
import Logo from "../assets/pixel - logo.png"

function affiliateCard() {
  return (
    <div className="my-8">
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
            <Image
              width={1920}
              height={1080}
              src={Logo}
              alt="affiliateCard-hodleveryday.com"
              className="w-[250px] h-[250px] object-cover"
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
            <Image
              width={1920}
              height={1080}
              src="https://public.bnbstatic.com/static/images/common/ogImage.jpg"
              alt="affiliateCard-binance.com"
              className="w-[250px] h-[250px] object-cover"
            />
          </div>
        </a>
      </figure>
      <figure className="kg-card kg-bookmark-card">
        <a
          className="kg-bookmark-container"
          href="https://www.bitkub.com/signup?ref=4441"
        >
          <div className="kg-bookmark-content">
            <div className="kg-bookmark-title">
              Bitkub.com
            </div>
            <div className="kg-bookmark-description">
              Bitkub แพลตฟอร์มเทรดเหรียญดิจิทัลด้วยเงินบาทแห่งแรกของไทย ซึ่งได้รับการรับรองอย่างถูกต้องจาก กลต. พร้อมให้บริการโดยเจ้าหน้าที่คนไทยตลอด 24 ชม.
            </div>
            <div className="kg-bookmark-metadata">
              <span className="kg-bookmark-author">Bitkub</span>
            </div>
          </div>
          <div className="kg-bookmark-thumbnail">
            <Image
              width={1920}
              height={1080}
              src="https://images.workpointtoday.com/workpointnews/2021/05/20205600/1621518944_38591_web_bizview3.jpg"
              alt="affiliateCard-bitkub.com"
              className="w-[250px] h-[250px] object-cover"
            />
          </div>
        </a>
      </figure>
    </div>
  );
}

export default affiliateCard;
