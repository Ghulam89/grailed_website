import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const ButtonNav = () => {
  return (
    <div className='  hidden md:block'>
      <div className='h-12 border-b flex items-center '>

      
      <div className='container mx-auto   px-6'>
      <ul className=' flex items-center relative justify-between'>
              <li className='group  '>
                  <Link className=' text-xs  font-bold' to={''}>DESIGNERS</Link>

                  <div className='  w-[100%] bg-white absolute hidden group-hover:block  top-16 border z-50 p-8  h-[70vh]'>
                <div className=' flex gap-12'> 
                <div>
                  <h1 className=' text-xl  font-medium'>Designers A-Z</h1>
                </div>
                <div>
                  <ul className=' leading-9'>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Acne Studios</Link>
                    </li>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Adidas</Link>
                    </li>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Alexander McQueen</Link>
                    </li>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Amiri</Link>
                    </li>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Balenciaga</Link>
                    </li>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Bape</Link>
                    </li>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Bottega Veneta</Link>
                    </li>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Celine</Link>
                    </li>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Chanel</Link>
                    </li>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Chrome Hearts</Link>
                    </li>
                    <li>
                      <Link to={''} className=' text-black  text-sm font-medium'>Comme des Garcons</Link>
                    </li>
                  </ul>
                </div>
                </div>
              </div>


              </li>


            


             

            {/* <li className='  flex gap-12'> */}
                {/* <Link className=' text-xs  font-bold' to={''}>MENSWEAR</Link> */}
                <NavLinks/>
            {/* </li> */}
            {/* <li>
                <Link className=' text-xs  font-bold' to={''}>WOMENSWEAR</Link>
            </li> */}
            <li>
                <Link className=' text-xs  font-bold' to={''}>SNEAKERS</Link>
            </li>
            <li>
                <Link className=' text-xs  font-bold' to={''}>STAFF PICKS</Link>
            </li>
            <li>
                <Link className=' text-xs  font-bold' to={''}>COLLECTIONS</Link>
            </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default ButtonNav