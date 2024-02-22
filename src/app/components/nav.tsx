import React from 'react'
import Link from 'next/link'

function nav() {
  return (
    <div className='flex w-full flex-col justify-center items-center'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
    </div>
  )
}

export default nav