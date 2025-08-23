import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Send from "../assets/icon-send.png"
import Qr from "../assets/Qrcode1.png"
import Gp from "../assets/GooglePlay.png"
import App from "../assets/AppStore.png"
import I1 from "../assets/I1.png"
import I2 from "../assets/I2.png"
import I3 from "../assets/I3.png"
import I4 from "../assets/I4.png"

const Footer = () => {
  return (
    <>
        <div className='bg-black pt-[80px] pb-[124px]'>
            <Container>
                

                <Flex className="text-white gap-[87px]">
                    
                    <ul>
                        <li className='font-bold text-[24px]'>Exclusive</li>
                        <li className='font-medium text-[20px] mt-[24px]'>Subscribe</li>
                        <li className='mt-[24px]'>Get 10% off your first order</li>
                        <li>
                            <Flex>
                                <div className='relative mt-[24px]'>
                                    <input className='border-2 border-white w-[217px] py-[12px] px-[16px] rounded-[4px]' type="email" placeholder='Enter your email'/>
                                     <div className='absolute top-4 right-3'>
                                    <img src={Send} alt="" />

                                </div>
                                </div>
                               
                                
                                
                            </Flex>
                            
                            </li>
                    </ul>


                     <ul>
                        <li className='font-medium text-[20px]'>Support</li>
                        <li className='mt-[24px] w-[175px]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li className='mt-[24px]'>exclusive@gmail.com</li>
                        <li className='mt-[24px]'>+88015-88888-9999</li>
                       
                    </ul>

                     <ul>
                        <li className='font-medium text-[20px]'>Account</li>
                        <li className='mt-[24px]'>My Account</li>
                        <li className='mt-[24px]'>Login / Register</li>
                        <li className='mt-[24px]'>Cart</li>
                        <li className='mt-[24px]'>Wishlist</li>
                        <li className='mt-[24px]'>Shop</li>
                       
                    </ul>

                     <ul>
                        <li className='font-medium text-[20px]'>Quick Link</li>
                        <li className='mt-[24px] w-[109px]'>Privacy Policy</li>
                        <li className='mt-[24px]'>Terms Of Use</li>
                        <li className='mt-[24px]'>FAQ</li>
                        <li className='mt-[24px]'>Contact</li>
                       
                    </ul>

                     <ul>
                        <li className='font-medium text-[20px]'>Download App</li>
                        <li className='mt-[24px] text-[12px] font-medium text-[#FAFAFA] w-[194px]'>Save $3 with App New User Only</li>
                        <li className='mt-[24px] grid grid-cols-2'>
                            <div>
                                <img src={Qr} alt="" />
                            </div>
                             <div className='grid grid-rows-2'>
                                <div>
                                     <img src={Gp} alt="" />

                                </div>
                                 <div>
                                     <img src={App} alt="" />

                                </div>
                                
                               
                            </div>
                            
                        </li>
                        <li className='mt-[24px]'>
                            <Flex className = "gap-[23px]">
                                <img src={I1} alt="" />
                                <img src={I2} alt="" />
                                <img src={I3} alt="" />
                                <img src={I4} alt="" />
                            </Flex>
                        </li>
                        
                       
                    </ul>


                </Flex>
            </Container>
      
        </div>
    
    
    
    </>
    
  )
}

export default Footer
