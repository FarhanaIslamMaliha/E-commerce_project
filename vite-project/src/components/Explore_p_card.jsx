import React from 'react'
import Flex from './Flex'
import Eye from "../assets/Eye.png"
import Heart from "../assets/Heart.png"
import Explore_products from './Explore_products'
import Star1 from "../assets/fillstar.png"
import Star2 from "../assets/emptystar.png"
import Star3 from "../assets/starhalffilled.png"
import { Rate } from 'antd';


const Explore_p_card = ({Img, title, discount, price, discountprice, rating, review }) => {

  // if (!item) return null;

  // const price = Number(item.price) || 0;
  // const discount = Math.min(Math.max(Number(item.discountPercentage) || 0, 0), 99.99);
  // const originalPrice = discount > 0 ? Math.floor(price / (1 - discount / 100)) : null;
  // const rating = Math.max(0, Math.min(5, Number(item.rating) || 0));

  return (
    <>
    <div>
         
             <div className='bg-[#F5F5F5] w-[270px] h-[250px] justify-center relative box xs:mx-auto overflow-hidden'>
                <img src={Img} alt="" />
                {/* <img className='absolute top-[12px] right-[12px]' src={ic1} alt="" />
                <img className='absolute top-[54px] right-[12px]' src={ic2} alt="" /> */}
                <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>{discount}%</h3>
             <button className='btn'><p>Add To Cart</p></button>

                 {/* {children} */}
         
     </div>
           
       
      
      <div className='ml-[10px] xs:text-center lg:text-left'>
           <h4 className='text-[16px] text-black font-medium mt-[16px]'>{title}</h4>
           <p className='text-[#DB4444] text-[16px] font-medium mt-[8px]'>{price} 
            <span className='text-gray-500 ml-[12px] line-through'>{discountprice}</span></p>
            <div>
               <div className='flex items-center xs:justify-center lg:justify-normal gap-[4px]'>
              {/* <img src={Star1} alt="" />
              <img src={Star1} alt="" />
              <img src={Star1} alt="" />
              <img src={Star1} alt="" />
              <img src={Star2} alt="" />
               */}

                     <Rate value={rating} />
              {/* <p className='text-gray-500 text-[14px] font-semibold ml-[8px]'>{item.reviews[0].rating}</p> */}
              <p className='text-gray-500 text-[14px] font-semibold ml-[8px]'>{review}</p>
              
                  
            

              
              
                </div>
            </div>


             {/* <label>
               
               <Flex className= "gap-[8px] mt-[8px]">
                <input type="radio" name="color" value="red" class="sr-only peer" checked />
                  <div class="w-4 h-4 rounded-full border-black border-2 peer-checked:bg-red-600 cursor-pointer"></div>
              <div class="w-4 h-4 rounded-full bg-red-600 border-2 peer-checked:border-red-600 cursor-pointer"></div>


               </Flex>
              
            </label> */}
           
           
           

            
      </div>


        
           
        </div>

        
    
      
       
    </>
  )
}

export default Explore_p_card
