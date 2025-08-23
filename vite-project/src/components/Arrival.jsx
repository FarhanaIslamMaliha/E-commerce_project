import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Fe1 from "../assets/Fe1.png"
import Fe2 from "../assets/Fe2.png"
import Fe3 from "../assets/Fe3.png"
import Fe4 from "../assets/Fe4.png"
import Img_det from './Img_det'

const Arrival = () => {
  return (
    <>
        <div>
            <Container className= "mt-[80px]">
        
             <Heading
                    title = "Featured"
                    head = "New Arrival"
                
                 />

                  <div class="grid grid-cols-2 gap-x-8 gap-y-4">  
                         <div className='bg-black rounded-[4px] relative'>

                    
                        <img src={Fe1} alt="" />
                        <Img_det
                            head = "PlayStation 5"
                            det = "Black and White version of the PS5 coming out on sale."
                        
                        
                        />
                        </div>
                        
                
                    
            <div>
                <div class="grid grid-rows-2 gap-x-8 gap-y-4">
                     <div className='bg-black rounded-[4px] relative'>

                    <img src={Fe2} alt="" />

                    <Img_det
                            head = "Women’s Collections"
                            det = "Featured woman collections that give you another vibe."
                        
                        
                        />
                    </div>
                    
                    <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                        <div className='bg-black !rounded-[4px] relative'>
                            <img className ='mx-auto pt-[30px]' src={Fe3} alt="" />
                            <Img_det
                            head = "Speakers"
                            det = "Featured woman collections that give you another vibe."
                            className= "!mb-[8px]"
                            className1 = "!mb-[8px]"
                        
                        
                        />

                        </div> 
                        <div className='bg-black !rounded-[4px] relative'>
                            <img className ='mx-auto pt-[30px]' src={Fe4} alt="" />
                             <Img_det
                                head = "Perfume"
                                det = "GUCCI INTENSE OUD EDP"
                                className= "!mb-[8px]"
                                className1 = "!mb-[8px]"
                        
                        
                            />
                            
                        </div> 
                    </div> 
                </div>
                
            </div>  
            
            
        </div>
            </Container>
        </div>


       
    
    
    </>
  )
}

export default Arrival
