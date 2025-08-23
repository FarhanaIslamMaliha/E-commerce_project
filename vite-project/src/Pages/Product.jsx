import React, { useEffect, useState } from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import Card from '../components/Card'
import Explore_p_card from '../components/Explore_p_card'


const Product = () => {

  const [allproducts, setAllProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => setAllProducts(data.products));

  },[]) 
  console.log(allproducts);

  return (
    <>
        <div>
            <Container>
               <BreadCrumb/>
            <Flex>
                <div className='w-[25%] bg-amber-300 h-80'></div>
                <div className='w-[75%] flex flex-wrap'>
                  <div className='flex gap-4 w-full justify-end'>
                    <span>show:</span>
                    <div>
                      <select className='px-6 py-2 border-1 border-secondary text-center' value= "#">
                        <option value="#">6</option>
                        <option value="#">9</option>
                        <option value="#">12</option>
                      </select>
                   </div>

                  </div>
                  <div className='flex'>
                    {
                      allproducts.map((item) =>{
                        return <Explore_p_card item={item}/>
                      })
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
