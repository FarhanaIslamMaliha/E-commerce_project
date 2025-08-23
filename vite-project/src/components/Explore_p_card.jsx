import React from 'react'
import Flex from './Flex'
import Explore_products from './Explore_products'

const Explore_p_card = ({image1, ic1, ic2, children, text, dolllar, dolllar1, count, fillstar, fillstar1,fillstar2,fillstar3,fillstar4,halfstar}) => {
  return (
    <>
    <div>
         <Flex className= "items-center">
             <div className='bg-[#F5F5F5] w-[270px] h-[250px] flex items-center justify-center relative box xs:mx-auto'>
                <img src={image1} alt="" />
                <img className='absolute top-[12px] right-[12px]' src={ic1} alt="" />
                <img className='absolute top-[54px] right-[12px]' src={ic2} alt="" />
                 {children}
         
     </div>
           
       
       </Flex>
      <div className='ml-[10px] xs:text-center lg:text-left'>
           <h4 className='text-[16px] text-black font-medium mt-[16px]'>{text}</h4>
           <p className='text-[#DB4444] text-[16px] font-medium mt-[8px]'>{dolllar} 
            <span className='text-gray-500 ml-[12px] line-through'>{dolllar1}</span></p>
            <div>
               <div className='flex items-center xs:justify-center lg:justify-normal gap-[4px]'>
              <img src={fillstar} alt="" />
              <img src={fillstar1} alt="" />
              <img src={fillstar2} alt="" />
              <img src={fillstar3} alt="" />
              <img src={fillstar4} alt="" />
              <img className='ml-[-5px]' src={halfstar} alt=""/>
              <p className='text-gray-500 text-[14px] font-semibold ml-[8px]'>{count}</p>
              

            

              
              
                </div>
            </div>


             <label>
               
               <Flex className= "gap-[8px] mt-[8px]">
                <input type="radio" name="color" value="red" class="sr-only peer" checked />
                  <div class="w-4 h-4 rounded-full border-black border-2 peer-checked:bg-red-600 cursor-pointer"></div>
              <div class="w-4 h-4 rounded-full bg-red-600 border-2 peer-checked:border-red-600 cursor-pointer"></div>


               </Flex>
              
            </label>
           
           
           

            
      </div>


        
           
        </div>

        
    
      
       
    </>
  )
}

export default Explore_p_card
