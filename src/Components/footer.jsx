import React from 'react'
import image from '../assets/footer/pay.png'

const Footer = () => {
    return (
        <div className=' dark:bg-black dark:text-white flex flex-col'>

            <div className='container py-10 w-full flex justify-center flex-wrap gap-y-8'>
                <div className='lg:w-1/5 md:w-1/3 sm:w-[50%] w-full  px-4'>
                    <h1 className='text-2xl text-pink-500 font-[700] mb-2'>CodesWear</h1>
                    <p className='font-[480]'>Wear the code </p>
                    <p className='font-[480]'>Premium coding tshirts, hoodies and apparals</p>
                </div>
                <div className='lg:w-1/5 md:w-1/3 sm:w-[50%] w-full  px-4'>
                    <h2 className='text-lg font-semibold mb-2'>SHOP</h2>
                    <li className='list-none '><a className='hover:text-pink-700 cursor-pointer font-[470]' href="">T-shirts</a></li>
                    <li className='list-none '><a className='hover:text-pink-700 cursor-pointer font-[470]' href="">Sweatshirts</a></li>
                    <li className='list-none '><a className='hover:text-pink-700 cursor-pointer font-[470]' href="">Hoodies</a></li>
                    <li className='list-none '><a className='hover:text-pink-700 cursor-pointer font-[470]' href="">Zipper Hoodies</a></li>
                    <li className='list-none '><a className='hover:text-pink-700 cursor-pointer font-[470]' href="">Mugs</a></li>
                </div>
                <div className='lg:w-1/5 md:w-1/3 sm:w-[50%] w-full  px-4'>
                    <h2 className='text-lg font-semibold mb-2'>CUSTOMER SERVICE</h2>
                    <li className='list-none'><a className='cursor-pointer hover:text-pink-700 font-[470]' href="">Contact Us</a></li>
                    <li className='list-none'><a className='cursor-pointer hover:text-pink-700 font-[470]' href="">About us</a></li>
                    <li className='list-none'><a className='cursor-pointer hover:text-pink-700 font-[470]' href="">Return Policy</a></li>
                </div>
                <div className='lg:w-1/5 md:w-1/3 sm:w-[50%] w-full  px-4'>
                    <h2 className='text-lg font-semibold mb-2'>POLICY</h2>
                    <li className='list-none'><a className='hover:text-pink-700 cursor-pointer font-[470]' href="">Privacy Policy</a></li>
                    <li className='list-none'><a className='hover:text-pink-700 cursor-pointer font-[470]' href="">Terms and Conditions</a></li>
                </div>
                <div className='lg:w-1/5 md:w-1/3 sm:w-[50%] w-full  px-4 flex items-center justify-start'>
                    <img src={image} className='sm:w-full w-[50%]' />
                </div>
            </div>
            <div className='flex px-10 py-4 dark:bg-slate-700 mb-12 md:mb-0'>
               <p className='text-gray-800 dark:text-gray-300 text-center'>© 2024 CodesWear.com — All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer