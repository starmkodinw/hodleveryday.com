"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/pixel - logo.png";
import fb from "../assets/fb.png";
import x from "../assets/x.png";
import discord from "../assets/discord.png";
import write from "../assets/write-svgrepo-com.png";

function Header() {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible2" : "hidden2";

  return (
    <header
      className={`flex justify-between items-center w-full h-[75px] px-4 bg-white fixed drop-shadow-sm z-10 ${cls}`}
    >
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image
            src={logo}
            width={1920}
            height={1080}
            alt="Picture of hodleveryday.com"
            className="w-[35px] h-[35px] lg:w-[65px] lg:h-[65px] rounded-full cursor-pointer"
          />
        </Link>
        <Link href="/" className="no-underline font-normal text-black">
          <div className="ml-[1rem] flex flex-col justify-start items-start">
            <span className="text-[0.85rem] font-bold text-[#242424]">
              Hodleveryday.com
            </span>
            <span className="text-[0.6rem] font-light text-[#6B6B6B]">
              HODL ไปด้วยกัน รวยไปด้วยกัน
            </span>
          </div>
        </Link>
      </div>
      <div className="flex gap-2 md:gap-4">
        <Link
          href="/editor"
          className="no-underline text-[#6B6B6B] flex items-center font-light text-sm"
        >
          <Image
            src={write}
            width={1920}
            height={1080}
            alt="write"
            className="w-[28px] h-[28px] rounded-full cursor-pointer mr-2"
          />
          Write
        </Link>
        <Link
          href="https://discord.gg/28qb3CRa"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={discord}
            width={1920}
            height={1080}
            alt="fb share"
            className="w-[32px] h-[32px] rounded-full cursor-pointer"
          />
        </Link>
        <Link
          href="https://web.facebook.com/profile.php?id=61556802667637"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={fb}
            width={1920}
            height={1080}
            alt="fb share"
            className="w-[32px] h-[32px] rounded-full cursor-pointer"
          />
        </Link>
        <Link
          href="https://twitter.com/NML001"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={x}
            width={1920}
            height={1080}
            alt="X share"
            className="w-[32px] h-[32px] cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
