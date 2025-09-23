import { useState } from 'react'
import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout'
import Home from './Pages/Home'
import Product from './Pages/Product'
import P_Details from './Pages/P_Details'
import Wishlist from './Pages/Wishlist'
import Explore_productsP from './Pages/Explore_productsPage'
import Cartpage from './Pages/Cartpage'
import CheckPage from './Pages/CheckPage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage';







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
      { path: "Cart", Component: Cartpage},
      { path:"checkout", Component:CheckPage},
      { path:"about", Component:AboutPage}, 
      { path:"Contact", Component: ContactPage}
       
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
