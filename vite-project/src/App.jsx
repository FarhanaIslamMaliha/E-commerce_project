import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Banner from './components/Banner'
import Flash_sales from './components/Flash_sales'
import Categories from './components/Categories'
// import Products from './components/Products'
import Experience from './components/Experience'
import Explore_products from './components/Explore_products'
import Arrival from './components/Arrival'
import Customer_Service from './components/Customer_Service'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Product from './Pages/Product'

import {createBrowserRouter,RouterProvider} from "react-router";
import RootLayout from './RootLayout'
import Wishlist from './Pages/Wishlist'

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      { path: "Wishlist", Component: Wishlist}
      
        ],
      },
      
  
]);
      
  



function App() {

  

  return (
    <>
       <RouterProvider router={router} />,
      
    </>
  )
}

export default App
