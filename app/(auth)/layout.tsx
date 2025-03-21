import Container from '@/components/general/Container'
import React from 'react'

const layout = ({children}  : {children: React.ReactNode}) => {
  return (
    <Container>
    <div className='w-full h-screen flex items-center justify-center'>
        {children}
    </div>
    </Container>
  )
}

export default layout