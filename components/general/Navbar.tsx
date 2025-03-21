import React from 'react'
import Container from '@/components/general/Container'
import Logo from './Logo'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='border-b border-gray-300'>
        <Container className='py-4'>
            <div className='flex items-center justify-between'>
                {/* logo */}
                <Logo/>

                {/* menu for lg: */}
                <div className='hidden lg:flex'>
                    <Link href='/dashboard'>Dashboard</Link>
                </div>

                {/* user profile: */}
                <UserButton/>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar