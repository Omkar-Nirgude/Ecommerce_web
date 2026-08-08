import React from 'react'
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import  DarkMode  from './DarkMode' ;

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                <div className=''>
                    <a href="#" className='font-bold text-2xl sm:3xl flex gap-2'>
                        <img src={Logo} alt="Logo" className='w-10'/>NexCart
                    </a>
                </div>

                <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden sm:block '>
                        <input type='text'
                        placeholder='search' className='w-40 sm:w-40 group-hover:w-50 duration-200 ease-in rounded-full border border-gray-300 px-2 py-1
                        focus:outline-none  focus:border focus:border-primary dark:border-gray-500 dark:bg-gray-800' />
                        <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-4' />
                    </div>


                    <button onClick={() => handleOrderPopup()} className='bg-linear-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                        <span className='group-hover:block hidden transition-all duration-200'>
                            Order
                        </span>
                        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                    </button>

                    <div>
                        <DarkMode/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar

