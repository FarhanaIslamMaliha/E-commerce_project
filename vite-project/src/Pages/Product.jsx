import React, { useEffect, useState } from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import Card from '../components/Card'
import Explore_p_card from '../components/Explore_p_card'
import axios from "axios"
import Skeleton from '../components/Skeleton'
import Paginations from '../components/Paginations'


const Product = () => {

  const [allproducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [optionValue,setOptionValue] = useState(6);


  async function getAllProducts(){
      let data = await axios.get("https://dummyjson.com/products");
      setAllProducts(data.data.products);
     setLoading(false)
    }

  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then((data) => setAllProducts(data.products));
    
    getAllProducts()

  },[]) 

  return (
    <>
        <div>
            <Container>
               <BreadCrumb/>
            <Flex>
                {/* <div className='w-[25%] bg-amber-300 h-80'></div> */}

                <div className='bnr absolute lg:static top-[250px] lg:w-auto'>
                  <div className='grid grid-cols-3 lg:grid-cols-none lg:text-left lg:pr-4 lg:w-[217px] text-xs lg:text-base lg:mt-0 mt-[50px] gap-x-[20px]'>
                    
                  
                  <h3 className='mb-[15px] font-bold text-[20px]'>Shop by Category</h3>
                                <ul>
                                  <li className='flex items-center lg:justify-between justify-baseline'>Woman’s Fashion<a href="#"></a> </li>
                                  <li className='flex items-center lg:justify-between justify-baseline'>Men’s Fashion<a href="#"></a></li>
                                  <li>Electronics</li>
                                  <li>Home & Lifestyle</li>
                                  <li>Medicine</li>
                                  <li>Sports & Outdoor</li>
                                  <li>Baby’s & Toys</li>
                                  <li>Groceries & Pets</li>
                                  <li>Health & Beauty</li>
                                 </ul>

                                 <div>
                                  <h3 className='mb-[15px] mt-[40px] font-bold text-[20px]'>Shop by Color</h3>
                                  <ul className='text-[#767676]'>
                                    <li> <span className="inline-block w-[11px] h-[11px] rounded-full bg-black mr-[10px]"></span> Color 1</li>
                                    <li> <span className="inline-block w-[11px] h-[11px] rounded-full bg-[#FF0000] mr-[10px]"></span> Color 1</li>
                                    <li> <span className="inline-block w-[11px] h-[11px] rounded-full bg-[#00FF38] mr-[10px]"></span> Color 1</li>

                                  </ul>
                                 </div>
                </div>
                             </div>
                <div className='w-[75%] flex flex-wrap'>
                  <div className='flex gap-4 w-full justify-end'>
                    <span>show:</span>
                    <div>

                                <select onChange={(e)=>setOptionValue(e.target.value)}
                                    className="px-6 py-2 border-1 border-secondary text-center">
                                    <option value="6">6</option>
                                    <option value="9">9</option>
                                    <option value="12">12</option>
                                  </select>


                      
                      {/* <select className='px-6 py-2 border-1 border-secondary text-center' value= "#">
                        <option value="#">6</option>
                        <option value="#">9</option>
                        <option value="#">12</option>
                      </select> */}
                   </div>

                  </div>
                  <div className='flex flex-wrap gap-5'>
                    {/* {
                       allproducts.map((item) =>{
                        return <Explore_p_card item={item}/>
                      })
                    } */}
                    { loading ?

                  <div className='flex justify-between'>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                     {/* {Array.from({length}).map((_, idx) => {
                       <Skeleton key={idx}/>
                     }
                       
                    )} */}

                  </div>
                    :
                    (
                    <Paginations itemsPerPage = {optionValue} allproducts = {allproducts}/>
                    )
                      
                 
                       
                    }

                  </div>
                   
                </div>
               
            </Flex>
            </Container>
        </div>
    </>
    
  )
}

export default Product
