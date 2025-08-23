import React from 'react'
import Slider from "react-slick";
import Container from './Container'
import Flex from './Flex'
import BannerImg from "../assets/banner.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Banner = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    // autoplay: true,
    // autoplaySpeed: 2000
    appendDots: dots => (
      <div
        
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
       className='w-3 h-3 rounded-full'
      >
        
      </div>
    )
  
  };
  
  return (
   <>
        <Container className="mb-[140px]">
            <Flex className = "lg:flex items-center lg:gap-[61px]">
              
             <div className='bnr absolute lg:static top-[250px] lg:w-auto'>
                <ul className='grid grid-cols-3 lg:grid-cols-none lg:text-left lg:pr-4 lg:w-[217px] lg:!pt-[40px] text-xs lg:text-base lg:mt-0 mt-[50px] lg:border-r-[1px] border-solid border-[#969393] gap-x-[20px]'>
                  <li className='flex items-center lg:justify-between justify-baseline'>Woman’s Fashion<a href="#"><MdKeyboardArrowRight /></a> </li>
                  <li className='flex items-center lg:justify-between justify-baseline'>Men’s Fashion<a href="#"><MdKeyboardArrowRight /></a></li>
                  <li>Electronics</li>
                  <li>Home & Lifestyle</li>
                  <li>Medicine</li>
                  <li>Sports & Outdoor</li>
                  <li>Baby’s & Toys</li>
                  <li>Groceries & Pets</li>
                  <li>Health & Beauty</li>
                 </ul>

             </div>
            <div className="w-full lg:mt-10 img-width overflow-hidden">
                 <Slider {...settings}>
                      <div>
                          <img src={BannerImg} alt="" />
                      </div>
                      <div>
                          <img src={BannerImg} alt="" />
                      </div>
                      <div>
                          <img src={BannerImg} alt="" />
                      </div>
                      <div>
                          <img src={BannerImg} alt="" />
                      </div>
                      <div>
                          <img src={BannerImg} alt="" />
                      </div>
                      <div>
                          <img src={BannerImg} alt="" />
                      </div>
                  </Slider>

            </div>
   
            
              
            </Flex>
        </Container>
        
   </>
  )
}

export default Banner
