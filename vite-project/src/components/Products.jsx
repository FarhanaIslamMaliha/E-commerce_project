import React from 'react'
import Container from './Container'
import P1 from "../assets/P1.png"
import P2 from "../assets/P2.png"
import P3 from "../assets/P3.png"
import P4 from "../assets/P4.png"
import Flex from './Flex'
import Heading from './Heading'
import Button from './Button'
import Card from './Card'
import Eye from "../assets/Eye.png"
import Heart from "../assets/Heart.png"
import Star1 from "../assets/fillstar.png"
import Star3 from "../assets/starhalffilled.png"






import BreadCrumb from './BreadCrumb'

const Products = () => {
  return (
    <>
         <div>
            <Container className= "mt-[70px]">
              {/* <BreadCrumb/> */}
        <Flex>
            <Heading
                    title = "This Month"
                    head = "Best Selling Products"
                
                 />
            <Button className = "w-[170px] h-[56px]">
               View All
            </Button>
                

        </Flex>

      <Flex className = "gap-[30px]">
          <div>
           <Card
                    image1= {P1} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "The north coat"
                    dolllar = "$260"
                    dolllar1 = "$360"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    fillstar4={Star1}
                    count= "(65)"
                       
                >
                 
                   
             <button className='btn'><p>Add To Cart</p></button>
       
                </Card>
               
        </div>
        
         <div>
           <Card
                    image1= {P2} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "Gucci duffle bag"
                    dolllar = "$960"
                    dolllar1 = "$1160"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    halfstar={Star3}
                    count= "(65)"
                >
                   
             <button className='btn'><p>Add To Cart</p></button>
                </Card>
               
        </div>

        <div>
         <Card
                    image1= {P3} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "RGB liquid CPU Cooler"
                    dolllar = "$160"
                    dolllar1 = "$$170"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    halfstar={Star3}
                    
                    count= "(65)"
                >
                   
              <button className='btn'><p>Add To Cart</p></button>
                </Card>
        </div>

        <div>
         <Card
                    image1= {P4} 
                    ic1={Heart}
                    ic2={Eye}
                    text = "Small BookSelf"
                    dolllar = "$360"
                    fillstar={Star1}
                    fillstar1={Star1}
                    fillstar2={Star1}
                    fillstar3={Star1}
                    fillstar4={Star1}
                    
                    count= "(65)"    
                >
                   
              <button className='btn'><p>Add To Cart</p></button>
                </Card>
        </div>


      </Flex>
      
       
       
    

             
            </Container>

      
        </div>

    </>
   
  )
}

export default Products
