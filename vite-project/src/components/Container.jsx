import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`${className} container mx-auto lg:w-[1170px] px-2`}>
      {children}
    </div>
  )
}

export default Container
