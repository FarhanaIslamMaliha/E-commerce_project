import React, { useEffect, useState } from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import Card from '../components/Card'
import Explore_p_card from '../components/Explore_p_card'
import axios from "axios"
import Skeleton from '../components/Skeleton'
import Paginations from '../components/Paginations'
import { useDispatch } from 'react-redux'
import { ProductReducer, FilterReducer } from '../Slices/ProductSlice'


const Product = () => {

  const [allproducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [optionValue,setOptionValue] = useState(6);
  const [category, setCategory] = useState([])
  



  const dispatch = useDispatch()

  async function getAllProducts(){
      let data = await axios.get("https://dummyjson.com/products");
      setAllProducts(data.data.products);
      dispatch(ProductReducer(data.data.products))
     setLoading(false)
    }
useEffect(()=>{
  const uniqueCategory = [...new Set(allproducts.map((item)=> item.category))];
  setCategory(uniqueCategory);
},[allproducts])
  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then((data) => setAllProducts(data.products));
    
    getAllProducts()

  },[]) 


  const handleFilter = (item) =>{
    const filterProduct = allproducts.filter((Citem)=> Citem.category == item)
    dispatch(FilterReducer(filterProduct))
  }

  const handleAllProduct = () => {
      dispatch(ProductReducer(allproducts))
  }

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
                                  
                                <li className='capitalize cursor-pointer select-none' onClick={handleAllProduct}>All Products</li>
                                  {
                                    category.map((item, id) =>(

                                      <li className='capitalize cursor-pointer select-none' key={id} onClick={() => handleFilter(item)}>{item}</li>
                                    ))
                                  }
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
                  <div>
                    
                    { loading ? (
                       <div className='flex flex-wrap gap-6'>
                    
                     {Array.from({ length: optionValue }).map((_, idx)=>(
                      <Skeleton key={idx}/>
                     ))
                     }
                  
                  </div>
                    ) : (
                    <Paginations itemsPerPage = {optionValue}/>
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
