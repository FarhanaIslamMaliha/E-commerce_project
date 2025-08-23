import React from 'react'
import Products from './Products'
import Card from './Card'
import Container from './Container'
import Flex from './Flex'
import Button from './Button' 
import W1 from "../assets/w1.png"
import W2 from "../assets/w2.png"
import W3 from "../assets/w3.png"
import W4 from "../assets/w4.png"
import J1 from "../assets/j1.png"
import J2 from "../assets/j2.png"
import F1 from "../assets/f1.png"
import F2 from "../assets/f2.png"
import Eye from "../assets/Eye.png"


import Trash from "../assets/trash.png"
import Heading from './Heading'
import Star1 from "../assets/fillstar.png"



const Wishlist_products = () => {
  return (
    <>
        <div>
             <Container className= "mt-[70px]">
                 <Flex>
            <h3 className='font-normal text-[20px]'>Wishlist(4)</h3>
            <div className='bg-white justify-between items-center w-full text-right'>
                <button className='px-[48px] py-[16px] border-1 rounded-[4px]'>
                    <a href="#">Move All To Bag</a>
                </button>


            </div>


        </Flex>

        
          <div>
            <Flex className = "gap-[30px] mt-[60px]">
        
               <Card
                    image1= {W1} 
                    ic1={Trash}
                    text = "Gucci duffle bag"
                    dolllar = "$960"
                    dolllar1 = "$1160"
                   
                >
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>-35%</h3>
             <button className='btn'><p>Add To Cart</p></button>
               </Card>

                <Card
                    image1= {W2} 
                    ic1={Trash}
                    text = "RGB liquid CPU Cooler"
                    dolllar = "$1960"
                   
                >
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>-35%</h3>
             <button className='btn'><p>Add To Cart</p></button>
               </Card>

                <Card
                    image1= {W3} 
                    ic1={Trash}
                    text = "GP11 Shooter USB Gamepad"
                    dolllar = "$550"
                   
                >
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>-35%</h3>
             <button className='btn'><p>Add To Cart</p></button>
               </Card>

                 <Card
                    image1= {W4} 
                    ic1={Trash}
                    text = "Quilted Satin Jacket"
                    dolllar = "$750"
                   
                >
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>-35%</h3>
             <button className='btn'><p>Add To Cart</p></button>
               </Card>
               
               </Flex>
               </div>




              

                <div className='mt-[80px]'>
                     <Flex>

                     <Heading
                    title = "Just For You"
                
                 />
            <div className='bg-white justify-between items-center w-full text-right'>
                <button className='px-[48px] py-[16px] border-1 rounded-[4px]'>
                    <a href="#">See All</a>
                </button>


            </div>
            </Flex>

            <Flex className = "gap-[30px] mb-[140px]">
                 <Card
                    image1= {J1} 
                    ic1={Eye}
                    text = "IPS LCD Gaming Monitor"
                    dolllar = "$1160"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    count= "(65)"
                >
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>-35%</h3>
             <button className='btn'><p>Add To Cart</p></button>
                </Card>
                 <Card
                    image1= {J2} 
                    ic1={Eye}
                    text = "IPS LCD Gaming Monitor"
                    dolllar = "$1160"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    count= "(65)"
                >
                   
             <button className='btn'><p>Add To Cart</p></button>
                </Card>

                 <Card
                    image1= {F1} 
                    ic1={Eye}
                    text = "HAVIT HV-G92 Gamepad"
                    dolllar = "$560"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    count= "(65)"
                >
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#00FF66] rounded-[4px] text-white absolute top-[12px] left-[12px]'>NEW</h3>
             <button className='btn'><p>Add To Cart</p></button>
                </Card>

                 <Card
                    image1= {F2} 
                    ic1={Eye}
                    text = "AK-900 Wired Keyboard"
                    dolllar = "$200"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    count= "(65)"
                >
                   
             <button className='btn'><p>Add To Cart</p></button>
                </Card>

            </Flex>
                


                </div>
           

        

             </Container>
            
        </div>
        
    
    
    </>
  )
}

export default Wishlist_products
