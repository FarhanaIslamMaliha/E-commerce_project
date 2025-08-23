import React from 'react'
import { useLocation } from 'react-router'


const BreadCrumb = () => {

      let location = useLocation().pathname
      let locationPathName = location.split("/")[1]
  return (
   <>
         <div className='py-10 flex gap-4'>
            <h2>Home</h2>
            <h2>/</h2>
            <h2>{locationPathName}</h2>
        </div>

   
   
   
   </>
  )
}

export default BreadCrumb
