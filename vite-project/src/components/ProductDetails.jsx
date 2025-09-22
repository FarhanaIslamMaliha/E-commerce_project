import React, { useEffect, useState } from 'react'
import Container from './Container'
import Heading from './Heading'
import Eye from "../assets/Eye.png"
import Heart from "../assets/Heart.png"
import Card from './Card'
import F1 from "../assets/f1.png"
import F2 from "../assets/f2.png"
import F3 from "../assets/f3.png"
import F4 from "../assets/f4.png"
import Star1 from "../assets/fillstar.png"
import Star2 from "../assets/emptystar.png"
import Star3 from "../assets/starhalffilled.png"
import Flex from './Flex'
import BreadCrumb from './BreadCrumb'
import D1 from "../assets/d1.png"
import D2 from "../assets/d2.png"
import D3 from "../assets/d3.png"
import D4 from "../assets/d4.png"
import D5 from "../assets/d5.png"
import { FiHeart } from "react-icons/fi";
import axios from 'axios'
import { useParams } from 'react-router'
import { Rate } from 'antd';
import bus from '../assets/bus.png'
import round from '../assets/round.png'


const ProductDetails = () => {

    const {id} = useParams();

    const [allproducts, setAllProducts] = useState([])
      const [productImages, setProductImages] = useState([])
    
    async function getAllProducts(){
      let data = await axios.get(`https://dummyjson.com/products/${id}`);
      setAllProducts(data.data);
      setProductImages(data.data.images);
    }
    console.log(productImages)
    useEffect(() => {
       
        
        getAllProducts()
    
      },[]) ;


  return (
    <>
        <div>
            <Container className= "mb-[80px]">
                <BreadCrumb/>

                <Flex className="">
                  <div>
                    <div className='w-[20%]'>

                        { productImages.map((item,id)=> <img  key={id} src={item}></img>
                        
                        )}
                        
                       
                    </div>
                     <div className='w-[80%]'>
                        <img src={allproducts.thumbnail} alt="" />
                    </div>
                  </div>
                  
                   
                  <div>
                    <div className=''>
                        <h2 className='text-[24px] font-semibold'>{allproducts.title}</h2>
                        <Flex className="py-[16px] gap-[5px]">
                            <Rate value={allproducts.rating} />
                            <div className='border-[#807b7b] border-r-2 px-2'>
                        <h3 className='text-[#807b7b] text-[14px] mt-[5px]'>
                          {allproducts.review}
                        </h3>
                    </div>
                    <div>
                      <h3 className='text-[#00FFbb] text-[14px] mt-[5px]'>
                        In Stock
                      </h3>
                    </div>
                        </Flex>
                        

                    </div>
                    
                    <div className='b border-[#807b7b]'>
                        <h3 className='text-[14px]'>
                          ${allproducts.price}
                        </h3>
                        <p className='mt-4 border-b-2 border-[#807b7b] pt-[20px] pb-[20px]'>
                          {allproducts.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-[8px]">
                            <span className="text-[20px] ">Colours:</span>

                            
                            <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-blue-300">
                                </div>
                                
                            </div>

                            
                            <div className="w-6 h-6 rounded-full bg-rose-500">


                            </div>



                    </div>


                    <div className='flex gap-4 mt-[24px]'>
                                <h3 className='text-[20px] mt-[10px]'>Size:</h3>
                                <div className='w-[32px] h-[32px] rounded-md border-2 border-[#807b7b] mt-[8px] hover:bg-[#DB4444]'>
                                    <h3 className='text-center'>XS</h3>
                                </div>

                                <div className='w-[32px] h-[32px] rounded-md border-2 border-[#807b7b] mt-[8px] hover:bg-[#DB4444]'>
                                    <h3 className='text-center'>S</h3>
                                </div>

                                <div className='w-[32px] h-[32px] rounded-md border-2 border-[#807b7b] mt-[8px] hover:bg-[#DB4444]'>
                                    <h3 className='text-center'>M</h3>
                                </div>

                                <div className='w-[32px] h-[32px] rounded-md border-2 border-[#807b7b] mt-[8px] hover:bg-[#DB4444]'>
                                    <h3 className='text-center'>L</h3>
                                </div>

                                <div className='w-[32px] h-[32px] rounded-md border-2 border-[#807b7b] mt-[8px] hover:bg-[#DB4444]'>
                                    <h3 className='text-center'>XL</h3>
                                </div>
                     </div>

                     <div className="flex items-center justify-between border border-gray-300 rounded-md overflow-hidden w-max text-lg font-medium mt-4">
                               
                                <button className="w-10 h-10 border-r border-[#807b7b] hover:bg-[#DB4444]">−</button>

                                
                                <div className="w-10 h-10 flex items-center justify-center hover:bg-[#DB4444]">
                                    2
                                </div>

                                
                                <button className="w-10 h-10 hover:bg-[#DB4444] text-white rounded-r-md">
                                    +
                                </button>

                            </div>

                            <div className='ml-[150px] mt-[-40px] flex gap-3 '>

                                <button className="w-[165px] h-[44px] bg-[#DB4444] text-white rounded-md  ">Buy Now</button>

                                <div className='w-[40px] h-[40px] border-2 border-[#807b7b] rounded-md '>
                                    <FiHeart className='mx-auto mt-[10px] ' />
                                </div>
                            </div>


                            <div className='w-[420px] h-[180px] border-2 border-[#807b7b] mt-6'>
                                <div className='flex gap-6 mt-4  border-b-2 w-[420px] border-[#807b7b] pb-4'>
                                    <div className='mt-[10px]'>
                                        <img src={bus} alt="" className='ml-[10px]' />
                                    </div>
                                    <div className='space-y-1 border-b-2  border-[#807b7b]'>
                                        <h3 className='font-medium text-[16px]'>Free Delivery</h3>
                                        <p className='inline-block text-[12px] font-medium'>Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>
                                 <div className='flex gap-6 mt-4 '>
                                    <div className='mt-[10px] '>
                                        <img src={round} alt="" className='ml-[10px]' />
                                    </div>
                                    <div className='space-y-1 '>
                                        <h3 className='font-medium text-[16px]'>Return Delivery</h3>
                                        <p>Free 30 Days Delivery Returns. Details</p>
                                    </div>
                                </div>
                                </div>

                                


                      

                        

                  </div>

                </Flex>
         
             <Heading title = "Related Item"/>
      
       <Flex className='gap-[30px]'>


        <div>
           <Card
                    image1= {F1} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "HAVIT HV-G92 Gamepad"
                    dolllar = "$120"
                    dolllar1 = "$160"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    fillstar4={Star1}
                    count= "(88)"
                       
                >
                 
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>-40%</h3>
             <button className='btn'><p>Add To Cart</p></button>
       
                </Card>
               
        </div>
        
         <div>
           <Card
                    image1= {F2} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "AK-900 Wired Keyboard"
                    dolllar = "$960"
                    dolllar1 = "$1160"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    count= "(75)"
                >
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>-35%</h3>
             <button className='btn'><p>Add To Cart</p></button>
                </Card>
               
        </div>

        <div>
         <Card
                    image1= {F3} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "IPS LCD Gaming Monitor"
                    dolllar = "$370"
                    dolllar1 = "$400"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    fillstar4={Star1}
                    count= "(99)"
                >
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>-30%</h3>
              <button className='btn'><p>Add To Cart</p></button>
                </Card>
        </div>

        <div>
         <Card
                    image1= {F4} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "S-Series Comfort Chair "
                    dolllar = "$375"
                    dolllar1 = "$400"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    halfstar={Star3}
                    count= "(99)"    
                >
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>-25%</h3>
              <button className='btn'><p>Add To Cart</p></button>
                </Card>
        </div>


    </Flex>

       

      </Container>
  
      
        </div>
    </>
    
  )
}

export default ProductDetails
