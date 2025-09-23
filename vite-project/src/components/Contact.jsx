import React from 'react'
import Container from './Container'
import { HiOutlinePhone } from 'react-icons/hi'
import BreadCrumb from './BreadCrumb';
import { CiMail } from "react-icons/ci";

const Contact = () => {
    return (
        <>
            <Container>
                <BreadCrumb/>

                <div className='flex'>
                    <div>
                        <div>
                            <div className='mt-10 flex gap-8'>
                                <div className='w-[40px] h-[40px] bg-[#DB4444] rounded-full '>
                                    <HiOutlinePhone className='absolute top-59 left-47 text-white' />
                                </div>
                                <div className='mt-2'>
                                    <h3>Call To Us</h3>
                                </div>
                            </div>

                            <div className='mt-4 space-y-2 border-b-2 w-[270px] py-8 '>
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +8801611112222</p>
                            </div>
                        </div>

                        <div>
                            <div className='mt-10 flex gap-4'>
                                <div className='w-[40px] h-[40px] bg-[#DB4444] rounded-full '>
                                    <CiMail className='absolute top-113 left-47 text-white ' />
                                </div>
                                <div className='mt-2'>
                                    <h3>Write To US</h3>
                                </div>
                            </div>

                            <div className='mt-4 space-y-3 '>
                                <p>Fill out our form and we will contact <br /> you within 24 hours.</p>
                                <p>Emails: customer@exclusive.com</p>
                                <p>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[50px]'>
                        <div className='flex gap-4'>
                            <input type="text" placeholder='Your Name *' className='w-[235px] h-[50px] bg-[#F5F5F5] p-2' />

                            <input type="text" placeholder='Your Name *' className='w-[235px] h-[50px] bg-[#F5F5F5] p-2' />

                            <input type="text" placeholder='Your Name *' className='w-[235px] h-[50px] bg-[#F5F5F5] p-2' />
                        </div>
                        <div className='mt-8'>
                            <input type="email" name="Your Massage" placeholder='Your Massage' className='w-[737px] h-[207px] bg-[#F5F5F5] p-2 pb-[140px]' />
                        </div>
                    </div>


                </div>
                <div className='ml-[850px]'>
                    <button className='w-[215px] h-[56px] rounded-xl bg-[#DB4444] text-white'>Send Massage</button>
                </div>
            </Container>
        </>
    )
}

export default Contact