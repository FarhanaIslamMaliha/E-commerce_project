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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout'
import Home from './Pages/Home'
import Product from './Pages/Product'
import P_Details from './Pages/P_Details'
import Wishlist from './Pages/Wishlist'
import Explore_productsP from './Pages/Explore_productsPage'
import Cartpage from './Pages/Cartpage'







const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      { path: "Wishlist", Component: Wishlist},
      { path: "P_Details/:id", Component: P_Details},
      { path: "Explore_products", Component: Explore_productsP},
      {path: "Cart", Component: Cartpage}
      
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
