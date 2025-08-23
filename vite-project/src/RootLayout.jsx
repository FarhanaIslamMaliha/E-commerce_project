import React from 'react'
import { Outlet } from "react-router";
import HeaderTop from './components/HeaderTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




const RootLayout = () => {
  return (
    <>
        <div>
             <HeaderTop/>
             <Navbar/>
             <Outlet/>
             <Footer/>
        </div>
    </>
   
  )
}

export default RootLayout
