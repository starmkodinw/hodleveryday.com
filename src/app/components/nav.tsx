import React from 'react'
import Link from 'next/link'

function nav() {
  return (
    <div className='flex w-full flex-col justify-center items-center'>
        <Link href="/">Home</Link>
    </div>
  )
}

export default nav