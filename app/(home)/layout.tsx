import Footer from '@/components/general/Footer'
import Navbar from '@/components/general/Navbar'
import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        {children}
        {/* <Footer/> */}
    </div>
  )
}

export default layout