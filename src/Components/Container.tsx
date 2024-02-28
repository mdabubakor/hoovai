import React from 'react'

const Container = ({children}:any) => {
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      {children}
    </div>
  )
}

export default Container
