import React from 'react'
import Slider from "react-slick";
import Heading from './Heading'
import Container from './Container'
import LeftArrow from "../assets/LeftArrow.png"
import RightArrow from "../assets/RightArrow.png"
import Flex from './Flex'
import Cat1 from "../assets/Cat1.png"
import Cat2 from "../assets/Cat2.png"
import Cat3 from "../assets/Cat3.png"
import Cat4 from "../assets/Cat4.png"
import Cat5 from "../assets/Cat5.png"
import Cat6 from "../assets/Cat6.png"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


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

const Categories = () => {
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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

        <div>
            <Container className= "mt-[80px]">
        
             <Heading
                    title = "Categories"
                    head = "Browse By Category"
                
                 />

      <div className="slider-container mt-[40px]">
         <Slider {...settings}>
                  <div>
                     <img src={Cat1} alt="" />
                 </div>
                  <div>
                   <img src={Cat2} alt="" />
                 </div>
                  <div>
                   <img src={Cat3} alt="" />
                 </div>
                  <div>
                   <img src={Cat4} alt="" />
                 </div> 
                 <div>
                   <img src={Cat5} alt="" />
                 </div> 
                 <div>
                   <img src={Cat6} alt="" />

                 </div> 
                 <div>
                   <img src={Cat1} alt="" />


                 </div>
       
       
       
         </Slider>
      </div>

           <div className='pt-[50px]'>
               <hr className='text-[#b4b1b1] xs:mt-[20px]' />
            </div>
            
            </Container>
      
       </div>
    
    </>
    
  )
}

export default Categories
