import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Flash_sales from '../components/Flash_sales'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Experience from '../components/Experience'
import Explore_products from '../components/Explore_products'
import Arrival from '../components/Arrival'
import Customer_Service from '../components/Customer_Service'
import Explore_p_card from '../components/Explore_p_card'


const Home = () => {

  // useEffect(() => {
  //   const getData = async() =>{

  //   };
  //   getData();
  // }, [])
  return (
    <>
     
      <Banner/>
      <Flash_sales/>
      <Categories/>
      <Products/>
      <Experience/>
      <Explore_products/>
      <Arrival/>
      <Customer_Service/>
      
    </>
   
  )
}

export default Home
