import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/pixel - logo.png";
import btc from "../assets/bitkub.jpeg";

function nav() {
  return (
    <header className="flex justify-between items-center w-full h-[75px] px-4 bg-white fixed drop-shadow-sm">
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image
            src={logo}
            width={65}
            height={65}
            alt="Picture of hodleveryday.com"
            className="rounded-full cursor-pointer"
          />
        </Link>
        <Link href="/" className="no-underline font-normal text-black">
          <span className="ml-[1rem]">Hodleveryday.com</span>
        </Link>
      </div>
      <div>
        <Image
          src={btc}
          width={32}
          height={32}
          alt="profile"
          className="rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}

export default nav;
