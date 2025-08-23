import React, { useState } from 'react'
import Container from './Container' 
import Flex from './Flex'
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from "../assets/Exclusive.png"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router";




const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  
   const handleClick = () => {
     setIsOpen(!isOpen);
   }

  return (
    <>
    
<nav className='relative'>
    <Container className='pb-[15px]'>
      <div className='mt-5 lg:mt-[50px]'> 
        <Flex className="justify-between items-center">
      
        <div className='w-[20%]'>
          <img src={Logo} alt=""/>
        </div>

        {/* <div className='relative md:hidden lg:hidden'>
          <img className='fixed top-[77px] left-[30px] sm:top-[66px]' src={Logo} alt=""/>
        </div> */}

          <div className={`lg:flex items-center absolute lg:static top-[50px] left-0 w-full lg:w-[80%] lg:bg-transparent lg:text-black z-2 bg-black text-white px-2 py-4 ${isOpen ? 'block' : 'hidden'}`}>
           
          <ul className='flex-wrap lg:flex lg:ml-[80px] lg:mr-[50px] gap-10 text-[16px] mr-[148px]'>
            <li className='custom-hover relative'>
              <NavLink to="/" end>
                  Home
              </NavLink>
              </li>
            <li className='custom-hover relative'>Contact</li>
            <li className='custom-hover relative'>About</li>
            <li className='custom-hover relative'>Sign Up</li>
            
          </ul>
          <div className="xs:flex sm:flex gap-[24px] items-center xs:mt-[60px] sm:mt-0 sm:mx-auto"> 
          <div className='relative'>
             <input type="text" name='text' className = 'bg-[#F5F5F5] py-[7px] pr-3 pl-[20px] lg:w-[243px] rounded-[4px] text-[12px] text-gray-500' 
            placeholder='What are you looking for?'/> 
                  <CiSearch className="absolute top-[4px] right-4 text-black text-2xl" />
          </div>
           
            <div className='text-[32px] flex gap-[16px]'>
          <CiHeart />
          <IoCartOutline />
        </div>
        </div>

          {/* <ul className='block bg-gray-500 mx-auto text-center text-[#fff] z-2 w-[130px] lg:hidden mb-[20px] absolute top-0 right-[43px]'>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
            
          </ul> */}

          
            </div>
      
        
         

      
    </Flex>
    <FaBars className='block lg:hidden absolute top-0 right-[10px] text-2xl' onClick={handleClick} />

      </div>
    
</Container>

<div>
    <hr className='text-[#b4b1b1] xs:mt-[20px]' />
    </div>
</nav>

     

       

    </>
    
  )
}

export default Navbar
