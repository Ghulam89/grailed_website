 import React from 'react'
import Navbar from '../../components/navbar'
import { FaOtter } from 'react-icons/fa'
 
 const index = () => {
   return (
     <div>
        <Navbar/>
            <h4 className=" text-black font-medium text-xl">Hand-Picked Collections</h4>
            <p className=" text-black font-medium text-md">Find daily discoveries from the most discerning and best-dressed people at Grailed.</p>
            <FaOtter/>
     </div>
   )
 }
 
 export default index