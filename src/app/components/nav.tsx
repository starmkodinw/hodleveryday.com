import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import logo from "../assets/pixel - logo.png";

function nav() {
  return (
    <div className='flex w-full flex-col justify-center items-center'>
        <Link href="/">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="Picture of the author"
            className="rounded-full cursor-pointer"
          />
        </Link>
    </div>
  )
}

export default nav