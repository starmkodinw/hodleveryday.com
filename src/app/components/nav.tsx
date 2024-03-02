import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import logo from "../assets/pixel - logo.png";

function nav() {
  return (
    <header className="flex justify-between items-center w-full h-[75px] px-4 text-white bg-white fixed drop-shadow-sm">
        <Link href="/">
          <Image
            src={logo}
            width={65}
            height={65}
            alt="Picture of the author"
            className="rounded-full cursor-pointer"
          />
        </Link>
    </header>
  )
}

export default nav