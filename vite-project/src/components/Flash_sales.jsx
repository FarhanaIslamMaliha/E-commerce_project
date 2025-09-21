import React from 'react'
import Slider from "react-slick";
import Flex from './Flex'
import Container from './Container'
import Heading from './Heading'
import LeftArrow from "../assets/LeftArrow.png"
import RightArrow from "../assets/RightArrow.png"
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
import { CiStar } from "react-icons/ci";
import Button from './Button'
import Counter from './Counter'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Rate } from 'antd';
import Explore_p_card from './Explore_p_card';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="black absolute top-0 right-5 block circle1"
      onClick={onClick}>
        <FaArrowRight className='right' />
        
      </div>
   
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="black block z-10 circle relative"
      onClick={onClick}>
        
        <FaArrowLeft className='left'/>
      </div>
  
  );
}



const Flash_sales = () => {
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow:<SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint:  992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
    ]
  };

   
   
  return (
    <> 
       
       <Container className= "mb-[80px]">
         
             <Heading title = "Today's"/>
             <Counter/>

      
      
            
   <div className="slider-container mt-[40px]">
      <Slider {...settings}>
        <div>
           <Explore_p_card
                    // image1= {F1} 
                    // ic1={Heart}
                    // ic2={Eye}
                    // text = "HAVIT HV-G92 Gamepad"
                    // dolllar = "$120"
                    // dolllar1 = "$160"
                    // fillstar={Star1}
                    // fillstar1={Star1}
                    // fillstar2={Star1}
                    // fillstar3={Star1}
                    // fillstar4={Star1}
                    // count= "(88)"
                       
                >
                 
                   
             <h3 className='text-[12px] font-normal px-[12px] py-[4px] bg-[#DB4444] rounded-[4px] text-white absolute top-[12px] left-[12px]'>-40%</h3>
             <button className='btn'><p>Add To Cart</p></button>
       
                </Explore_p_card>
               
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

       
       
      </Slider>
    </div>

           
            

           
       
         <Button className = "px-[48px]">
               View All Products
            </Button>
       </Container>

       <div>
            <hr className='text-[#b4b1b1]' />
      </div>
    
    </>
  )
}

export default Flash_sales
