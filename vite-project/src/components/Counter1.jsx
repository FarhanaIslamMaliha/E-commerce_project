import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';                           
import Flex from './Flex'
import LeftArrow from "../assets/LeftArrow.png"
import RightArrow from "../assets/RightArrow.png"





const Counter1 = () => {
 const conduct_date = '2025-08-10 16:54:00';
    const [count, setCount] = useState({});
    console.log(count);
    
   useEffect(() =>{
    const countDown = countDownDateAndTime(conduct_date);
    setCount(countDown);

   });


  return (
      <>
        <div className='mt-[32px]'>
                
                
                 <Flex className = "gap-[24px]">
                   <div className='rounded-full bg-white w-[62px] h-[62px] flex flex-col justify-center items-center'>
                     <div className='text-center'>
                        <h2 className='text-[16px] font-semibold'>{count.days}</h2>
                        <h5 className='text-[11px] font-normal'>Days</h5>
                    </div>
                   </div>
                   <div className='rounded-full bg-white w-[62px] h-[62px] flex flex-col justify-center items-center'>
                     <div className='text-center'>
                        <h2 className='text-[16px] font-semibold'>{count.hours}</h2>
                        <h5 className='text-[11px] font-normal'>Hours</h5>
                    </div>
                   </div>

                   <div className='rounded-full bg-white w-[62px] h-[62px] flex flex-col justify-center items-center'>
                     <div className='text-center'>
                        <h2 className='text-[16px] font-semibold'>{count.minutes}</h2>
                        <h5 className='text-[11px] font-normal'>Minutes</h5>
                    </div>
                   </div>

                   <div className='rounded-full bg-white w-[62px] h-[62px] flex flex-col justify-center items-center'>
                     <div className='text-center'>
                        <h2 className='text-[16px] font-semibold'>{count.seconds}</h2>
                        <h5 className='text-[11px] font-normal'>Seconds</h5>
                    </div>
                   </div>
                  
                 </Flex>

                
                

            </div>
    
    </>
  )
}

export default Counter1
