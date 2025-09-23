import React from 'react'
import Container from './Container'
import tik from '../assets/tik.png'
import gamepad from '../assets/gamepad.png'
import monitor from '../assets/monitor.png'
import bkash from '../assets/bkash.png'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import nagad from '../assets/nagad.png'
import BreadCrumb from './BreadCrumb'

const CheckOut = () => {
    return (
        <>
            <Container>
               
                <BreadCrumb/>

                <div className='mt-[80px]'>
                    <h2 className='text-[36px] font-medium'>Billing Details</h2>
                </div>

                <div className='flex gap-[250px]'>
                    <div>
                        <div className='mt-8'>
                            <h3 className='text-[#7D8184]'>First Name*</h3>
                            <input type="" placeholder='' className='w-[470px] h-[50px]  bg-[#F5F5F5] mt-2' />
                        </div>

                        <div className='mt-8'>
                            <h3 className='text-[#7D8184]'>Company Name</h3>
                            <input type="" placeholder='' className='w-[470px] h-[50px]  bg-[#F5F5F5] mt-2' />
                        </div>

                        <div className='mt-8'>
                            <h3 className='text-[#7D8184]'>Street Address*</h3>
                            <input type="" placeholder='' className='w-[470px] h-[50px]  bg-[#F5F5F5] mt-2' />
                        </div>

                        <div className='mt-8'>
                            <h3 className='text-[#7D8184]'>Apartment, floor, etc. (optional)</h3>
                            <input type="" placeholder='' className='w-[470px] h-[50px] bg-[#F5F5F5] mt-2' />
                        </div>

                        <div className='mt-8'>
                            <h3 className='text-[#7D8184]'>Town/City*</h3>
                            <input type="" placeholder='' className='w-[470px] h-[50px]  bg-[#F5F5F5] mt-2' />
                        </div>

                        <div className='mt-8'>
                            <h3 className='text-[#7D8184]'>Phone Number*</h3>
                            <input type="" placeholder='' className='w-[470px] h-[50px]  bg-[#F5F5F5] mt-2' />
                        </div>

                        <div className='mt-8'>
                            <h3 className='text-[#7D8184]'>Email Address*</h3>
                            <input type="" placeholder='' className='w-[470px] h-[50px]  bg-[#F5F5F5] mt-2' />
                        </div>

                        <div className='flex gap-4 mt-[24px]'>
                            <img src={tik} alt="" />
                            <h4>Save this information for faster check-out next time</h4>
                        </div>
                    </div>



                    <div className='w-[527px] h-[600px] mt-[20px]'>
                        <div className='w-[422px]'>
                            <div className='flex justify-between'>
                                <div className='flex gap-3'>
                                    <img src={gamepad} alt="" />
                                    <p>LCD Monitor</p>
                                </div>
                                <div>
                                    <p>$650</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-[422px] mt-[40px]'>
                            <div className='flex justify-between'>
                                <div className='flex gap-3'>
                                    <img src={monitor} alt="" />
                                    <p>H1 Gamepad</p>
                                </div>
                                <div>
                                    <p>$1100</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between mt-6 border-b-2 pb-2'>
                            <h3>Subtotal:</h3>
                            <h3>$1750</h3>
                        </div>

                        <div className='flex justify-between mt-6 border-b-2 pb-2'>
                            <h3>Shipping:</h3>
                            <h3>$1100</h3>
                        </div>

                        <div className='flex justify-between mt-6  '>
                            <h3>Total:</h3>
                            <h3>$1750111</h3>
                        </div>

                        <div className='flex justify-between '>
                            <div className='flex gap-2 mt-8'>
                                <input type="radio" name="Bank" className='w-6 h-6 border-2 rounded-full ' />
                                <h3>Bank</h3>
                            </div>

                            <div className='flex mt-[40px] gap-2'>
                                <img src={bkash} alt="" className='w-[42px] h-[28px]' />
                                <img src={visa} alt="" className='w-[42px] h-[28px]' />
                                <img src={mastercard} alt="" className='w-[42px] h-[28px]' />
                                <img src={nagad} alt="" className='w-[42px] h-[28px]' />
                            </div>
                        </div>

                        <div>

                            <div class="space-y-2">
                                {/* <label class="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="bank"
                                        class="accent-black"
                                    />
                                    <span>Bank</span>
                                </label> */}
                                <label class="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        class="accent-black"
                                        checked
                                     className='w-6 h-6 '/>
                                    <span>Cash on delivery</span>
                                </label>
                            </div>

                            <div className='flex gap-3'>
                                <input type="text" placeholder='Coupon Code' className='w-[300px] h-[56px] border-1 rounded-xl mt-[32px] p-6'/>

                                <button className='w-[211px] h-[56px] bg-[#DB4444] mt-[30px] rounded-xl text-white'>Apply Coupon</button>
                            </div>

                            <div>
                                 <button className='w-[190px] h-[56px] bg-[#DB4444] mt-[30px] rounded-xl text-white'>Place Order</button>
                            </div>

                        </div>
                    </div>


                </div>
            </Container>
        </>
    )
}

export default CheckOut