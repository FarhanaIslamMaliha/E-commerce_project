import React from 'react'
import Flex from './Flex'
import Eye from "../assets/Eye.png"
import Heart from "../assets/Heart.png"
import Explore_products from './Explore_products'
import Star1 from "../assets/fillstar.png"
import Star2 from "../assets/emptystar.png"
import Star3 from "../assets/starhalffilled.png"
import { Rate } from 'antd';
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux'
import { AddToCartReducer } from '../Slices/ProductSlice'



const Explore_p_card = ({Img, title, discount, price, discountprice, rating, review,id, productDetails }) => {
  

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleProductDtails = () => {
      navigate(`/P_Details/${id}`);
     
  }
 function handleAddCart(e){
  e.preventDefault();
  dispatch(AddToCartReducer(productDetails));
  
  }

  return (
    <>
    <div>
         
             <div className='bg-[#F5F5F5] w-[270px] h-[250px] justify-center relative box xs:mx-auto overflow-hidden'>
                <img src={Img} onClick={handleProductDtails}alt="" />
               
                <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>{discount}%</h3>
                
                      <button 
                          onClick={handleAddCart} 
                          className="btn relative z-10"
                        >
                    <p>Add To Cart</p>
                  </button>

            

                 {/* {children} */}
         
     </div>
           
    
      <div className='ml-[10px] xs:text-center lg:text-left'>

           <h4 className='text-[16px] text-black font-medium mt-[16px]'>{title}</h4>
           <p className='text-[#DB4444] text-[16px] font-medium mt-[8px]'>{price} 
            <span className='text-gray-500 ml-[12px] line-through'>{discountprice}</span></p>
            <div>
               <div className='flex items-center xs:justify-center lg:justify-normal gap-[4px]'>
          
                     <Rate value={rating} />
              <p className='text-gray-500 text-[14px] font-semibold ml-[8px]'>{review}</p>
        
              
                </div>
            </div>

      </div>


        
           
        </div>

        
    
      
       
    </>
  )
}

export default Explore_p_card
