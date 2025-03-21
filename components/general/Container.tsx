import React, { ReactNode } from 'react'

const Container = ({children, className}: {children : ReactNode, className?: string}) => {
  return (
    <div className={`container mx-auto px-4 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

export default Container