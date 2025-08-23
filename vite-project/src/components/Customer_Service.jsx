import React from 'react'
import S from "../assets/S.png"
import S1 from "../assets/S1.png"
import S2 from "../assets/S2.png"
import Flex from './Flex'
import Container from './Container'

const Customer_Service = () => {
  return (
    <>
        <div className='mt-[140px] mb-[140px]'>
            <Container>
            <Flex>
                <div className='mx-auto text-center'>
                    <img className='mx-auto mb-[24px]' src={S} alt="" />
                    <h3 className='font-semibold text-[20px] mt-[8px]'>FREE AND FAST DELIVERY</h3>
                    <p className='regular text-[14px]'>Free delivery for all orders over $140</p>
                </div>

                 <div className='mx-auto text-center'>
                    <img className='mx-auto mb-[24px]' src={S1} alt="" />
                    <h3 className='font-semibold text-[20px]'>24/7 CUSTOMER SERVICE</h3>
                    <p className='regular text-[14px]'>Friendly 24/7 customer support</p>
                </div>

                 <div className='mx-auto text-center'>
                    <img className='mx-auto mb-[24px]' src={S2} alt="" />
                    <h3 className='font-semibold text-[20px] mt-[8px]'>MONEY BACK GUARANTEE</h3>
                    <p className='regular text-[14px]'>We reurn money within 30 days</p>
                </div>
            </Flex>
            </Container>
      
        </div>
    </>
    
  )
}

export default Customer_Service
