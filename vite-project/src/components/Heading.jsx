import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Rect from "../assets/Rectangle.png"

const Heading = ({title, head}) => {
  return (
    <>
    <Container>
        <Flex className='items-center gap-[16px] mb-[24px]'>
            {/* <div> 
                <img src={Rect} alt="" />
                
            </div> */}
            <div>
              <h5 className='text-primary text-[16px] border-l-20 h-10 flex items-center pl-4 font-semibold'>{title}</h5>
              <h2 className='font-semibold text-5xl tracking-[4%] pt-6'>{head}</h2>
            </div>
        </Flex>
        
    </Container>
    </>
    
  )
}

export default Heading
