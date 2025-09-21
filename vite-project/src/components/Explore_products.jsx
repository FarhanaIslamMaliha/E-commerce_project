import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
import Heading from './Heading'
import Card from './Card'
import Ex1 from "../assets/Ex1.png"
import Ex2 from "../assets/Ex2.png"
import Ex3 from "../assets/Ex3.png"
import Ex4 from "../assets/Ex4.png"
import Ex5 from "../assets/Ex5.png"
import Ex6 from "../assets/Ex6.png"
import Ex7 from "../assets/Ex7.png"
import Ex8 from "../assets/Ex8.png"
import Star1 from "../assets/fillstar.png"
import Star2 from "../assets/emptystar.png"
import Star3 from "../assets/starhalffilled.png"
import Eye from "../assets/Eye.png"
import Heart from "../assets/Heart.png"
import Explore_p_card from './Explore_p_card'


const Explore_products = () => {
   
  return (
     <>
         <div>
            <Container className= "mt-[70px]">
        <Flex>
            <Heading
                    title = "Our Products"
                    head = "Explore Our Products"
                
                 />
           
        </Flex>

      <Flex className = "gap-[30px]">
          <div>
           <Card
                    image1= {Ex1} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "Breed Dry Dog Food"
                    dolllar = "$100"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star2}
                    fillstar4={Star2}
                    count= "(35)"
                       
                >
                 
                   
             <button className='btn'><p>Add To Cart</p></button>
       
                </Card>
               
        </div>
        
         <div>
           <Card
                    image1= {Ex2} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "CANON EOS DSLR Camera"
                    
                    dolllar = "$360"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    fillstar4={Star2}
                    count= "(95)"
                >
                   
             <button className='btn'><p>Add To Cart</p></button>
                </Card>
               
        </div>

        <div>
         <Card
                    image1= {Ex3} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "ASUS FHD Gaming Laptop"
                    dolllar = "$700"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    fillstar4={Star2}
                    
                    count= "(325)"
                >
                   
              <button className='btn'><p>Add To Cart</p></button>
                </Card>
        </div>

         <div>
         <Card
                  
                >
                   
              <button className='btn'><p>Add To Cart</p></button>
                </Card>
        </div>


       

       

      </Flex>

      <Flex className = "gap-[30px] mt-[60px]">

            <div>
               <Explore_p_card

               image1= {Ex4} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "Kids Electric Car"
                    dolllar = "$960"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    fillstar4={Star1}
                    count= "(65)"
                    
               
               
               >


                  
                       
                
                
                
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#00FF66] rounded-[4px] text-white absolute top-[12px] left-[12px]'>NEW</h3>
             <button className='btn'><p>Add To Cart</p></button>
                  
               </Explore_p_card>
               
             </div>

               <div>
                <Explore_p_card
                    image1= {Ex5} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "Jr. Zoom Soccer Cleats"
                    dolllar = "$1160"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    fillstar4={Star1}
                    count= "(35)"
                       
                >
                 
                   
             <button className='btn'><p>Add To Cart</p></button>
       
                </Explore_p_card>
               
             </div>

              <div>
                <Explore_p_card
                    image1= {Ex6} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "GP11 Shooter USB Gamepad"
                    dolllar = "$960"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    halfstar={Star3}
                    count= "(55)"
                       
                >
                 
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#00FF66] rounded-[4px] text-white absolute top-[12px] left-[12px]'>NEW</h3>
             <button className='btn'><p>Add To Cart</p></button>
       
                </Explore_p_card>
               
             </div>

                <div>
                <Explore_p_card
                    image1= {Ex8} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "Quilted Satin Jacket"
                    dolllar = "$660"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    halfstar={Star3}
                    count= "(55)"
                       
                >
                 
                   
             <button className='btn'><p>Add To Cart</p></button>
       
                </Explore_p_card>
               
             </div>

            



      </Flex>
      
        <Button className = "px-[48px]">
               View All Products
            </Button>
       
    

             
            </Container>

      
        </div>

    </>
   
  )
}

export default Explore_products
