import React, { Children } from 'react'

const Button = ({children,className}) => {
  return (
     <button className={`${className} px-[48px] py-[16px] bg-[#DB4444] text-white font-medium text-[16px] block mx-auto mt-[51px] rounded-lg`}>
      {children} 
    </button>
    
  )
}

export default Button
