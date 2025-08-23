import React from 'react'
import Container from './Container'
import Counter1 from './Counter1'
import Button from './Button'
import Flex from './Flex'
import E1 from "../assets/E1.png"

const Experience = () => {
  return (
    <>
         <div>
            <Container>
                <div className='mt-[140px] bg-black'>
                    <Flex className = "gap-[27px]">
                        <div className='pt-[69px] pb-[69px] pl-[56px]'>
                            <p className='text-[16px] font-semibold text-[#00FF66]'>Categories</p>
                            <h2 className='text-white text-[48px] font-semibold w-[443px] mt-[32px]'>Enhance Your Music Experience</h2>
                            <Counter1></Counter1>
                            <Button className = "!bg-[#00FF66] ml-0">
                                Buy Now!
                            </Button>
                        </div>

                        <div className='mt-[82px]'>
                            <img src={E1} alt="" />
                        </div>
                    </Flex>
                </div>
            </Container>
      
         </div>
    
    
    </>
   
  )
}

export default Experience
