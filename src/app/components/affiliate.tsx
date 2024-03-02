import React from "react";
import Image from "next/image";
import binance from "../assets/binance.jpeg";
import bitkub from "../assets/bitkub.jpeg";
import lazada from "../assets/lazada.png";
import lazadaFlash from "../assets/lazada-flash.png";

function affiliate() {
  return (
    <div className="flex h-full w-full justify-between items-center gap-4">
      <a
        href="https://www.bitkub.com/signup?ref=4441"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={bitkub}
          width={1920}
          height={1080}
          alt="Picture of the author"
          className="rounded-full cursor-pointer w-[100px] h-[100px] object-cover"
        />
      </a>
      <a
        href="https://accounts.binance.com/register?ref=35250104"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={binance}
          width={1920}
          height={1080}
          alt="Picture of the author"
          className="rounded-full cursor-pointer w-[100px] h-[100px] object-cover"
        />
      </a>
      <a
        href="https://c.lazada.co.th/t/c.YYDHQl"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={lazada}
          width={1920}
          height={1080}
          alt="Picture of the author"
          className="cursor-pointer rounded-xl w-[300px] h-[300px] object-cover"
        />
      </a>
      <a
        href="https://c.lazada.co.th/t/c.YYDHQ8"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={lazadaFlash}
          width={1920}
          height={1080}
          alt="Picture of the author"
          className="cursor-pointer rounded-xl w-[300px] h-[300px] object-cover"
        />
      </a>
    </div>
  );
}

export default affiliate;
