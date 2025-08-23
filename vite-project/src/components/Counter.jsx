import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';                           
import Flex from './Flex'
import LeftArrow from "../assets/LeftArrow.png"
import RightArrow from "../assets/RightArrow.png"

const Counter = () => {
    const conduct_date = '2025-07-30 16:54:00';
    const [count, setCount] = useState({});
    console.log(count);
    
   useEffect(() =>{
    const countDown = countDownDateAndTime(conduct_date);
    setCount(countDown);

   });
  return (
    <>
        <Flex className="">
                
                 <div>
                    <h1 className='font-semibold text-5xl tracking-[4%] pt-6'>Flash Sales</h1>
                 </div>
                 <Flex className='ml-[87px] mt-5'>
                    <div>
                        <h5 className='text-[12px]'>Days</h5>
                        <h2 className='text-[32px] font-bold'>{count.days} <span className='px-[17px] text-[#E07575]'>:</span></h2>
                    </div>
                     <div>
                        <h5 className='text-[12px]'>Hours</h5>
                        <h2 className='text-[32px] font-bold'>{count.hours} <span className='px-[17px] text-[#E07575]'>:</span></h2>
                    </div>
                    <div>
                        <h5 className='text-[12px]'>Minutes</h5>
                        <h2 className='text-[32px] font-bold'>{count.minutes} <span className='px-[17px] text-[#E07575]'>:</span></h2>
                    </div>
                    <div>
                        <h5 className='text-[12px]'>Seconds</h5>
                        <h2 className='text-[32px] font-bold'>{count.seconds}</h2>
                    </div>
                    
                 </Flex>

                 {/* <div className='flex items-center gap-[8px] absolute top-0 right-0'>
                    <img src={LeftArrow} alt="" />
                    <img src={RightArrow} alt="" />
                 </div> */}
                

            </Flex>
    
    </>
    
  )
}

export default Counter
