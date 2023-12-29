import React from 'react'
import CategoryCard from '../cards/CategoryCard'
import BrandCard from '../cards/BrandCard'
import { FaLongArrowAltRight } from "react-icons/fa";
const PopularBrands = () => {
  return (
    <div className=' container  mx-auto  py-4 px-4'>
        <div className=' flex items-center justify-between'>
           <div>
           <h4 className=' text-black font-medium text-xl'>Popular Designers</h4>
           </div>
           <div>
            <p className=' text-xs flex items-center gap-1 text-[#0000FF]   font-extrabold'> <span>SEE ALL </span> <FaLongArrowAltRight color='#0000FF' />  </p>
           </div>
        </div>
        

        <div className='grid item1 col-span-2 py-3  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6  grid-cols-3 gap-5'>
         <BrandCard/>
         <BrandCard/>
         <BrandCard/>
         <BrandCard/>
         <BrandCard/>
         <BrandCard/>
         
        </div>


    </div>
  )
}

export default PopularBrands