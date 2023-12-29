import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = () => {
  return (
    <Link className=' text-center'>
       <img src={require('../../assets/images/category1.webp')} className=' w-full'  alt=''/>

       <h5  className=' font-semibold text-black   text-base'>Avant-Garde</h5>
    </Link>
  )
}

export default CategoryCard