import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Link href='/'>
        <h1 className='text-lg md:text-2xl lg:text-4xl font-bold cursor-pointer'>
            Form<span className='bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent'>Genius</span>
        </h1>
        </Link>
    </div>
  )
}

export default Logo