import React from 'react'
import Container from './Container' 
import Flex from './Flex'
import { RiArrowDropDownLine } from "react-icons/ri";



const HeaderTop = () => {
  return (
    <>
<div className='bg-black'>
<Container>
  <Flex className="py-[12px]">
       <div className='mx-auto'>
            <p className='!text-[#FFF] lg:text-[14px] text-xs font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              <span className='font-semibold ml-[8px]'><a className='underline' href="#">ShopNow</a></span>
            </p>


        </div>
        <div className='flex items-center'>
          <p className='!text-[#FFF] text-xs lg:text-[14px]'>English</p>
          <p className='!text-[#FFF]'><RiArrowDropDownLine /></p>
        </div>

       


        
  </Flex>
</Container>
    </div>
    
    
    </>
  )
}

export default HeaderTop
